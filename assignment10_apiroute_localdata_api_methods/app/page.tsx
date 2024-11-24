

import { Book } from "@/data";
import BookCard from "@/components/book-card";
import BookForm from "@/components/book-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  //using environment variable in order to deploy
    const response = await fetch (`${baseUrl || 'http://localhost:3000'}/api/books`,{
      method: 'GET',
      cache:'no-store' // This will ensure fresh data is fetched
    })
  const books:Book[] = await response.json();
  console.log(books);
  return (
  
    <>
    <div>
      <Navbar/>
      <div className="container mx-auto">
        <BookForm/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-10  '>
        {books.map((book)=>(
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            image={book.image}
            available={book.available}
          />
        ))}
      </div>
      <Footer/>
    </div>
    </>
  );
}
