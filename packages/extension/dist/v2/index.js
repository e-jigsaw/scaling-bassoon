const app = document.createElement('div')
app.id = '__SCALING_BASSOON__APP'
app.textContent = 'v2'
app.style.position = 'fixed'
app.style.zIndex = '2147483647'
app.style.right = 0
app.style.top = 0
app.style.fontSize = '20px'
app.style.color = '#0f0'
document.body.appendChild(app)
app.addEventListener('click', () => {
  chrome.runtime.sendMessage('scaling-bassoon:clicked')
})
