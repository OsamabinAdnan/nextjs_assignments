'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';


// Define a type for the Book object
type Book = {
    title: string;
    author: string;
    image: string;
    available: boolean;
  };

export default function AddBookForm () {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState('');
    const [available, setAvailable] = useState(true)
    const [books, setBooks] = useState<Book[]>([]); // Local state for books

    const router = useRouter()

     // Load books from localStorage on initial render
    useEffect(()=> {
        const storedBooks = localStorage.getItem('books');
        if (storedBooks){
            setBooks(JSON.parse(storedBooks))
        }
    },[]);

    // Save books to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
      }, [books]);

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        const newBook = {title, author, image, available};
        // Save the book to the server
        const response = await fetch('/api/books', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBook),
        });
        if (response.ok){
            alert ('Book added successfully!')
            // Add the new book to local state
            setBooks((prevBooks) => [...prevBooks, newBook]);

            // Clear form fields
            setTitle('');
            setAuthor('');
            setImage('');
            setAvailable(true);
            router.refresh();
        }
        else {
            alert ('Error adding book!')
        }
    }

    return(
        <>
            <div className='max-w-4xl mx-auto my-10 shadow-2xl rounded-lg border-[1px] border-[#4ee247] bg-white font-sans' >
                <form onSubmit={handleSubmit} className='space-y-4 p-4 border rounded-lg w-full'>
                    <h1 className='flex mx-auto text-center justify-center text-lg font-bold'>ADD YOUR FAVORITE BOOK</h1>
                    {/* Book Title */}
                    <div>
                        <Label htmlFor='title' className='text-md font-bold '>Book Title:</Label>
                        <Input id='title' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Enter Book title' required />
                    </div>
                    
                    {/* Author Name */}
                    <div>
                        <Label htmlFor='author' className='text-md font-bold'>Author</Label>
                        <Input id='author' value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder='Enter Author name' required/>
                    </div>

                    {/* Image */}
                    <div>
                        <Label htmlFor='image' className='text-md font-bold'>Image URL</Label>
                        <Input id='image' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Enter Image URL' required/>
                    </div>
                    
                    {/* Availabilty */}
                    <div>
                        <Label htmlFor='available' className='text-md font-bold'>Check the box if the book is available in the store.
                            <Input type='checkbox' id='available' checked={available} onChange={(e)=> setAvailable(e.target.checked)}/>
                        </Label>
                    </div>
                    {/* Button */}
                    <div>
                        <Button className='text-sm font-semibold text-white bg-[#000] hover:text-black hover:bg-[#4ee247] transition-all duration-700 rounded-lg'>Click to Add</Button>
                    </div>
                </form>
            </div>
        </>
    )
}
