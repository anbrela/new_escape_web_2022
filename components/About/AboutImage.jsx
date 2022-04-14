import Image from "next/image";

export const AboutImage = ({ image, legend, altImage }) => {
  return (
    <div className="flex justify-center  w-full flex-col items-center z-0">
      <div className="w-3/4 h-64 flex shadow overflow-hidden rounded">
        <Image
          objectPosition="top"
          objectFit="cover"
          height="100%"
          src={image}
          alt={altImage}
        />
      </div>
      <div className="w-3/4 flex justify-end">
        <span className="text-xs mt-2 text-gray-500">{legend}</span>
      </div>
    </div>
  );
};
