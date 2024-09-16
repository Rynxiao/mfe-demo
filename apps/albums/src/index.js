const component = () => {
  const element = document.createElement('div')
  element.innerHTML = 'Hello, Albums app'
  return element
}

export const mount = (el) => {
  el.appendChild(component())
}

if (process.env.NODE_ENV === 'development') {
  const root = document.getElementById('albumsRoot')
  if (root) {
    mount(root)
  }
}
