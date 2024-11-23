import React from 'react'
import BookCard from './components/book-card';
import AddBookForm from './components/AddBookForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Books } from '@/data';

export default async function Home() {

  const res = await fetch ("/api/books")
  const books:Books[] = await res.json();
  console.log(books);
  
  return (

   <> 
      <div className='mx-auto'>
          <div>
            <Navbar/>
          </div>
          
          <div className=''>
            <AddBookForm/>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-10  '>
          {books.map((book)=>(
              <BookCard
              key={book.id}
              id={book.id}
              author={book.author}
              title={book.title}
              image={book.image}
              available={book.available}
              />
            ))}
          </div>
          <div>
            <Footer/>
          </div>
      </div>
   </>
  )
}
