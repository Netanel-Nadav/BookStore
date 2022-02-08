import { WishPreview } from '../components/WishPreview'
import { BookSort } from '../components/BookSort'
import React from 'react'

export function WishList({ wishlist, totalPrice, onSetSortBy, loadBooks }) {

    
    if(!wishlist) return <React.Fragment></React.Fragment>
    return(<section className="wish-list">
        <BookSort onSetSortBy={onSetSortBy} />
        {wishlist.map(wish => <WishPreview key={wish._id} wish={wish} loadBooks={loadBooks}/>)}
        <div>
            <span className="total">Total:</span> $ {totalPrice}
        </div>
    </section>)
}