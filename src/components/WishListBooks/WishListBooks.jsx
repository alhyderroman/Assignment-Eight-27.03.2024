import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../Utility/Utility";
import { useEffect, useState } from "react";
import WishListBook from "../WishListBook/WishListBook";

const WishListBooks = () => {
    const books = useLoaderData();
    const [addedToWishList,setAddedToWishList]=useState([]);
    useEffect(() => {
        const storedBookIds = getStoredWishList();
        if (books.length > 0) {
            const booksAddedToWishList = books.filter(book => storedBookIds.includes(book.id));
            setAddedToWishList(booksAddedToWishList)    
        }
            
    }, [])
    
   
   
    return (
        <div>
        <h2>{addedToWishList.length}</h2>
            {
                addedToWishList.map(bok=>
                    <WishListBook key={bok.id} book={bok}></WishListBook>
        
                )
            }
            
        </div>
    );
};

export default WishListBooks;