import Image from "next/image";

const Project = () => {
  return (
    <div>
      <div>
        <Image
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/61cda4144528885.Y3JvcCw4NzksNjg3LDI3NCw1OA.png"
          alt="Image"
          className="w-full object-cover object-center rounded-md"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <small className="text-sm font-medium leading-none ">
        Sample Project
      </small>
      <p className="text-xs text-muted-foreground">Alec Blance</p>
    </div>
  );
};
export default Project;
