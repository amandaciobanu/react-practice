import React from 'react';
import ReactDom from 'react-dom'



//CSS
import './index.css'
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
    title: 'Greenlights',
    author: 'Matthew McConaughey'
  },
  {
    id: 2,
    img:'https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg',
    title: 'The Deep End (Diary of a Wimpy Kid Book 15)',
    author: 'Jeff Kinney'
  },
  {
    id: 3,
    img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  },
];



function BookList(){
  return (
      <section className='booklist'>
        {books.map((book)=>{
          const {img, title, author} = book
        return (
            <Book key={book.id} book={book}/>
        )
      })};

      </section>
  )
}
const Book = (props) =>{
  const {img, title, author} = props.book
  return (
      <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>
  )
}




ReactDom.render(<BookList/>, document.getElementById('root'));