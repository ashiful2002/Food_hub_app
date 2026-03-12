import { getOrdersForAdmin } from "@/services/orders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const getStatusColor = (status: string) => {
  switch (status) {
    case "PLACED":
      return "bg-blue-400";
    case "CONFIRMED":
      return "bg-yellow-400";
    case "DELIVERED":
      return "bg-green-400";
    case "CANCELLED":
      return "bg-red-400";
    default:
      return "bg-gray-400";
  }
};

const Page = async () => {
  const { data: orders } = await getOrdersForAdmin();

  return (
    <div className="p-8">
      <Card className="shadow-lg border">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            All Orders
          </CardTitle>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ordered At</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders?.map((order: any) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">
                    #{order.id.slice(0, 8)}
                  </TableCell>

                  <TableCell>
                    {order.customerId.slice(0, 6)}
                  </TableCell>

                  <TableCell>
                    {order.providerId.slice(0, 6)}
                  </TableCell>

                  <TableCell>
                    {order.street}, {order.city}
                  </TableCell>

                  <TableCell>{order.phone}</TableCell>

                  <TableCell className="font-semibold">
                    ৳{order.totalAmount}
                  </TableCell>

                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {new Date(order.orderedAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;