import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import ngoLogo from "@/../public/animalLogo.jpeg";
import { Button } from "./ui/button";

const NgoCard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row gap-4 items-center">
        <Image
          className="rounded-[50%]"
          src={ngoLogo}
          width={50}
          height={50}
          alt="NGO Logo"
        />
        <CardTitle>People for Animals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="tags flex gap-2">
          <p className="w-fit px-2 py-[2px] text-[10px] bg-primary rounded-full">
            animal
          </p>
          <p className="w-fit px-2 py-[2px] text-[10px] bg-primary rounded-full">
            healthcare
          </p>
        </div>
        <p className="text-sm text-gray-300 pt-2">peopleforanimal.com</p>
      </CardContent>
      <CardFooter>
        <Button className="rounded-full from-purple-800 to-blue-800 bg-gradient-to-r hover:from-purple-900 hover:to-blue-900 hover:drop-shadow-lg hover:translate-x-1 transition-all">
          View more
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NgoCard;
