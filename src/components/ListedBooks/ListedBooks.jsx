import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../Utility/Utility";
import PagesToRead from "../PagesToRead/PagesToRead";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const books = useLoaderData();
    const [addedToReadList, setAddedToReadList] = useState([]);
    useEffect(() => {
        const storedBookIds = getStoredReadList();
        if (books.length > 0) {
            const booksAddedToReadList = books.filter(book => storedBookIds.includes(book.id));
            setAddedToReadList(booksAddedToReadList);

        }

    }, [])

   

    return (
        <div>
            <h2>Listed Books:{addedToReadList.length}</h2>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                <NavLink to='/pagesToRead' onClick={() => setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b-0'} rounded-t-lg border-gray-400 text-black`}>
                    <span>Read Books</span>
                </NavLink>
                <NavLink to='/wishListBooks' onClick={() => setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b-0'} rounded-t-lg border-gray-400 text-black`}>
                    <span>Wishlist Books</span>
                </NavLink>

            </div>
            
            {
                addedToReadList.map(book => <PagesToRead key={book.id} book={book}></PagesToRead>)
            }

        </div>
    );
};

export default ListedBooks;