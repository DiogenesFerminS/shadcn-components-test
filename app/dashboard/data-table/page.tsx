import { payments } from "@/data/payments.data";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const fetchData = async () => {
    return payments;
}

const Page = async () => {

  const data = await fetchData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>

  )
};

export default Page;
