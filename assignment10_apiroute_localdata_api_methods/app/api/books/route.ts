
// Importing the Book interface and books array from the specified module

import { books } from "@/data";
import { NextResponse } from "next/server";


// GET method
// Handler for GET requests
export  async function GET() {
    // Returns the books array as a JSON response with a 200 status code
    return new Response (JSON.stringify(books), {status:200})
};


// POST method
// Handler for POST requests
export const POST = async (request:Request) => {
  try {
      const newBook = await request.json();
      newBook.id = books.length + 1
      books.push(newBook)
      return new NextResponse (JSON.stringify ({newBook:newBook}),{
          status:200,
      });
  } catch {
      return new NextResponse (JSON.stringify ({message: 'Invalid Data'}),{
          status:400
      })
  }
}

// PUT method
// Handler for PUT requests (update a book's details)
export async function PUT(request: Request) {
    try {
      // Parse the JSON body of the request to get the book ID and the updated details
      //{ id, ...updatedBook } = ... is using JavaScript's destructuring assignment to extract properties from the object.
      //id: The id property is extracted from the object and assigned to the variable id
      //...updatedBook: The rest of the properties of the object are collected into a new object called updatedBook, using the rest operator (...). This means updatedBook will contain all properties of the object except id.
      const { id, ...updatedBook } = await request.json();
  
      // Find the index of the book to update in the books array
      const bookIndex = books.findIndex((b) => b.id === id);
  
      if (bookIndex !== -1) {
        // If the book exists, update its details
        books[bookIndex] = { ...books[bookIndex], ...updatedBook };
  
        // Respond with a success message and the updated book
        return new Response(
          JSON.stringify({ message: "Book has been updated!", book: books[bookIndex] }),
          { status: 200 } // Status 200 indicates a successful operation
        );
      } else {
        // If the book is not found, return a 404 response
        return new Response(JSON.stringify({ message: "Book not found!" }), {
          status: 404,
        });
      }
    } catch {
      // Catch and handle errors related to invalid JSON input
      return new Response(JSON.stringify({ message: "Invalid JSON input" }), {
        status: 400, // Status 400 indicates a bad request
      });
    }
  }

// DELETE method
// Handler for DELETE requests
export async function DELETE(request: Request) {
    // Parse the JSON body of the request to get the ID of the book to delete
    // { id } means you're extracting the id property from the object returned by await request.json().
    // { id: number } is a TypeScript type annotation. It is specifying that the id you are extracting must be of type number.
    const { id }: { id: number } = await request.json();
  
    // Find the index of the book to delete in the books array
    const bookIndex = books.findIndex((b) => b.id === id);
  
    if (bookIndex !== -1) {
      // If the book exists, remove it from the books array
      // '1': This is the number of elements to remove starting from bookIndex. Here, you're removing 1 element.
      const deletedBook = books.splice(bookIndex, 1); // Splice removes the book and returns it
  
      // Respond with a success message and the deleted book
      return new Response(
        JSON.stringify({ message: "Book deleted!", book: deletedBook[0] }),
        { status: 200 } // Status 200 indicates a successful operation
      );
    } else {
      // If the book is not found, return a 404 response
      return new Response(JSON.stringify({ message: "Book not found!" }), {
        status: 404,
      });
    }
  }