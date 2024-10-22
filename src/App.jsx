import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Header from './components/header/header'


function App() {

  return (
    <>
    <div className='w-[90%] md:w-[90%] mx-auto'>
    <Header></Header>
    <main className='md:flex w-[90%] md:w-[80%] mx-auto'>
    <Blogs></Blogs>
    <Bookmarks></Bookmarks>
    </main>
    </div>
      
    </>
  )
}

export default App
