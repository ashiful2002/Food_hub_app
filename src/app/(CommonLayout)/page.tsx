import ProductCard from "@/components/modules/meals/ProductsCard";
import { Button } from "@/components/ui/button";
import { getAllMeals } from "@/services/meals";
import Link from "next/link";

export default async function Home() {
  const { data } = await getAllMeals();
  const meals = data.data;

  return (
    <>
      <div className="">
        <h2 className="text-2xl font-semibold text-center my-5 ">
          Recently Added Meals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 ">
          {meals?.slice(0, 6).map((product: any, index: number) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link href={"/meals"}>
            <Button className="cursor-pointer">View All</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
