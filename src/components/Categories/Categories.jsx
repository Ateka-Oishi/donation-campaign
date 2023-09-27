/* eslint-disable react/prop-types */
import CategoriesCard from "./CategoriesCard";

const Categories = ({categories}) => {
    console.log(categories);

    return (
        <div className="py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
                {
                    categories?.map(donation=> <CategoriesCard key={donation.id} donation={donation}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;