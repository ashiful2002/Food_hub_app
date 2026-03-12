import CategoryCard from "./CategoryCard";

const CategoryGrid = ({ categories }: any) => {
  return (
    <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
      {categories?.map((category: any) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoryGrid;