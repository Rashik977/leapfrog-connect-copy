import Image from "next/image";

import { underlineType2 } from "@/utils/svg";
import { backgroundNoise } from "@/utils/image";

import Text from "@/components/atoms/Text/Text";
import Container from "@/components/atoms/container/container";

const unpreparedSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute left-0 w-full h-full bg-cover bg-bottom bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${backgroundNoise})`,
        }}
      />
      <Container className="max-w-[42.3125rem] pt-[3.75rem] mb-[2.8125rem] md:pt-[9.5rem] md:pb-[4.75rem]">
        <div className="mx-auto text-center flex flex-col gap-[2rem]">
          {/* Main heading with highlighted word */}
          <Text
            as="h2"
            variant="2xl"
            font="serif"
            className="text-green-200 md:text-3xl md:leading-400"
          >
            <Text as="span" variant="none">
              Most tech graduates are{" "}
            </Text>
            <Text
              as="span"
              variant="none"
              className="relative inline-block text-white"
            >
              unprepared
              <figure>
                <Image
                  src={underlineType2}
                  alt="Underline"
                  width={200}
                  height={20}
                  className="absolute left-0 bottom-0 w-full"
                />
              </figure>
            </Text>
            <Text as="span" variant="none">
              {" "}
              for
            </Text>
            <br />
            <Text as="span" variant="none">
              the global IT workforce.
            </Text>
          </Text>

          {/* Statistics */}
          <Text variant="base" className="text-white">
            Surveys reveal 85% of employers rate graduating skills as low, with
            63% finding entry-level hires below average.
            <br />
            <br />
            Typical industry training takes 9-12 months, delaying career growth.
          </Text>
        </div>
      </Container>
    </section>
  );
};

export default unpreparedSection;
