import MealDetails from "@/components/modules/meals/MealDetails";
import { getSingleMeal } from "@/services/meals";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const { data } = await getSingleMeal(id);

  return <MealDetails meal={data} />;
}
