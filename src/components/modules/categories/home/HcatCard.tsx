import CategoryCard from "./card";

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  views: number;
  createdAt: string;
  updatedAt: string;
}

interface HcatCardProps {
  categories: Category[];
}

const HcatCard = ({ categories }: HcatCardProps) => {
  if (!categories?.length) {
    return (
      <div className="py-12 text-center text-sm text-muted-foreground">
        No categories found.
      </div>
    );
  }

  return (
    <>
      {categories.length && (
        <section>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-semibold my-5">Categories</h2>
            <span className="text-sm text-muted-foreground">
              {categories.length} categories
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.slice(0, 8).map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default HcatCard;
