--Set up status types enum
--INSERT INTO memberstatus (memberStatusType) VALUES ('Active'),('Probation'),('Retired'),('Retired');

--Set up status types enum
--INSERT INTO PhoneType (phoneType) VALUES ('Mobile'),('Home'),('Work');

--Seed member
INSERT INTO member (lastname, firstname, middlename, preferredname, callsign, dob, saremail, personalemail, dlnumber, dlstate, ssnlastfour, lastUpdate, memberStatusID )
VALUES ('Allen', 'Brad', 'R', 'Brad', 'L86', '1971-08-24', 'brad.allen@wasatchsar.org','bradrallen@gmaill.com','123456789', 'UT', 1234,current_timestamp,1);

INSERT INTO memberTenure (startDate, createdDate, lastUpdate, memberID, createdBy, lastUpdateBy)
VALUES ('2010-11-01', current_timestamp, current_timestamp,1000, 1000, 1000);

INSERT INTO memberAddress (street1, street2, city, "state", zip, createdDate, lastUpdate, memberID, createdBy, lastUpdateBy )
VALUES ('791 S 200 W', NULL, 'Heber City', 'UT', '84032', current_timestamp,current_timestamp, 1000, 1000, 1000);

INSERT INTO memberEmergencyContact (contactFullName, contactCellPhone, contactHomePhone, createdDate, lastUpdate, memberID, createdBy, lastUpdateBy)
VALUES ('Nina Allen', '4356541234', '4356570320', current_timestamp, current_timestamp, 1000, 1000, 1000);

INSERT INTO memberPhone (phoneTypeID, phoneNumber, isPrimary, memberID, createdDate, lastUpdate, createdBy, lastUpdateBy)
VALUES (1, '4355031887', true, 1000, current_timestamp, current_timestamp, 1000, 1000);

INSERT INTO memberPhone (phoneTypeID, phoneNumber, isPrimary, memberID, createdDate, lastUpdate, createdBy, lastUpdateBy)
VALUES (2, '4356570320', false, 1000, current_timestamp, current_timestamp, 1000, 1000);

--Seed member
INSERT INTO member (lastname, firstname, middlename, preferredname, callsign, dob, saremail, personalemail, dlnumber, dlstate, ssnlastfour, lastUpdate, memberStatusID )
VALUES ('Potter', 'Sherman', 'T', 'Colonel', 'L99', '1901-07-04', 'sherman.potter@wasatchsar.org','colonel.potter@mash.com','123456789', 'MO', 1234,current_timestamp,3);

INSERT INTO memberTenure (startDate, endDate, createdDate, lastUpdate, memberID, createdBy, lastUpdateBy)
VALUES ('1930-01-01', '1960-01-01',current_timestamp, current_timestamp,1001, 1000, 1000);

INSERT INTO memberAddress (street1, street2, city, "state", zip, createdDate, lastUpdate, memberID, createdBy, lastUpdateBy )
VALUES ('791 S 200 W', NULL, 'Hannibal', 'MO', '63401', current_timestamp,current_timestamp, 1001, 1000, 1000);

INSERT INTO memberEmergencyContact (contactFullName, contactCellPhone, contactHomePhone, createdDate, lastUpdate, memberID, createdBy, lastUpdateBy)
VALUES ('Mildred Potter', '4356549876', '4356579876', current_timestamp, current_timestamp, 1001, 1000, 1000);

INSERT INTO memberPhone (phoneTypeID, phoneNumber, isPrimary, memberID, createdDate, lastUpdate, createdBy, lastUpdateBy)
VALUES (1, '4355039876', true, 1001, current_timestamp, current_timestamp, 1000, 1000);