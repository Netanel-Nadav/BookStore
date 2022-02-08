import { useState } from "react"

export function BookSort({onSetSortBy}) {

    const [currSortBy, setCurrSortBy] = useState('title')

    const setSortBy = (value) => {
        onSetSortBy(value)
        setCurrSortBy(value)
    }

    return (
    <section className="book-sort flex">
        <p className={currSortBy === 'title' ? 'active' : ''} onClick={() => setSortBy('title')}>Title</p>
        <p className={currSortBy === 'price' ? 'active' : ''} onClick={() => setSortBy('price')}>Price</p>
        <p className={currSortBy === 'rating' ? 'active' : ''} onClick={() => setSortBy('rating')}>Rating</p>
    </section>)
}