import React from 'react';
import ReactDom from 'react-dom'

//CSS
import './index.css'

//books array
import {books} from './books'
import Book from "./Book";
import {greeting} from "./testing/testing";

function BookList(){
  return (
      <section className='booklist'>
        {books.map((book)=>{
          const {img, title, author} = book
          return (
              <Book key={book.id} {...book}/>
          )
        })};

      </section>
  )
}
ReactDom.render(<BookList/>, document.getElementById('root'));