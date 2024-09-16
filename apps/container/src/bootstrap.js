import { trim } from 'lodash'
import './components/PostsApp'
import './components/AlbumsApp'

const component = () => {
  const element = document.createElement('div')

  element.innerHTML = trim(['Hello', 'Container app'].join(' ⭐️ '))

  return element
}

const root = document.getElementById('containerRoot')
root.appendChild(component())
