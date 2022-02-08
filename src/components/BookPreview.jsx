import { useState } from "react"
import { bookService } from "../services/book.service"

import { StarRating } from '../components/StarRating'

export function BookPreview({ book, loadBooks }) {

  const [isLiked, setIsLiked] = useState(book.isFavorite)

  const toggleWishList = async (ev) => {
    if (book.isFavorite) {
      book.isFavorite = false
    } else {
      book.isFavorite = true
    }
    await bookService.update(book)
    setIsLiked(!isLiked)
    loadBooks()
  }

  return (
    <section className="book-preview">
      <div className="book-container flex column">
        <div className="book-header flex space-between align-center">
          <h1>{book.title}</h1>
          <input type="checkbox" name="addToWishList" checked={book.isFavorite ? true : false} onChange={toggleWishList} />
        </div>
        <div className="book-content">
          <h1>{book.author}</h1>
          <p>{book.description}</p>
        </div>
        <div className="book-info">
          <div>Rating: <StarRating rating={book.rating}/></div>
          <p>Price: <span>$ {book.price}</span></p>
        </div>
      </div>
    </section>
  )
}
