"use client";

import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import ManageMealModal from "./ManageMealModal";
import DeleteMeal from "./DeleteMeal";

const MealsTable = ({ meals }: { meals: any[] }) => {
  return (
    <div className="  rounded-xl shadow p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Meal</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Update</TableHead>
            <TableHead className="text-right">Delete</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {meals?.map((meal) => (
            <TableRow key={meal.id}>
              <TableCell>
                <div className="relative h-14 w-14">
                  <Image
                    src={meal.image}
                    alt={meal.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              </TableCell>

              <TableCell className="font-medium">{meal.name}</TableCell>

              <TableCell>${meal.price}</TableCell>

              <TableCell>{meal.views}</TableCell>

              <TableCell>
                {meal.isAvailable ? (
                  <Badge>Available</Badge>
                ) : (
                  <Badge variant="destructive">Unavailable</Badge>
                )}
              </TableCell>

              <TableCell className="text-right">
                <ManageMealModal meal={meal} />
              </TableCell>
              <TableCell className="text-right">
                <DeleteMeal id={meal.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MealsTable;
