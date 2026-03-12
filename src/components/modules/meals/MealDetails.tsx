"use client";

import Image from "next/image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

import { Star, Eye, MapPin, Clock, Utensils } from "lucide-react";
import { useRouter } from "next/navigation";
import ReviewSection from "../reviews/ReviewSection";

const MealDetails = ({ meal }: any) => {
  const router = useRouter();
  const handleAddToCart = (product: any) => {
    try {
      const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const existingItem = existingCart.find(
        (item: any) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        toast.success("Quantity updated in cart");
        router.push("/dashboard/cart");
      } else {
        existingCart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        });
        router.push("/dashboard/cart");
        toast.success("Added to cart");
      }

      localStorage.setItem("cart", JSON.stringify(existingCart));
    } catch (error) {
      toast.error("Failed to update cart");
    }
  };
  console.log(meal);

  return (
    <div className="min-h-screen bg-muted/40 p-6 md:p-10 flex justify-center">
      <div className="w-full max-w-5xl">
        <Card className="rounded-2xl overflow-hidden shadow-xl border-0">
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-[350px] md:h-full w-full">
              {meal?.image ? (
                <Image
                  src={meal.image}
                  alt={meal.name || "meal image"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-muted">
                  <span className="text-sm text-muted-foreground">
                    No image available
                  </span>
                </div>
              )}

              {/* Availability Badge */}
              <div className="absolute top-4 left-4">
                <Badge
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    meal?.isAvailable
                      ? "bg-green-500 hover:bg-green-500"
                      : "bg-red-500 hover:bg-red-500"
                  }`}
                >
                  {meal?.isAvailable ? "Available" : "Out of Stock"}
                </Badge>
              </div>
            </div>

            {/* Content Section */}
            <CardContent className="p-6 md:p-8 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Title & Price */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight capitalize">
                      {meal?.name}
                    </h1>
                    <p className="text-muted-foreground mt-1">
                      {meal?.description}
                    </p>
                  </div>

                  <div className="text-2xl font-extrabold text-primary">
                    ${meal?.price}
                  </div>
                </div>

                {/* Rating + Views */}
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <span className="font-medium text-foreground">
                      {meal?.averageRating?.toFixed(1) || "0.0"}
                    </span>
                    <span className="text-muted-foreground">
                      ({meal?.totalReviews || 0})
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    {meal?.views || 0} views
                  </div>
                </div>

                <Separator />

                {/* Provider */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Utensils className="w-4 h-4" />
                    {meal?.provider?.restaurantName}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {meal?.provider?.location}
                  </div>
                </div>

                <Separator />

                {/* Extra Info */}
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Added:{" "}
                    {meal?.createdAt
                      ? new Date(meal.createdAt).toLocaleDateString()
                      : "N/A"}
                  </div>

                  <div>Category: {meal?.category?.name || "N/A"}</div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="pt-8">
                <Button
                  onClick={() => handleAddToCart(meal)}
                  className="w-full rounded-xl text-base font-semibold cursor-pointer"
                  disabled={!meal?.isAvailable}
                >
                  {meal?.isAvailable ? "Add to Cart" : "Currently Unavailable"}
                </Button>
              </div>
            </CardContent>
          </div>
        < ReviewSection meal={meal}/>
        </Card>
      </div>
    </div>
  );
};

export default MealDetails;
