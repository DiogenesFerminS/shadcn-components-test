import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function Loading() {
  const data = "123456789".split("");

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className={cn("flex flex-row")}>
            <Skeleton className="rounded-full mr-2 w-10 h-10" />
            <div>
              <Skeleton className="h-4 w-1/2"/>
              <Skeleton className="h-3 w-full"/>
            </div>
          </CardHeader>

          <CardFooter className="flex justify-end">
            <Skeleton className="h-8 w-20"/>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
