import React, { useEffect, useState } from 'react'
import { BookPreview } from '../components/BookPreview'
import { WishList } from '../components/WishList'
import { bookService } from '../services/book.service'

export function HomePage() {

  const [books, setBooks] = useState(null)
  const [currBook, setCurrBook] = useState(null)
  let [page, setPage] = useState(0)
  const [favorites, setFavorites] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [sortBy, setSortBy] = useState('title')

  useEffect(() => {
    loadBooks()
  }, [])

  useEffect(() => {
    if (books) setCurrBook(books[page])
  }, [page])

  useEffect(() => {
    if(books) loadFavorites()
  },[books,sortBy])

  const loadFavorites = async () => {
    const favoritesToRender = await bookService.queryFavorites(sortBy)
    setFavorites(favoritesToRender.favorites)
    setTotalPrice(favoritesToRender.totalPrice)
}

  const loadBooks = async () => {
    const booksToRender = await bookService.query()
    setBooks(booksToRender)
    setCurrBook(booksToRender[page])
  }

  const changePage = (value) => {
    if (page === 0 && value === -1) setPage(books.length - 1)
    else if (page === books.length - 1 && page === 1) setPage(0)
    else setPage(page + value)
  }

  const onSetSortBy = (sort) => {
    setSortBy(sort)
  }

  if (!books ) return <React.Fragment></React.Fragment>
  if (!currBook) return <React.Fragment></React.Fragment>
  return (
    <section className="home flex justify-center">
      <span className="arrow" onClick={() => changePage(-1)}><i className="fas fa-chevron-left"></i></span>
      <div className='book-list'>
        <BookPreview book={currBook} loadBooks={loadBooks} />
      </div>
      <span className="arrow" onClick={() => changePage(1)}><i className="fas fa-chevron-right"></i></span>
      <WishList wishlist={favorites} totalPrice={totalPrice} onSetSortBy={onSetSortBy} loadBooks={loadBooks}/>
    </section>
  );
}
