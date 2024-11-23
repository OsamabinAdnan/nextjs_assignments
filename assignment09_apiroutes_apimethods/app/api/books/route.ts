import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import  books  from "@/data";
import { Books } from "@/data";


// GET method

export const GET = async () =>{
    const data = JSON.stringify(books)
    return new Response(data, {status:200})
};

// POST method

export const POST = async (request:NextRequest):Promise<Response> => {
    try {
        const newBook = await request.json();
        newBook.id = books.length + 1
        books.push(newBook)
        return new Response (JSON.stringify ({newBook:newBook}),{
            status:200,
        });
    } catch {
        return new Response(JSON.stringify ({message: 'Invalid Data'}),{
            status:400
        })
    }
}

// PUT method
export const PUT = async (request:NextRequest):Promise<Response> => {
    try {
        const updatedBook = await request.json();
        const index = books.findIndex((book) =>book.id === updatedBook.id);

        if (index == -1){
            return new Response (JSON.stringify({message:'Book not found'}),{status:404})
        }
        books[index] = {...books[index], ...updatedBook};
        return new Response (JSON.stringify({updatedBook:books[index]}),{status:200})
    }
    catch (error){
        return new Response(JSON.stringify({message:'Invalid Data'}),{status:400})
    }
}

// DELETE method
export const DELETE = async (request:NextRequest):Promise<Response> => {
    try{
        const {id} = await request.json();
        const index = books.findIndex((book)=>book.id === id);

        if (index === -1){
            return new Response (JSON.stringify ({message:'Book not found'}),{status:404});
        };
        books.splice(index,1); // Remove book from the array
        return new Response (JSON.stringify({message:'Book deleted successfully'}), {status:200})
    }
    catch (error){
        return new Response (JSON.stringify({message:'Invalid Data'}), {status:400})
    }
}