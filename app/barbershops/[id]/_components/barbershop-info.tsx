"use client"

import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, StarIcon, MapPinIcon, MenuIcon } from "lucide-react";
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import SideMenu from "@/app/_components/side-menu";


interface BarbershopInfoProps {
    barbershop: Barbershop
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
    const router = useRouter();
    const handleBackClick = () => {
        router.replace("/")
    }

    return (
        <div>
            <div className="h-[250px] w-full relative">
                <Button size="icon" variant="outline" onClick={handleBackClick} className="z-50 top-4 left-4 absolute">
                    <ChevronLeftIcon />
                </Button>

                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline" size="icon" className="z-50 right-4 top-4 absolute">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>
                </Sheet>


                <Image src={barbershop.imageUrl} alt={barbershop.name} fill style={{ objectFit: "cover" }} className="opacity-75" />
            </div>

            <div className="py-3 px-5 pb-6 border-b border-solid border-secondary">
                <h2 className="text-xl font-bold">{barbershop.name}</h2>

                <div className="flex items-center gap-2 mt-2">
                    <MapPinIcon size={18} className="text-primary" />
                    <p className="">{barbershop.address}</p>
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <StarIcon size={18} className="fill-primary text-primary" />
                    <p className="">5.0 (889 avaliações)</p>
                </div>
            </div>
        </div>
    );
}

export default BarbershopInfo;
