import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function MealsCardSkeleton() {
  return (
    <Card className="w-full max-w-sm rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <CardHeader className="space-y-2 p-4">
        <Skeleton className="h-5 w-2/3 rounded animate-shimmer" />
        <Skeleton className="h-4 w-1/3 rounded animate-shimmer" />
      </CardHeader>

      {/* Image / Media */}
      <CardContent className="p-4">
        <Skeleton className="aspect-[4/3] w-full rounded-xl" />
      </CardContent>

      {/* Rating / Description */}
      <CardContent className="space-y-2 px-4 pb-4">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-full rounded" />
        <Skeleton className="h-4 w-2/5 rounded" />
      </CardContent>

      {/* Footer / Buttons */}
      <CardFooter className="flex flex-col gap-2 p-4">
        <Skeleton className="h-10 w-full rounded-xl" />
        <Skeleton className="h-10 w-full rounded-xl" />
      </CardFooter>
    </Card>
  );
}

export default MealsCardSkeleton;
