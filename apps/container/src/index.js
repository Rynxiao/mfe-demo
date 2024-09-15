import 'postsApp/PostsIndex'

const component = () => {
  const element = document.createElement('div')

  element.innerHTML = ['Hello', 'container app'].join(' ')

  return element
}

document.body.appendChild(component())
