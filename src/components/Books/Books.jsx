import { useState } from 'react';
import './Books.css'
import { useEffect } from 'react';
import Book from '../Book/Book';
import { saveBooks } from '../BookDetails/Utils/Utils';
const Books = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('BookCollection.json')
        .then(res=>res.json())
        .then(data=>setBooks(data));
           },[])

              
    return (
        <div className='pt-16'>
            <h2 className="font-bold text-5xl text font-play text-center">Books</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    books.map(book=><Book key={book.id} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;