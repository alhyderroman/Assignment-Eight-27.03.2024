import { FaRegStar } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import { MdDeleteForever } from 'react-icons/md'
const Book = ({ book }) => {
    const {id, image, title, author, rating, category } = book;

   
    return (
        <div>
            <NavLink to={`/book/${id}`}>
           <div className="card w-96 h-[481px] bg-base-100 shadow-xl p-6">
            <figure className="w-[326px] h-[230px] bg-gray-200"><img className="w-[100px] h-[150px] -rotate-2" src={image} alt="Shoes" /></figure>
            <h2></h2>
            <div className="card-body">
                <h2 className="card-title font-play text-2xl font-bold">{title}</h2>
                <p className="text-base font-medium">By: {author}</p>
                <div className="flex justify-between">
                    <div>
                        <h2>{category}</h2>
                    </div>
                    <div className="flex">
                        <div>
                            <p>{rating}</p>
                        </div>
                        <div className="pt-1">
                            <FaRegStar></FaRegStar>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        </NavLink>
       
        </div>
        
     
    );
};

export default Book;