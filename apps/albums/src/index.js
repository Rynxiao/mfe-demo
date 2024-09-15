const component = () => {
  const element = document.createElement('div')
  element.innerHTML = 'Hello, Albums app'
  return element
}

const root = document.getElementById('albumsRoot')
root.appendChild(component())
