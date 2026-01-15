(async function() {
  if (document.getElementById('complex-app-root')) return;

  const host = document.createElement('div');
  host.id = 'complex-app-root';
  const shadow = host.attachShadow({ mode: 'open' });

  // Load external CSS via @import inside a style tag
  const styleTag = document.createElement('style');
  styleTag.textContent = `@import "your-domain.com";`;
  shadow.appendChild(styleTag);

  // App Structure using Template Literals
  const ui = document.createElement('div');
  ui.className = 'app-shell';
  ui.innerHTML = `
    <div style="padding: 15px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between;">
      <span style="font-weight: 700;">Site Analyzer v2</span>
      <button id="close" style="background:none; border:none; cursor:pointer;">✕</button>
    </div>
    <div class="grid-layout">
      <div class="card">
        <small>Images</small>
        <div id="img-count" style="font-size: 1.2rem; font-weight: bold;">-</div>
      </div>
      <div class="card">
        <small>Scripts</small>
        <div id="script-count" style="font-size: 1.2rem; font-weight: bold;">-</div>
      </div>
      <button class="action" id="run-scan">Run Page Scan</button>
    </div>
  `;

  shadow.appendChild(ui);
  document.body.appendChild(host);

  // Interactivity
  shadow.querySelector('#close').onclick = () => host.remove();
  shadow.querySelector('#run-scan').onclick = () => {
    shadow.querySelector('#img-count').innerText = document.querySelectorAll('img').length;
    shadow.querySelector('#script-count').innerText = document.querySelectorAll('script').length;
  };
})();
