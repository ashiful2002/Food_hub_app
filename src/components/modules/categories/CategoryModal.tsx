"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import CategoryForm from "./CategoryForm";
import { createCategory } from "@/services/categories";
import { toast } from "sonner";
import { useState } from "react";

const AddCategoryModal = () => {
  const [loading, setLoading] = useState(false);

  const handleCreate = async (data: any) => {
    try {
      setLoading(true);

      console.log("FORM DATA", data);
      await createCategory(data);

      toast.success("New category created");
    } catch (error: any) {
      toast.error(error.message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">Add Category</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>

        <CategoryForm onSubmit={handleCreate} loading={loading} />
      </DialogContent>
    </Dialog>
  );
};

export default AddCategoryModal;
