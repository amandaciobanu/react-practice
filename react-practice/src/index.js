import React from 'react';
import ReactDom from 'react-dom'



//CSS
import './index.css'

const firstBook ={
  img:'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
  title: 'Greenlights',
  author: 'Matthew McConaughey'
}

const secondBook ={
  img:'https://images-na.ssl-images-amazon.com/images/I/71Ks%2B8mKq2L._AC_UL200_SR200,200_.jpg',
  title: 'The Deep End (Diary of a Wimpy Kid Book 15)',
  author: 'Jeff Kinney'
}

function BookList(){
  return (
      <section className='booklist'>
        <Book img={firstBook.img} title={firstBook.title} author={firstBook.author.toUpperCase()}/>
        <Book img={secondBook.img} title={secondBook.title} author={secondBook.author.toUpperCase()}/>
      </section>
  )
}
const Book = ({img, title, author}) =>{
  return (
      <article className='book'>
        <img src={img} alt=""/>
        <h1>{title}</h1>
        <h4>{author}</h4>
      </article>
  )
}




ReactDom.render(<BookList/>, document.getElementById('root'));