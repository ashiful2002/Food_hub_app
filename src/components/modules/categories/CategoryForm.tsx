"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categorySchema, CategoryFormValues } from "@/schemas/categorySchema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  defaultValues?: CategoryFormValues;
  onSubmit: (data: CategoryFormValues) => void;
  loading?: boolean;
};

const CategoryForm = ({ defaultValues, onSubmit, loading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Category Name"
          {...register("name")}
          disabled={loading}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          placeholder="Image Url"
          {...register("image")}
          disabled={loading}
        />
        {errors.image && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full cursor-pointer"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};

export default CategoryForm;