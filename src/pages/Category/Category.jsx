import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

const Category = () => {
    const categories = useLoaderData()
    // console.log(categories);
    const {id} = useParams();
    const donation = categories.find(donation => donation.id == id)
    // console.log(donation)


    return (
    <div>

    <CategoryCard donation={donation}></CategoryCard>
      </div>
    );
};

export default Category;