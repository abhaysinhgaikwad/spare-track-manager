import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Avatar } from "@/components/ui/avatar";

const customers = [
  {
    id: "CUST001",
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234-567-8900",
    repairs: 3,
    totalSpent: "$260",
    lastVisit: "2024-02-20",
  },
  {
    id: "CUST002",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 234-567-8901",
    repairs: 2,
    totalSpent: "$180",
    lastVisit: "2024-02-19",
  },
  {
    id: "CUST003",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "+1 234-567-8902",
    repairs: 1,
    totalSpent: "$60",
    lastVisit: "2024-02-18",
  },
];

const Customers = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8 bg-background">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold">Customers</h1>

            <Card>
              <CardHeader>
                <CardTitle>Customer List</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Total Repairs</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Last Visit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell className="flex items-center gap-2">
                          <Avatar className="h-8 w-8" />
                          {customer.name}
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                        <TableCell>{customer.repairs}</TableCell>
                        <TableCell>{customer.totalSpent}</TableCell>
                        <TableCell>{customer.lastVisit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Customers;