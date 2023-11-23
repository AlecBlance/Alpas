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
import { Project as ProjectType } from "@/types";

const Project = ({ project }: { project: ProjectType }) => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild className="cursor-pointer">
          <div className="relative">
            <div className="absolute inset-0 hover:bg-primary/20 rounded-md z-10 ease-in-out transition-all"></div>
            <AspectRatio ratio={16 / 9} className="hover:bg-red-700 rounded-md">
              <Image
                src={project.image}
                alt="Image"
                className="object-cover rounded-md"
                fill
              />
            </AspectRatio>
          </div>
        </DialogTrigger>
        <p className="text-sm font-medium leading-none py-2">{project.name}</p>
        <p className="text-xs text-muted-foreground">
          {project.owners.map((owner) => owner.displayName).join(", ")}
        </p>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription>
              <div>
                <p className="mb-5">Select your desired project link.</p>
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <Link
                      href={project.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Behance
                    </Link>
                  </Button>
                  {project.figmaUrl.map((figma) => (
                    <Button key={figma} asChild>
                      <Link
                        href={figma}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Figma
                      </Link>
                    </Button>
                  ))}
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
