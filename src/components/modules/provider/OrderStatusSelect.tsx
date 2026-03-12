"use client";

import { updateOrderStatus } from "@/services/Providers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

type Props = {
  orderId: string;
  status: string;
};

const OrderStatusSelect = ({ orderId, status }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = async (value: string) => {
    setLoading(true);

    try {
      await updateOrderStatus(orderId, { status: value });
      toast(`Order status changed to ${value}`, {
        position: "top-right",
      });

      router.refresh();
    } catch (error) {
      toast("Could not update order status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Select
      defaultValue={status}
      onValueChange={handleChange}
      disabled={loading}
    >
      <SelectTrigger className="w-[150px]">
        {loading ? (
          <div className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Updating
          </div>
        ) : (
          <SelectValue />
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="PLACED">Placed</SelectItem>
        <SelectItem value="PREPARING">Preparing</SelectItem>
        <SelectItem value="READY">Ready</SelectItem>
        <SelectItem value="DELIVERED">Delivered</SelectItem>
        <SelectItem value="CANCELLED">Cancelled</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default OrderStatusSelect;
