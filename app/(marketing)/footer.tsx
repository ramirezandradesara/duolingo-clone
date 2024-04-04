import { Button } from "@/components/ui/button";
import Image from "next/image";

const Footer = () => {
  const flags = [
    { src: "/hr.svg", name: "Croatian" },
    { src: "/es.svg", name: "Spanish" },
    { src: "/it.svg", name: "Italian" },
    { src: "/fr.svg", name: "French" },
    { src: "/jp.svg", name: "Japanese" },
  ];
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        {flags.map(({ src, name }, index) => (
          <Button size={"lg"} variant={"ghost"} className="w-full" key={index}>
            <Image
              src={src}
              alt={name}
              width={32}
              height={40}
              className="mr-4 rounded-md"
            />
            {name}
          </Button>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
