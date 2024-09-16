import './components/PostsApp'
import './components/AlbumsApp'

const component = () => {
  const element = document.createElement('div')

  element.innerHTML = ['Hello', 'container app'].join(' ')

  return element
}

const root = document.getElementById('containerRoot')
root.appendChild(component())
