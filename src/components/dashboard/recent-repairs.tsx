import { Avatar } from "@/components/ui/avatar";

const repairs = [
  {
    customer: "John Doe",
    device: "iPhone 12",
    status: "In Progress",
    date: "2024-02-20",
  },
  {
    customer: "Jane Smith",
    device: "Samsung S21",
    status: "Completed",
    date: "2024-02-19",
  },
  {
    customer: "Mike Johnson",
    device: "Google Pixel 6",
    status: "Pending",
    date: "2024-02-18",
  },
];

export function RecentRepairs() {
  return (
    <div className="space-y-8">
      {repairs.map((repair, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9" />
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{repair.customer}</p>
            <p className="text-sm text-muted-foreground">
              {repair.device} - {repair.status}
            </p>
          </div>
          <div className="ml-auto font-medium">{repair.date}</div>
        </div>
      ))}
    </div>
  );
}