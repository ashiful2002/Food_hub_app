import HcatCard from "@/components/modules/categories/home/HcatCard";
import HeroCarousel from "@/components/modules/home/HeroCarousel";
import RecentlyAddedMeals from "@/components/modules/home/RecentlyAddedMeals";
import MealsCardSkeleton from "@/components/modules/meals/MealsCardSkeleton";
import { getCategories } from "@/services/categories";
import { Suspense } from "react";

export default async function Home() {
  // Only fetch categories here (lightweight)
  const { data: categoriesdata } = await getCategories();
  const categories = categoriesdata || [];

  return (
    <>
      <HeroCarousel />
      <HcatCard categories={categories} />

      <Suspense
        fallback={
          <div className="px-4">
            <h2 className="text-2xl font-semibold my-5">
              Recently Added Meals
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <MealsCardSkeleton key={i} />
              ))}
            </div>
          </div>
        }
      >
        <RecentlyAddedMeals />
      </Suspense>
    </>
  );
}
