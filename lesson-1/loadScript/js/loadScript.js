console.log('loadScript');

function loadScript (path, callback) {
  const script = document.createElement('script')

  script.src = path
  script.onload = callback

  document.body.appendChild(script)
}