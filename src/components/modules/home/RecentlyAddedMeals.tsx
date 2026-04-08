import { getAllMeals } from "@/services/meals";
import ProductCard from "../meals/ProductsCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RecentlyAddedMeals = async () => {
  const { data: mealsData } = await getAllMeals();
  const meals = mealsData.data;

  return (
    <div className="px-4">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-semibold my-5">Recently Added Meals</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {meals?.slice(0, 8).map((product: any, index: number) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>

      {meals && (
        <div className="flex items-center justify-center mt-4">
          <Link href={"/meals"}>
            <Button className="cursor-pointer">View All</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentlyAddedMeals;
