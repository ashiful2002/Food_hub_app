import MealsFilter from "@/components/modules/meals/MealFilter";
import ProductCard from "@/components/modules/meals/ProductsCard";
import { getAllMeals } from "@/services/meals";
import Pagination from "@/components/Shared/Pagination";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>;
}) => {
  const params = await searchParams;

  const { data } = await getAllMeals(params);
  const meals = data.data;
  const meta = data.meta;

  return (
    <div>
      <MealsFilter />

      {meals?.length === 0 ? (
        "empty meals"
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {meals?.map((product: any) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <Pagination totalPage={meta.totalPage} />
        </>
      )}
    </div>
  );
};

export default page;
