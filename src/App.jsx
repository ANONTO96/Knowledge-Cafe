import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

import Header from './components/header/header'


function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (time,id) => {
    setReadingTime(readingTime + time);
    
    // remove the read blog from bookmark
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks);
  }
  

  return (
    <>
    <div className='w-[90%] md:w-[90%] mx-auto'>
    <Header></Header>
    <main className='md:flex w-[90%] md:w-[80%] mx-auto'>
    <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark = {handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks= {bookmarks} readingTime={readingTime}></Bookmarks>
    </main>
    </div>
      
    </>
  )
}

export default App
