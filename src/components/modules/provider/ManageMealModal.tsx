"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateMeal } from "@/services/Providers";
import { toast } from "sonner";
// import { useRouter } from "next/navigation";

const ManageMealModal = ({ meal }: { meal: any }) => {
  const [open, setOpen] = useState(false);

  // const router = useRouter();
  const handleUpdate = async (e: any) => {
    e.preventDefault();

    const form = e.target;

    const updatedMeal = {
      name: form.name.value,
      price: Number(form.price.value),
      description: form.description.value,
      image: form.image.value,
    };

    // console.log(updatedMeal);
    // router.refresh();

    await updateMeal(meal.id, updatedMeal);
    toast.success(`${updateMeal.name} updated successfully`, {
      position: "top-right",
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer" size="sm">
          Update Meal
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Meal</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input name="name" defaultValue={meal.name} />
          </div>

          <div>
            <Label>Price</Label>
            <Input name="price" type="number" defaultValue={meal.price} />
          </div>

          <div>
            <Label>Description</Label>
            <Input name="description" defaultValue={meal.description} />
          </div>

          <div>
            <Label>Image</Label>
            <Input name="image" defaultValue={meal.image} />
          </div>

          <Button type="submit" className="w-full">
            Update Meal
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ManageMealModal;
