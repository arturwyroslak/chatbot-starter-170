(function(){
  const form = document.getElementById('chat-form');
  const input = document.getElementById('message-input');
  const windowEl = document.getElementById('chat-window');

  function appendMessage(author, text) {
    const el = document.createElement('div');
    el.className = 'message ' + (author === 'me' ? 'me' : 'bot');
    el.textContent = (author === 'me' ? 'Ty: ' : 'Bot: ') + text;
    windowEl.appendChild(el);
    windowEl.scrollTop = windowEl.scrollHeight;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage('me', text);
    input.value = '';
    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });
      const data = await resp.json();
      if (resp.ok) {
        appendMessage('bot', data.reply);
      } else {
        appendMessage('bot', data.error || 'Błąd serwera');
      }
    } catch (err) {
      appendMessage('bot', 'Błąd połączenia');
    }
  });
})();
