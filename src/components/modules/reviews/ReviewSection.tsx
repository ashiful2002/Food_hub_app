import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const ReviewSection = ({ meal }: any) => {
  return (
    <div>
      {/* Reviews */}
      <h3 className="text-xl font-semibold">Customer Reviews</h3>
      <Separator />
      <div className="">
        {meal?.reviews?.length > 0 ? (
          <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 ">
            {meal.reviews.map((review: any) => (
              <Card
                key={review.id}
                className="border shadow-sm rounded-xl hover:shadow-md transition h-36"
              >
                <CardContent className="p-4 space-y-3">
                  {/* Top Row */}
                  <div className="flex items-center justify-between">
                    {/* User */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold">
                        <Image
                          src={review.customer.avatar}
                          alt={review.customer.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>

                      <div className="text-sm">
                        <p className="font-medium capitalize">
                          {review.customer?.name?.split(" ")[0] || "Customer"}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {new Date(review.createdAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}{" "}
                        </p>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {review.comment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            No reviews yet. Be the first to review this meal.
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
