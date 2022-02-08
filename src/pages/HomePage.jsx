import React from 'react'
import { BookList } from '../components/BookList'
import { WishList } from '../components/WishList'

export function HomePage() {
  const books = [
    {
      "_id": "b101",
      "title": "Sea of Death",
      "description": "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
      "rating": "4.2",
      "author": "Jorge Amado",
      "price": "16.35"
    },
    // {
    //   "_id": "b102",
    //   "title": "The Day Lasts More than a Hundred Years",
    //   "description": "Set in the vast windswept Central Asian steppes and the infinite reaches of galactic space, this powerful novel offers a vivid view of the culture and values of the Soviet Union�s Central Asian peoples.",
    //   "rating": "4.5",
    //   "author": "Chingiz Aitmatov",
    //   "price": "24"
    // }
  ]

  const wishlist = [
    {
      "_id": "b101",
      "title": "Sea of Death",
      "description": "Written in 1936 when Amado was twenty-four years old, Sea of Death tells the dockside tales of Bahia. Sailors and their wives, steeped in the rich mythology surrounding the goddess Iemanj?, are at the heart of this novel, a lyrical and tragic portrayal of the workers� daily struggle for survival. Sea of Death narrates the story of Guma and L?via, lovers whose triumphs and tribulations mirror the dark imperatives of the world around them.",
      "rating": "4.2",
      "author": "Jorge Amado",
      "price": "16.35"
    },
    {
      "_id": "b102",
      "title": "The Day Lasts More than a Hundred Years",
      "description": "Set in the vast windswept Central Asian steppes and the infinite reaches of galactic space, this powerful novel offers a vivid view of the culture and values of the Soviet Union�s Central Asian peoples.",
      "rating": "4.5",
      "author": "Chingiz Aitmatov",
      "price": "24"
    }
  ]

  return (
      <section className="home flex justify-center">
          <span className="arrow"><i className="fas fa-chevron-left"></i></span>
          <BookList books={books} />
          <span className="arrow"><i className="fas fa-chevron-right"></i></span>
          <WishList wishlist={wishlist}/>
      </section>
  );
}
