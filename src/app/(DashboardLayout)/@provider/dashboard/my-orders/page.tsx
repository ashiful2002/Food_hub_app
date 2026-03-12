import Pagination from "@/components/Shared/Pagination";
import { getProvidersAllOrders, updateOrderStatus } from "@/services/Providers";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import OrderStatusSelect from "@/components/modules/provider/OrderStatusSelect";
import FormattedDate from "@/components/Shared/FormattedDate";

const page = async ({ searchParams }: any) => {
  const params = await searchParams;

  const data = await getProvidersAllOrders(params);
  const orders = data.data;
  const meta = data.meta;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "DELIVERED":
        return "bg-green-500";
      case "PREPARING":
        return "bg-yellow-500";
      case "PLACED":
        return "bg-blue-500";
      case "CANCELLED":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>streat</TableHead>
                <TableHead>city</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders?.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center py-10">
                    No orders found
                  </TableCell>
                </TableRow>
              ) : (
                orders?.map((order: any) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">
                      {order.customer.name}
                    </TableCell>
                    <TableCell className="font-medium">
                      {order.street}
                    </TableCell>
                    <TableCell className="font-medium">{order.city}</TableCell>

                    <TableCell>${order.totalAmount}</TableCell>

                    <TableCell>
                      <OrderStatusSelect
                        orderId={order.id}
                        status={order.status}
                      />
                    </TableCell>

                    <TableCell>
                      <FormattedDate date={order.orderedAt} />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Pagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default page;
