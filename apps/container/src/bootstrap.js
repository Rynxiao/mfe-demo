import 'postsApp/PostsIndex'
import 'albumsApp/AlbumsIndex'

const component = () => {
  const element = document.createElement('div')

  element.innerHTML = ['Hello', 'container app'].join(' ')

  return element
}

const root = document.getElementById('containerRoot')
root.appendChild(component())
