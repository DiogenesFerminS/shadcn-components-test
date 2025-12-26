import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Page = () => {
  return (
    <div className="flex justify-center items-center gap-3">
       <Avatar className="min-h-10 min-w-10">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
          <AvatarFallback>CN</AvatarFallback>
       </Avatar>
      <p>@shadcn</p>
    </div>
  )
}

export default Page;