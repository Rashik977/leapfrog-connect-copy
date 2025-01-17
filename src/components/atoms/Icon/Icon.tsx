import * as React from "react";
import Image from "next/image";

type IconProps = {
  icon: React.ReactNode;
  alt?: string;
  svg?: string;
};

const Icon: React.FC<IconProps> = ({ icon, alt, svg }) => {
  return (
    <div className="relative flex items-center justify-center w-[5.4375rem] h-[5.4375rem]">
      {svg && (
        <>
          <figure className="absolute inset-0 left-[0.3125rem]">
            <Image
              src={svg}
              alt={alt || "icon"}
              fill
              className="object-contain"
            />
          </figure>
          <div className="relative z-10">{icon}</div>
        </>
      )}

      {!svg && (
        <>
          <div className="absolute inset-0">
            <div className="w-[5.4375rem] h-[5.4375rem] bg-green-100 rounded-full"></div>
          </div>
          <div className="relative z-10 text-black">{icon}</div>
        </>
      )}
    </div>
  );
};

export default Icon;
