"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import CategoryForm from "./CategoryForm";
import { updateCategory } from "@/services/categories";

const EditCategoryModal = ({ category }: any) => {
  const handleUpdate = async (data: any) => {
    await updateCategory(category.id, data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Category</DialogTitle>
        </DialogHeader>

        <CategoryForm
          defaultValues={{
            name: category.name,
            image: category.image,
          }}
          onSubmit={handleUpdate}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryModal;
