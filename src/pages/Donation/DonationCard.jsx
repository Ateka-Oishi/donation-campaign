/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
const {id, picture, title, category, category_bg, card_bg, text_button_bg, description, price} = donation;

      return (
        <Link to={`/donation`}>
        <div>
     <div className="flex justify-center items-center">
       <div style={{backgroundColor:card_bg}} className="relative flex w-full  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"> 
        <div  className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">           
        <img src={picture} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
           <h6 style={{color:text_button_bg, backgroundColor:category_bg}} className="mb-4 block w-[100px] font-sans text-base font-medium leading-relaxed px-4 py-2 rounded-md shadow-xl antialiased">
             {category}
           </h6>
           <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
             {title}
          </h4>

           <h4 style={{color:text_button_bg}} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
             ${price}.00
           </h4>


             <button style={{backgroundColor:text_button_bg}}
               
               className="flex  items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold text-[white] transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
               type="button"
            >
              View Details
             
             </button>
          
       </div>
       </div>
       </div>
    </div>
    </Link>
  );
};

export default DonationCard;