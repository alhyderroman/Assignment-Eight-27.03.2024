import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveReadList, saveWishList } from '../Utility/Utility';

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams()
    const idInt=parseInt(id);
    const book = books.find(book => book.id === idInt);
    const { image, title, author, rating, category, review, tags, pages, publisher, yearOfPublishing } = book;

    const handleWishLisht=()=>{
        saveWishList(idInt);
        toast('added to wish list succesfully');
    }

    const handleReadList=()=>{
        saveReadList(idInt);
        toast('added successfully to read list')
    }
    
   
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl pt-16">
            <div className="">
                <figure className="p-20 w-[573px] h-[711px] bg-gray-200"><img className="w-[473px] h-[611px]" src={image} alt="Album" /></figure>
            </div>

            <div className=" card-body ">
                <div className="  border-b-2 w-full ">
                    <p className="card-title font-play text-2xl font-bold ">{title}</p>
                    <p className="text-base font-medium ">By: {author}</p>
                </div>
                <div className="border-b-2 w-full" >
                    <p>{category}</p>
                </div>
                <div>
                    <p> <span className="text-black font-sans font-bold">Review:</span> {review} </p>
                </div>
                <div className="flex  border-b-2 w-full ">
                    <p className="text-black font-sans font-bold">Tag:</p>
                    {
                        tags.map(tag => <p className="text-[#23BE0A]" key={id}># {tag}</p>)
                    }
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">

                            <tbody>
                                {/* row 1 */}
                                <tr>

                                    <td className="text-lg">Number of Pages:</td>
                                    <td className="text-black font-sans font-bold">{pages}</td>

                                </tr>
                                {/* row 2 */}
                                <tr>

                                    <td className="text-lg">Publisher:</td>
                                    <td className="text-black font-sans font-bold">{publisher}</td>

                                </tr>
                                {/* row 3 */}
                                <tr>

                                    <td className="text-lg">Year of Publishing:</td>
                                    <td className="text-black font-sans font-bold">{yearOfPublishing}</td>

                                </tr>
                                <tr>

                                    <td className="text-lg">Rating:</td>
                                    <td className="text-black font-sans font-bold">{rating}</td>

                                </tr>
                            </tbody>
                        </table>
                    
                    </div>
                   
                </div>


                <div className="card-actions ">
                    <button onClick={handleReadList}  className="btn bg-[#50B1C9]">Read</button>
                    <button onClick={handleWishLisht} className="btn  bg-[#50B1C9]">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;