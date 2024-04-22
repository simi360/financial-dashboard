import { Metadata } from "next";
import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";
import { CreateCustomer } from "@/app/ui/customers/buttons";
import { CustomerTableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
    title: 'Customers'
}

export default function Customers() {

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search Customers..."/>
                <CreateCustomer />
            </div>
            <CustomerTableSkeleton />
        </div>
    )
}