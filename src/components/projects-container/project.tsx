import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

const Project = () => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 hover:bg-primary/20 rounded-md z-10 ease-in-out transition-all"></div>
            <AspectRatio ratio={16 / 9} className="hover:bg-red-700 rounded-md">
              <Image
                src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/61cda4144528885.Y3JvcCw4NzksNjg3LDI3NCw1OA.png"
                alt="Image"
                className="object-cover rounded-md"
                fill
              />
            </AspectRatio>
          </div>
        </DialogTrigger>
        <small className="text-sm font-medium leading-none ">
          Sample Project
        </small>
        <p className="text-xs text-muted-foreground">Alec Blance</p>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sample Project</DialogTitle>
            <DialogDescription>
              <div>
                <p className="mb-5">Select your desired project link.</p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <Link href="/">Behance</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/">Figma</Link>
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Project;
