
const CategoriesCard = ({card}) => {
    const {id, picture, title, category, category_bg, card_bg, text_button_bg} = card || {}
    return (
        <div>
        <div>
   <div style={{backgroundColor:card_bg}} className="relative flex flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      className="h-full w-full object-cover"
    />
  </div>
  <div  className="p-6">
    <div className="mb-2 flex items-center justify-between">
      <p style={{color:text_button_bg, background:category_bg}} className="block font-sans text-base font-medium leading-relaxed category_bg text-blue-gray-900 shadow-xl antialiased">
        {category}
      </p>
    </div>
    <h2 style={{color:text_button_bg}} className="block font-sans text-md font-bold leading-normal text-gray-700 antialiased opacity-75">
      {title}
    </h2>
  </div>
</div>

</div>
</div>
    );
};

export default CategoriesCard;