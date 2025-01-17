import Image from "next/image";

import { videoBlob } from "@/utils/svg";
import { infoVideo } from "@/utils/image";

import Text from "@/components/atoms/Text/Text";
import Container from "@/components/atoms/container/container";

const InfoSection = () => {
  return (
    <section className="w-full bg-white -z-10 relative overflow-hidden">
      <figure>
        <Image
          src={videoBlob}
          alt="Blob"
          width={400}
          height={400}
          className="absolute w-full h-full top-44 md:top-40 xl:-left-80 xl:-top-10 -z-10"
        />
      </figure>
      <Container className="max-w-[980px] xl:w-full pt-[54px] xl:pt-[115px] pb-[60px] md:pb-[158px]">
        <div className="mx-auto flex justify-between flex-col-reverse items-center xl:flex-row gap-[40px] md:gap-[100px] xl:gap-0">
          <figure>
            <Image
              src={infoVideo}
              alt="Leapfrog Connect Info"
              width={380}
              height={420}
            />
          </figure>

          {/* Right side - Content */}
          <div className="xl:max-w-[500px] flex flex-col gap-4">
            <Text
              as="h2"
              variant="2xl"
              font="serif"
              className="md:text-3xl md:leading-400"
            >
              What is
              <br />
              Leapfrog Connect?
            </Text>

            <Text as="h3" variant="base" weight="bold">
              Leapfrog Connect is an initiative of Leapfrog Technology in
              empowering next generation of IT talents.
            </Text>
            <Text variant="small" className="md:text-regular leading-150">
              With industry-standard training, hands-on experience, and
              employment-ready preparation, Leapfrog Connect adds value to what
              you have learned in academics and prepares you for the
              international job market.
              <br />
              <br />
              We have decades of experience in consistently serving the global
              IT services, industry-experienced mentors, and amazing training
              programs that cater to your interest.
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InfoSection;
