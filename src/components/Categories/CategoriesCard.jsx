/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CategoriesCard = ({donation}) => {
  const {id, picture, title, category, category_bg, card_bg, text_button_bg} = donation || {}

  return (
      <div>
        <Link to={`/categories/${id}`}>
      <div>
 <div style={{backgroundColor:card_bg}} className="relative flex flex-col rounded-xl bg-clip-border shadow-md">
<div className="relative overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
  <img
    src={picture}
    className="h-full w-full object-cover"
  />
</div>
<div  className="p-6">
  <div className="mb-2 flex items-center justify-between">
    <p style={{color:text_button_bg, background:category_bg}} className="block font-sans text-base font-medium leading-relaxed px-4 py-2 rounded-md shadow-xl antialiased">
      {category}
    </p>
  </div>
  <h2 style={{color:text_button_bg}} className="block font-sans text-md font-bold leading-normal text-gray-700 antialiased opacity-75">
    {title}
  </h2>
</div>
</div>

</div>
</Link>
</div>
  );
};

export default CategoriesCard;