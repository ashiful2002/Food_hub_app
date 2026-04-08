import Image from "next/image";
import Link from "next/link";
import { ImagePlaceholderIcon } from "./ImagePlaceholderIcon";
import { Category } from "./HcatCard";

const CategoryCard = ({ category }: { category: Category }) => (
  <Link
    // href={`/categories/${category.slug}`}
    href={``}
    className="group block rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-foreground/30"
  >
    <div className="relative aspect-video w-full bg-muted">
      {category.image ? (
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover"
        />
      ) : (
        <div className="flex h-full items-center justify-center text-muted-foreground">
          <ImagePlaceholderIcon />
        </div>
      )}
    </div>

    <div className="p-3">
      <p className="truncate text-sm font-medium text-card-foreground">
        {category.name}
      </p>
      <div className="mt-1 flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {category.views.toLocaleString()} views
        </span>
        <span className="truncate text-xs text-muted-foreground/60 max-w-[80px]">
          /{category.slug}
        </span>
      </div>
    </div>
  </Link>
);

export default CategoryCard;
