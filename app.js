console.log("Outside the Function!");
function() {
console.log("Inside the Function!");
    // Check if the app is already running
if (window.myBookmarkletAppLoaded) {
    console.log("MyBookmarkletApp is already loaded.");
    return;
}
window.myBookmarkletAppLoaded = true;

// Create the main application container
const appContainer = document.createElement('div');
appContainer.id = 'my-bookmarklet-app';
appContainer.innerHTML = '
                            <div class="app-header">
                                <h1>My Bookmarklet App</h1>
                                <button onclick="document.body.removeChild(document.getElementById('my-bookmarklet-app'))">Close</button>
                            </div>
                            <div class="app-content">
                                <p>This is a complete app injected by a bookmarklet!</p>
                                <button id="action-btn">Click me for action</button>
                            </div>
                        ';
document.body.appendChild(appContainer);

// Add functionality with event listeners
document.getElementById('action-btn').addEventListener('click', function() {
    alert('Action performed on the current page!');
});

// Simple styling adjustments (more complex styling in app.css)
appContainer.style.position = 'fixed';
appContainer.style.top = '10%';
appContainer.style.right = '10%';
appContainer.style.zIndex = '10000';
};
