import Image from "next/image";
import degree from "../../images/DEGREE.png";

export const HarryPotter = () => {
  return (
    <div className="min-h-screen flex items-center bg-proclamation">
      <Image src={degree} objectFit="cover" alt="escape room magic war" />
    </div>
  );
};
