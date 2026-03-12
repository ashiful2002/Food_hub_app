import CategoryGrid from "@/components/modules/categories/CategoryGrid";
import CategoryModal from "@/components/modules/categories/CategoryModal";
import { getCategories } from "@/services/categories";
 

const Page = async () => {
  const { data: categories } = await getCategories();

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-semibold">Manage Categories</h1>

      <CategoryGrid categories={categories} />

      <div className="flex justify-center">
        <CategoryModal />
      </div>
    </div>
  );
};

export default Page;