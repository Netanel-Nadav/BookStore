import { bookService } from "../services/book.service"



export function WishPreview({ wish, loadBooks }) {

    const onRemoveFavorites = async () => {
        wish.isFavorite = false
        await bookService.update(wish)
        loadBooks()
    }

    return( 
    <section className="wish-preview flex space-between align-center">
        <div className="side-color"></div>
        <span>{wish.title}</span>
        <button onClick={onRemoveFavorites}>X</button>
    </section>)
}