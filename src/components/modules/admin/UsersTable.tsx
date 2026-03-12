import { Table } from "@/components/ui/table";
import MakeProviderDialog from "./MakeProviderDialog";

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  role: string;
};

type UserTableProps = {
  title: string;
  users: User[];
};

const UserTable = ({ title, users }: UserTableProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <Table className="w-full border">
        <thead>
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.phone}</td>
              <td className="p-2 border">{user.status}</td>
              {user.role === "CUSTOMER" ? (
                <td className="p-2 border">
                  <MakeProviderDialog userId={user.id} />
                </td>
              ) : (
                "N/A"
              )}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
