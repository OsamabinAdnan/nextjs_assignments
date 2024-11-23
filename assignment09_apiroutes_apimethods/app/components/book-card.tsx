'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Books } from '@/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'



export default function BookCard ({id,author,title,image, available}:Books){
    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState (title)
    const [newAuthor, setNewAuthor] = useState(author)
    const [newAvailable, setNewAvailable] = useState(available)
    const router = useRouter();

    // Handle put method
    const handleUpdate = async () => {
        const updateBook = {id, title:newTitle, author:newAuthor, available:newAvailable, image}
        const response = await fetch ('/api/books', {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(updateBook)
        });
        if (response.ok){
            alert ('Book updated successfully');
            setIsEditing(false)
            router.refresh();
        } else {
            alert ('Error updating book!')
        }
    };
    // Handle delete method
    const handleDelete = async () => {
        const response = await fetch ('/api/books', {
            method: 'DELETE',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(id),
        });
        if (response.ok){
            alert('Book deleted successfully!')
            router.refresh()
        } else {
            alert ('Error deleting book!')
        }
    }
    return(
        <>
            <Card className='h-full w-full max-w-sm shadow-2xl rounded-lg border-[2px] border-[#4ee247] hover:scale-105 transition-all duration-700 font-sans'>
                <CardHeader className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                        <Image src={image} alt={title} className="object-cover" fill />
                    </div>
                </CardHeader>
                <CardContent className='p-6'>
                    {isEditing ? (
                        <>
                        {/* Enter Title */}
                        <Label>Title</Label>
                        <Input value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} />
                        
                        {/* Enter Author */}
                        <Label>Author</Label>
                        <Input value={newAuthor} onChange={(e)=> setNewAuthor(e.target.value)}/>
                        
                        {/* Avaialability */}
                        <Label>Available</Label>
                        <Input type='checkbox' checked={newAvailable}  onChange={(e) =>setNewAvailable(e.target.checked)}/>
                        </>
                    ):(
                        <>
                            <CardTitle className='line-clamp-1 mb-1 sm:text-[22px] md:text-[26px] lg:text-[30px] text-[18px]'>{title}</CardTitle>
                            <CardDescription className='mb-1 sm:text-[18px] md:text-[22px] lg:text-[26px] text-[12px]'>by {author}</CardDescription>
                            <CardDescription className= {available ? 'text-green-700' : 'text-red-700'}>{available ? 'Available' : 'Unavailable'} </CardDescription>
                        </>
                    )}
                </CardContent>
                <CardFooter className="p-2 flex justify-between sm:justify-center gap-1 sm:gap-2">
                    {isEditing ? (
                        <>
                            <Button className=' w-full bg-green-600 hover:bg-green-800 font-semibold' onClick={handleUpdate}>Save</Button>
                            <Button className='w-full bg-black/80 hover:bg-black/100 font-semibold' onClick={()=>setIsEditing(false)}>Cancel</Button>
                        </>
                    ):(
                        <>
                            <Button className='w-full bg-black/80 hover:bg-black/100 font-semibold p-0' onClick={()=>setIsEditing(true)}>Update</Button>
                            <Button className='w-full bg-red-600 hover:bg-red-800 font-semibold p-0' variant={"destructive"} onClick={handleDelete}>Delete</Button>
                        </>
                    )}
                </CardFooter>
            </Card>
        </>
    )
}