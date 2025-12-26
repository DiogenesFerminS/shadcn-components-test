"use client"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { useEffect, useState } from "react"

const Page = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const onKeydown = (e: KeyboardEvent) => {
      if(e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true)
      }
    }

    document.addEventListener('keydown', onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    }
  },[])

  return (
    <div className="flex justify-center items-center w-full">
      <CommandDialog open={open} onOpenChange={setOpen} className="rounded-lg border shadow-md max-w-90">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => alert('Calendar selected')}>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem disabled>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>

      <div>
        <p className="text-muted-foreground text-sm">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">CTRL</span> + J
        </kbd>
      </p>
      </div>
    </div>
  )
}

export default Page