import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDonationFound, setNoDonationFound] = useState("");
    const [isSee, setIsSeeAll] = useState(false)

    useEffect(()=>{
        
     const donationItems = JSON.parse(localStorage.getItem('donation'));
    if(donationItems){
        setDonations(donationItems);
    }

    else{
        setNoDonationFound('No Donation Found');
    }

    }, []);
    // console.log(donations);
    const handleRemove = () =>{
        localStorage.clear()
        setDonations([])
        setNoDonationFound('No Donation Found')
    };



    return <div>{noDonationFound? 
        (<p className="flex justify-center items-center h-[80vh] text-xl">
            {noDonationFound}
            </p>
            ) : (
    <div>
        {donations.length > 0 && (
        <button onClick={handleRemove}
         className="my-5 px-5 py-3 rounded-md block bg-[#FF444A] text-[white] mx-auto"
         >
         Clear all Donations
         </button>
         )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
         {isSee
          ? donations?.map((donation)=> (
                <DonationCard key={donation.id} donation={donation}></DonationCard>
              )) 
            : donations.slice(0,4)?.map((donation)=> (
                <DonationCard key={donation.id} donation={donation}></DonationCard>
              )) 

         }
        </div>
    
    {donations.length > 4 && (
    <button onClick={()=>setIsSeeAll(!isSee)} className="my-5 px-5 py-3 rounded-md block bg-[#009444] text-[white] mx-auto">

        {isSee ? 'See less' : 'See All'}
    </button>
    )}
      </div>  
    )}
    </div>
    
};

export default Donation;