import { getProvidersAllMeals } from "@/services/Providers";
import MealsTable from "@/components/modules/provider/MealsTable";
import { toast } from "sonner";

const Page = async () => {
  const data = await getProvidersAllMeals();
  const meals = data?.data || [];

  return (
    <div className="p-6">
      <MealsTable meals={meals} />
    </div>
  );
};

export default Page;
