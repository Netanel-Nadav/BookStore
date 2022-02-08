import { BookPreview } from '../components/BookPreview'

export function BookList({ books }) {
    return(<section className="book-list">
        {books.map(book => <BookPreview key={book._id} book={book} />)}
    </section>)
}