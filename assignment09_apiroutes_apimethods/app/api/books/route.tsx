import { NextResponse } from "next/server";


// Data of API

export interface Books {
    id:number,
    title:string,
    author:string,
    image:string,
    available:boolean
  }
  
  let books:Books [] = [
    {
        id:1,
        title:"Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        image: '/design_data_by_martinkleppmann.png',
        available: true
    },{
        id:2,
        title:"Eloquent JavaScript (4th Edition) ",
        author: "Marijn Haverbeke",
        image: '/eloquent.png',
        available: true
    },{
        id:3,
        title:"Flutter Complete Reference ",
        author: "Alberto Miola",
        image: '/flutter.png',
        available: true
    },{
        id:4,
        title:"Artificial Intelligence: A Guide to Intelligent Systems ",
        author: "Michael Negnevitsky",
        image: '/ai_guide.jpg',
        available: true
    },{
        id:5,
        title:"Web Development with Django ",
        author: "Nigel George",
        image: '/web_django.jpg',
        available: true
    },{
        id:6,
        title:"HTML & CSS: Design and Build Websites ",
        author: "Jon Duckett",
        image: '/html_css.jpg',
        available: true
    },{
        id:7,
        title:"Deep Learning ",
        author: "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
        image: '/deep_learning.jpg',
        available: true
    },{
        id:8,
        title:"Generative AI with Python and TensorFlow",
        author: "Joseph Babcock",
        image: '/generative_ai.jpg',
        available: true
    },{
        id:9,
        title:"You Dont Know JS Yet: Get Started",
        author: "Kyle Simpson",
        image: '/dont_know_js.png',
        available: true
    },{
        id:10,
        title:"Full Stack Web Development For Beginners",
        author: "Riaz Ahmed",
        image: '/fullstack_riaz.jpg',
        available: true
    },{
        id:11,
        title:"React Explained",
        author: "Zac Gordon",
        image: '/react.jpg',
        available: true
    },{
        id:12,
        title:"Artificial Intelligence: A New Synthesis",
        author: "Nils J. Nilsson",
        image: '/ai_nils.jpg',
        available: true
    },{
        id:13,
        title:"Human Compatible",
        author: "Stuart Russell",
        image: '/human.jpeg',
        available: true
    },{
        id:14,
        title:"Competing in the Age of AI",
        author: "Marco Iansiti and Karim Lakhani",
        image: '/competingintheageofAI.png',
        available: true
    },{
        id:15,
        title:"The Big Nine",
        author: "Amy Webb",
        image: '/big9.jpg',
        available: true
    },{
        id:16,
        title:"Architects of Intelligence",
        author: "Martin Ford",
        image: '/architectsofIntelligence.jpg',
        available: true
    },{
        id:17,
        title:"The Age of Em",
        author: "Robin Hanson",
        image: '/theageofem.jpg',
        available: true
    },{
      id:18,
      title:"AI Narratives",
      author: "Stephen Cave and Kanta Dihal",
      image: '/ainarratives.jpg',
      available: true
    }
  ];

export default books


// GET method

export async function GET(){
    return NextResponse.json (books,{status:200})
}

// POST method

export async function POST (req:Request){
    try {
        const newBook = await req.json();
        books.push({...newBook, id:books.length+1})
        return NextResponse.json({message:"Book added successfully!"},{status:200})
    }
    catch(error){
        return NextResponse.json({message:"Error adding book!", error},{status:500})
    }
}

// PUT method
export async function PUT (req:Request) {
    try{
        const updateBook:Books = await req.json();
        books = books.map((book)=>
            book.id === updateBook.id ? { ...book, ...updateBook}:book
        );
        return NextResponse.json({message: 'Book updated successfully!'}, {status:200})
    }
    catch(error){
        return NextResponse.json({message:'There is an error in updating book, Try after some time!', error},{status:500})
    }
}

// DELETE method
export async function DELETE(req:Request){
    try {
        const id = await req.json()
        books = books.filter((book)=> book.id !== id);
        return NextResponse.json ({message:"Book has been deleted successfully!"},{status:200})
    }
    catch (error){
        return NextResponse.json ({message:"Error! book cant be deleted", error},{status:500})
    }
}