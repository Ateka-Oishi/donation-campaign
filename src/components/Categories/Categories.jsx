import CategoriesCard from "./CategoriesCard";

const Categories = ({categories}) => {
    console.log(categories);

    return (
        <div className="py-10">
            <h1 className="text-2xl">categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
                {
                    categories?.map(card=> <CategoriesCard key={card.id} card={card}></CategoriesCard>)
                }
            </div>
        </div>
    );
};

export default Categories;