alert("Check the console log for variables values passed thru the bookmark");
// Access the data directly from the window object
const receivedData = window.myAppData;
console.log('Data from bookmarklet:', receivedData.pageTitle);
console.log('Data from bookmarklet:', receivedData.user);
console.log('Data from bookmarklet:', receivedData.timestamp);
