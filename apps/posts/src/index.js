const component = () => {
  const element = document.createElement('div')
  element.innerHTML = 'Hello, Posts app'
  return element
}

const root = document.getElementById('postsRoot')
root.appendChild(component())
