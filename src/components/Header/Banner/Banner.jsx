
const Banner = () => {
    return (
        <div className="h-[70vh] relative bg-cover bg-no-repeat bg-overlay mb-5 flex items-center justify-center mx-auto" style={{ backgroundImage: `url(../banner.png)` }}>
        <div className="absolute inset-0 bg-[whitesmoke] opacity-95"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-2xl text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>
          <div className="mt-4">
          <input id="search"
         type="text" 
         className="px-4 py-2 text-gray-900 border border-custom-gray rounded-md"
         placeholder="Search here...."
         required
         />
          <button className="-ml-1 px-4 py-2 bg-[#FF444A] text-white rounded-md rounded-r-xl rounded-l-none">Search</button>
          </div>
        </div>
      </div>
      
        
       
        
            
       
   
    );
};

export default Banner;