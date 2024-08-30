import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

type Props = {
  github: string;
  deploy: string;
  name: string;
  image: string;
};

const WorkCard = ({ github, deploy, name, image }: Props) => {
  return (
    <Card className="my-5 sm:my-0">
      <CardHeader className="p-0">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "200px" }}
          src={image}
          alt="workCard"
        />
      </CardHeader>
      <Separator />
      <CardContent className="py-4 sm:py-3">
        <p className="text-center text-xl font-bold">{name}</p>
      </CardContent>
      <div className="grid grid-cols-2">
      <a href={deploy} target="_blank">
        <Button className="w-full rounded-t-none rounded-br-none bg-blue-500 hover:bg-blue-700">
          {name}
        </Button>
      </a>
      <a href={github} target="_blank">
        <Button className="w-full rounded-t-none rounded-bl-none hover:bg-red-500">
          Github
        </Button>
      </a>
      </div>
    </Card>
  );
};

export default WorkCard;
