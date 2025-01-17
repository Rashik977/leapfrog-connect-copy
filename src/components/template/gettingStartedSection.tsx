import { gettingStarted } from "@/constants/gettingStarted";

import Container from "@/components/atoms/container/container";
import GettingStartedCard from "@/components/organisms/gettingStartedCard";
import Text from "@/components/atoms/Text/Text";

const GettingStartedSection = () => {
  return (
    <Container
      className="max-w-[61.25rem] pt-[3.375rem] md:pt-[7.1875rem] pb-[2.75rem] md:pb-[6.5625rem] text-white"
      Tag="section"
    >
      <Text
        as="h1"
        variant="2xl"
        font="serif"
        className="md:text-3xl md:leading-400 text-center"
      >
        Let&apos;s Get Started
      </Text>
      <div className="flex flex-wrap justify-center gap-6 xl:gap-0 xl:justify-between mt-8 items-center">
        {gettingStarted.map((item) => (
          <GettingStartedCard key={item.buttonText} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default GettingStartedSection;
