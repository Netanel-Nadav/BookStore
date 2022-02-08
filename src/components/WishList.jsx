import { WishPreview } from '../components/WishPreview'
import { BookSort } from '../components/BookSort'

export function WishList({ wishlist }) {
    return(<section className="wish-list">
        <BookSort />
        {wishlist.map(wish => <WishPreview key={wish._id} wish={wish} />)}
        <div>
            <span className="total">Total:</span> $ 140
        </div>
    </section>)
}