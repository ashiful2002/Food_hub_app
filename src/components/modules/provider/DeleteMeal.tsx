"use client";

import { Button } from "@/components/ui/button";
import { deleteAMealByProvider } from "@/services/Providers";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const DeleteMeal = ({ id }: { id: string }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDeleteMeal = async () => {
    try {
      setLoading(true);
      await deleteAMealByProvider(id);
      toast.success("Meal deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete meal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this meal?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the meal
            from your menu.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction
            disabled={loading}
            onClick={handleDeleteMeal}
            variant={"destructive"}
          >
            {loading ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteMeal;
