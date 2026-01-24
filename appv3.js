alert("V_2.3 Check the console log for variables values passed thru the bookmark");
let receivedData = window.myAppData;
console.log('Data from bookmarklet:', receivedData.pageTitle);
console.log('Data from bookmarklet:', receivedData.user);
console.log('Data from bookmarklet:', receivedData.timestamp);
alert("Data received from Bookmarklet: user=" + receivedData.user + " timestamp=" + receivedData.timestamp + " pageTitle=" + receivedData.pageTitle);
delete receivedData.pageTitle;
delete receivedData.user;
delete receivedData.timestamp;
receivedData = null
alert("Cleared variables data for next run");
