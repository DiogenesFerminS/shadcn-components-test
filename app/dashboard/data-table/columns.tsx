"use client"

import { Badge } from "@/components/ui/badge";
import { Payment } from "@/data/payments.data"
import { ColumnDef, SortDirection } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { ChevronDownIcon, ChevronUpIcon, MoreHorizontal } from "lucide-react"
import { toast } from "sonner";

const SortedIcon = ({isSorted}: { isSorted: SortDirection | false }) => {
    if(isSorted === 'asc') {
        return <ChevronUpIcon className="h-4 w-4"/>
    };

    if(isSorted === 'desc') {
        return <ChevronDownIcon className="h-4 w-4"/>
    }

    return null;
}

const getVariant = (status: string) => {
    switch (status) {
      case "success":
        return 'success'
      case "pending":
        return 'info';
      case "processing":
        return 'secondary'
      case "failed":
        return "destructive";
      default: return "default"
    }
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client Name
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
      )
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
      )
    },
    cell: ({row}) => {
        const status = row.getValue("status") as string;
        return (<Badge
            capitalize
            variant={getVariant(status)}
        >{status}</Badge>)
    }
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
      )
    },
    cell: ({row}) => {
        const amount = parseFloat(row.getValue("amount"));
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(amount);

        return <div className="font-medium">{formatted}</div>
    }
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()}/>
        </Button>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
                toast('Payment id copy to the clipboard',{
                    position: 'top-center'
                })
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]