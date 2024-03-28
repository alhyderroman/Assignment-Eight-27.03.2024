
import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const PagesToRead = ({ book }) => {

    const { title, author, category, rating, image, tags, id } = book;

    return (


        <div className=" flex justify-around bg-base-100 shadow-xl w-[800px] border-2 gap-5 mt-6 ">
            <div>
                <figure className="w-[326px] h-[230px] bg-gray-200 flex flex-col justify-center  content-center pl-20 "><img src={image} className="w-[100px] h-[150px] " /></figure>
            </div>
            <div>
                <h2 className="card-title font-play text-2xl font-bold">{title}</h2>
                <p className="text-base font-medium">By: {author}</p>
                <div className="flex  w-full ">
                    <p className="text-black font-sans font-bold">Tag:</p>
                    {
                        tags.map(tag => <p className="text-[#23BE0A]" key={book}># {tag}</p>)
                    }
                </div>

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
                <button className="btn bg-[#23BE0A] text-[#FFFFFF]"> <NavLink to={`/book/${id}`}> View Details</NavLink></button>
            </div>
        </div>

    );
};

export default PagesToRead;