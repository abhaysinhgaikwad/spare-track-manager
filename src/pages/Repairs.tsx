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

const repairs = [
  {
    id: "REP001",
    customer: "John Doe",
    device: "iPhone 12",
    status: "In Progress",
    date: "2024-02-20",
    issue: "Screen replacement",
    cost: "$120",
  },
  {
    id: "REP002",
    customer: "Jane Smith",
    device: "Samsung S21",
    status: "Completed",
    date: "2024-02-19",
    issue: "Battery replacement",
    cost: "$80",
  },
  {
    id: "REP003",
    customer: "Mike Johnson",
    device: "Google Pixel 6",
    status: "Pending",
    date: "2024-02-18",
    issue: "Charging port repair",
    cost: "$60",
  },
];

const Repairs = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8 bg-background">
          <div className="space-y-8">
            <h1 className="text-3xl font-bold">Repairs</h1>

            <Card>
              <CardHeader>
                <CardTitle>Active Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Repair ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Device</TableHead>
                      <TableHead>Issue</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Cost</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {repairs.map((repair) => (
                      <TableRow key={repair.id}>
                        <TableCell>{repair.id}</TableCell>
                        <TableCell>{repair.customer}</TableCell>
                        <TableCell>{repair.device}</TableCell>
                        <TableCell>{repair.issue}</TableCell>
                        <TableCell>{repair.status}</TableCell>
                        <TableCell>{repair.date}</TableCell>
                        <TableCell>{repair.cost}</TableCell>
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

export default Repairs;