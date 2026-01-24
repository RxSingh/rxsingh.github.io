// 1. Setup UI (App Window)
if (document.getElementById('ai-summary-window')) return;
const win = document.createElement('div');
win.id = 'ai-summary-window';
win.style = "position:fixed;top:20px;right:20px;width:350px;height:500px;background:white;z-index:999999;box-shadow:0 0 20px rgba(0,0,0,0.3);border-radius:12px;display:flex;flex-direction:column;font-family:sans-serif;padding:15px;";
win.innerHTML = `
	<div style="display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding-bottom:10px;">
		<strong style="color:#333;">AI Summarizer</strong>
		<button onclick="this.parentElement.parentElement.remove()" style="cursor:pointer;border:none;background:none;font-weight:bold;">✕</button>
	</div>
	<div id="ai-content" style="flex:1;overflow-y:auto;padding-top:15px;font-size:14px;color:#555;line-height:1.5;">Extracting text and generating summary...</div>
`;
document.body.appendChild(win);

// 2. Extract Text (Reading the page)
// We target common content areas to avoid site headers/footers
const rawText = (document.querySelector('article') || document.body).innerText
	.substring(0, 5000); // Limit context for LLM window limits

// 3. Call AI LLM (OpenAI Example)
// WARNING: Do not hardcode secret keys in scripts shared publicly.
const API_KEY = 'YOUR_OPENAI_KEY'; 

fetch('https://api.openai.com', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${API_KEY}`
	},
	body: JSON.stringify({
		model: 'gpt-4o', // or 2026 current models
		messages: [{
			role: 'user', 
			content: `Summarize the following text briefly: ${rawText}`
		}]
	})
})
.then(res => res.json())
.then(data => {
	document.getElementById('ai-content').innerText = data.choices[0].message.content;
})
.catch(err => {
	document.getElementById('ai-content').innerText = "Error: Could not connect to AI. " + err;
});
