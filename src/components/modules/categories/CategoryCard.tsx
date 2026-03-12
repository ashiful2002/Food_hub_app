import { Card, CardContent } from "@/components/ui/card";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryDialog from "./DeleteCategoryDialog";
import Image from "next/image";

const CategoryCard = ({ category }: any) => {
  return (
    <Card className="group relative overflow-hidden rounded-2xl border hover:shadow-xl transition-all duration-300 ">
      <CardContent className="p-6 flex flex-col items-center text-center gap-4">
        {/* Image */}
        <div className="w-30 h-16 flex items-center justify-center rounded-fu ll bg-muted   transition">
          <Image
            src={category.image}
            alt={category.name}
            width={100}
            height={60}
            className="object-contain rounded-xl mb-2"
          />
        </div>

        {/* Title */}
        <div>
          <h3 className="text-lg font-semibold capitalize">{category.name}</h3>
          <p className="text-xs text-muted-foreground">{category.slug}</p>
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <EditCategoryModal category={category} />
          <DeleteCategoryDialog id={category.id} />
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
