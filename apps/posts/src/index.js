const component = () => {
  const element = document.createElement('div')
  element.innerHTML = 'Hello, Posts app'
  return element
}

document.body.appendChild(component())
