import Swal from "sweetalert2";
let addedDonationArray = [];

export const saveLocalStorage = (donation) => {

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

}