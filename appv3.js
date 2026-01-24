alert("V_1.1 Check the console log for variables values passed thru the bookmark");
// Access the data directly from the window object
// let receivedData = window.myAppData;
if (typeof receivedData == "undefined")
   {let receivedData = window.myAppData;}
else
   {receivedData = window.myAppData;}
console.log('Data from bookmarklet:', receivedData.pageTitle);
console.log('Data from bookmarklet:', receivedData.user);
console.log('Data from bookmarklet:', receivedData.timestamp);
alert("Data received from Bookmarklet: user=" + receivedData.user + " timestamp=" + receivedData.timestamp + " pageTitle=" + receivedData.pageTitle);
delete receivedData.pageTitle;
delete receivedData.user;
delete receivedData.timestamp;
delete receivedData
receivedData = null;
receivedData = undefined;
alert("Cleared variables data for next run");
