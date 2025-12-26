import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ArrowUpRightIcon, CarIcon } from "lucide-react";

const Page = () => {

  return (
    <div className="flex gap-4 flex-wrap">
      <Button>default</Button>

      <Button variant="ghost">ghost</Button>

      <Button variant="destructive">destructive</Button>

      <Button variant="link">link</Button>

      <Button variant="outline">outline</Button>

      <Button variant="secondary">secondary</Button>

      <Button disabled>disabled</Button>

      <Button variant="success">success</Button>

      <Button size="lg" variant="outline" disabled>
        <Spinner />
        Submit
      </Button>

      <Button variant="outline" size="icon" className="rounded-full">
        <ArrowUpRightIcon />
      </Button>

      <Button variant="outline" size="sm">
        <CarIcon /> Buy a car
      </Button>
    </div>
  );
}

export default Page;