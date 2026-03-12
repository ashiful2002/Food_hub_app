import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategories } from "@/services/categories";

const CategoriesCard = async () => {
  const { data: categories } = await getCategories();
  return (
    <div>
      {" "}
      first section
      <div className="min-h-32">
        <h2 className="text-2xl font-semibold text-center ">Cuisines</h2>

        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 mx-2">
          {categories.map((cat: any, index: string) => (
            <div key={index} className=" ">
              <Card className="">
                {/* bg-[url(https://i.ibb.co.com/7JbwkQ1B/1.webp)] */}
                <CardHeader className="">
                  <CardTitle className="capitalize inline w-2xl  ">
                    {cat.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
