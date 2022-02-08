export function BookPreview({ book }) {
  return (
    <section className="book-preview">
      <div className="book-container flex column">
        <div className="book-header flex space-between align-center">
          <h1>{book.title}</h1>
          <input type="checkbox" name="addToWishList" />
        </div>
        <div className="book-content">
            <h1>{book.author}</h1>
            <p>{book.description}</p>
        </div>
        <div className="book-info">
            <p>Rating: <span>{book.rating}</span></p>
            <p>Price: <span>$ {book.price}</span></p>
        </div>
      </div>
    </section>
  )
}
