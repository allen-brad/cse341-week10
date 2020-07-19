const express = require('express');
const app = express();
require('dotenv').config();
const { Pool } = require("pg"); // This is the postgres database connection module.
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL ,
    ssl: {
      rejectUnauthorized: false
    }
  });

// static files
app.use(express.static(__dirname + '/public'));


app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

//endpoints
app.get('/members', getMembers);
app.get('/members/:memberId', getMember);

// Start the server running
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function getMembers(req, res) {
    console.log(req.originalUrl);
    console.log("getMembers called");

	//helper function to query the DB
	getMembersFromDb(function(error, result) {
		// check for rows then send JSON
		if (error || result == null || result.length == 0) {
			res.status(500).json({success: false, data: error});
		} else {
            console.log("getMembers result: " + JSON.stringify(result.rows));
            res.status(200).json(result.rows);
        }   
	});
}

function getMember(req, res) {
    console.log(req.originalUrl);
    console.log("getMember called");

    //helper function to query the DB
    var id = req.params.memberId
	getMemberByID(id, function(error, result) {
		// check for rows then send JSON
		if (error || result == null || result.length == 0) {
			res.status(500).json({success: false, data: error});
		} else {
            console.log("getMember result: " + JSON.stringify(result.rows));
            res.status(200).json(result.rows);
        }   
	});
}

function getMemberByID(id, callback) {
	console.log("getMemberByID: " + id);

	// use parameter placeholders like PHP's PDO
    const sql = "SELECT m.memberid , m.firstname, m.middlename, m.lastname, m.preferredname, m.callsign, m.dob, m.saremail, m.personalemail, m.dlnumber, m.dlstate, m.ssnlastfour, s.memberstatustype, e.contactfullname, e.contactcellphone, e.contacthomephone\
    FROM Member m \
    JOIN MemberStatus s ON m.memberstatusid = s.memberstatusid \
    JOIN MemberEmergencyContact e ON m.memberid = e.memberid \
    WHERE m.memberid = $1::int;";

	//array of all the parameters for the placeholders
	const params = [id];
    //run query with callback
	pool.query(sql, params, function(err, result) {
		// If error...
		if (err) {
			console.log("Error in query: ")
			console.log(err);
			callback(err, null);
		}

        // all good so null the error variable and return results
        callback(null, result);
	});

} // end of getMemberByID

function getMembersFromDb(callback) {
    //Get General Member Directory
    const sql = "SELECT m.memberid , m.preferredname || ' ' || m.lastname AS fullname, m.callsign, p.phonenumber FROM Member m JOIN MemberPhone p ON m.memberid = p.memberid WHERE p.isprimary = true ORDER BY m.lastname, m.firstname DESC";

	//runs the query, then calls anonymous callback function with results
	pool.query(sql, function(err, result) {
		if (err) {
			console.log("SQL Error: ")
			console.log(err);
			callback(err, null);
		}

		// no errors so null the error variable and send results
		callback(null, result);
	});

} // end of getMembersFromDb