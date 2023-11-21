import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Project = () => {
  return (
    <div>
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/61cda4144528885.Y3JvcCw4NzksNjg3LDI3NCw1OA.png"
          alt="Image"
          className="object-cover rounded-md"
          fill
        />
      </AspectRatio>
      <small className="text-sm font-medium leading-none ">
        Sample Project
      </small>
      <p className="text-xs text-muted-foreground">Alec Blance</p>
    </div>
  );
};
export default Project;
