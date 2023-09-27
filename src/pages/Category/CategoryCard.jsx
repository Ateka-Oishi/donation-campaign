/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const CategoryCard = ({donation}) => {

    const {id, picture, title, category, category_bg, card_bg, text_button_bg, description} = donation;
    const handleAddDonations = () =>{
      const addedDonationArray = []
      const donationItems = JSON.parse(localStorage.getItem('donation'));
      // Swal.fire("Great!", `You donated $${donation.price}`, "success");
      if(!donationItems){
        addedDonationArray.push(donation);
        localStorage.setItem('donation', JSON.stringify(addedDonationArray)).
        Swal.fire("Great!", `You donated $${donation.price}`, "success");
      }

      else{
        const isExist = donationItems.find(donation=>donation.id === id);
        if (!isExist){

          addedDonationArray.push(...donationItems, donation);
        localStorage.setItem('donation', JSON.stringify(addedDonationArray));
        Swal.fire("Great!", `You donated $${donation.price}`, "success");

        }

        else{
          Swal.fire("error!", `You have donated ${donation.category}`, "error")
        }

      }
      
      localStorage.setItem('category', JSON.stringify([{name: 'title'}, {name:'donation'}]))
    }
   
    return (
        <div>
  <Link to={`/categories/${id}`}>

  
 <div style={{backgroundColor:card_bg}} className="relative flex flex-col rounded-xl bg-clip-border">
<div className="relative overflow-hidden rounded-xl bg-white">
  <img
    src={donation.picture}
    className="w-full h-[400px]"
  />
  <div className="bg-blend-overlay bg-black opacity-40 absolute bottom-0 w-full p-8">
  </div>
  <div className="absolute bottom-3 left-3">
  <button onClick={()=>handleAddDonations(donation.price)} style={{backgroundColor:text_button_bg}} className="text-[white] p-2 rounded-lg">Donate ${donation.price}</button>
  </div>
</div>
</div>
<div  className="mt-6">
  <div className="flex items-center justify-between">
    <h2 className="block font-sans text-2xl text-[#0B0B0B] font-bold mb-2 leading-relaxed antialiased">
      {donation.title}
    </h2>
  </div>
  <p className="block font-sans text-xl text-[#0B0B0BB2] leading-normal antialiased">
    {donation.description}
  </p>
</div>


   
</Link>
  </div>
    );
};

export default CategoryCard;