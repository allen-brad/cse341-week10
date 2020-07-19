import Fetch from '/js/fetch.js';


document.getElementById ("btnAllMembers").addEventListener ("click", getAllMembers, false);

document.getElementById ("btnGetMember").addEventListener ("click", getMember, false);

async function getAllMembers() {
    console.log("requesting all members");
    const members = await Fetch.get('/members');
    var ul = document.getElementById("memberList");

    members.forEach(obj => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(obj.fullname + ": " + obj.callsign));
        ul.appendChild(li);
        // Object.entries(obj).forEach(([key, value]) => {
        //     console.log(`${key} ${value}`);
        // });
        //console.log('-------------------');
    });   
}

async function getMember() {
    var id = document.getElementById("memberID").value;

    if(id!=""){

        console.log("requesting member:"+ id);
        const member = await Fetch.get('/members/'+ id);
        var div = document.getElementById("memberDetail");
        div.style = "white-space: pre;"
        member.forEach(obj => {
            var memberDetailText ="";
            Object.entries(obj).forEach(([key, value]) => {
                memberDetailText+=(`${key}: ${value}\n`);
            });
            //div.appendChild(document.createTextNode(memberDetailText));
            div.innerHTML = memberDetailText;      
        });  
    }
 
}

