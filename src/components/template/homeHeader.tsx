"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { headerBlob, heroWhitePath, underlineType1 } from "@/utils/svg";
import { heroBg, heroTopImage } from "@/utils/image";

import Text from "@/components/atoms/Text/Text";
import Button from "@/components/atoms/Button/Button";

const HomeHeader = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("#program");
  };

  return (
    <header
      className={
        "relative pr-0 bg-cover bg-top bg-no-repeat flex justify-center overflow-hidden md:pr-0 text-white mx-auto px-8 md:px-12 xl:px-0"
      }
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <figure>
        <Image
          src={headerBlob}
          alt="Blob"
          width={400}
          height={400}
          className="absolute w-full h-full top-12 left-16 md:left-64 lg:left-96 lg:top-0"
        />
      </figure>

      {/* Header Content */}
      <div className="relative lg:px-0 max-w-[80rem] lg:w-full mt-24 md:mt-[9.375rem] lg:mt-[12.5rem]">
        <div className="max-w-full xl:ml-[9.375rem] flex flex-col md:flex-row justify-between lg:justify-normal pr-8 lg:px-10 xl:p-0">
          {/* Left Content */}
          <div className="w-max-[21rem] w-full lg:w-[41.25rem] lg:pb-20">
            <Text
              as="h1"
              variant="3xl"
              font="serif"
              className="lg:text-6xl lg:leading-500 mb-5 relative"
            >
              <div className="relative inline-block">
                <span className="whitespace-nowrap">Leapfrog </span>
                <figure>
                  <Image
                    src={underlineType1}
                    alt="Underline"
                    width={270}
                    height={100}
                    className="absolute left-0 top-[85%] transform -translate-y-1/2 w-[270px] h-auto z-0"
                  />
                </figure>
              </div>
              <span className="whitespace-nowrap"> your </span>
              <span className="whitespace-nowrap"> career. </span>
            </Text>
            <Text
              as="h2"
              variant="base"
              className="lg:text-2xl lg:leading-300 mb-9"
            >
              Industry standard training, hands-on experience, and employment
              ready preparation.
            </Text>

            <Button onClick={handleClick}>Explore Programs</Button>
          </div>

          {/* Right Content */}
          <figure className="w-min-[20.625rem] mt-6 md:mt-0 self-center md:self-end xl:w-1/3 px-8 xl:p-0">
            <Image
              src={heroTopImage}
              alt="Hero Image"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure>
            <Image
              src={heroWhitePath}
              alt="Blob"
              width={288}
              height={288}
              className="absolute w-44 lg:w-72 right-0 -bottom-0"
            />
          </figure>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
