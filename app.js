(function() {
  // Prevent multiple instances
  if (document.getElementById('my-bookmarklet-app')) return;

  // 1. Create a Shadow DOM container to isolate styles
  const container = document.createElement('div');
  container.id = 'my-bookmarklet-app';
  const shadow = container.attachShadow({mode: 'open'});

  // 2. Add App Styles
  const style = document.createElement('style');
  style.textContent = `
    .app-window {
      position: fixed; top: 20px; right: 20px; width: 300px;
      background: #ffffff; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);
      z-index: 999999; font-family: sans-serif; padding: 15px; color: #333;
    }
    .header { display: flex; justify-content: space-between; font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 8px; }
    button { cursor: pointer; border: none; background: #007bff; color: white; padding: 5px 10px; border-radius: 4px; }
    #close-btn { background: #ff4d4d; }
  `;

  // 3. Add App UI
  const appUI = document.createElement('div');
  appUI.className = 'app-window';
  appUI.innerHTML = `
    <div class="header">
      <span>My App 2026</span>
      <button id="close-btn">X</button>
    </div>
    <p>Page Title: <strong>${document.title}</strong></p>
    <button id="action-btn">Scan Elements</button>
    <div id="results" style="margin-top: 10px; font-size: 12px;"></div>
  `;

  shadow.appendChild(style);
  shadow.appendChild(appUI);
  document.body.appendChild(container);

  // 4. Interactivity
  shadow.querySelector('#close-btn').onclick = () => container.remove();
  shadow.querySelector('#action-btn').onclick = () => {
    const links = document.querySelectorAll('a').length;
    shadow.querySelector('#results').innerText = `Found ${links} links on this page.`;
  };
})();
