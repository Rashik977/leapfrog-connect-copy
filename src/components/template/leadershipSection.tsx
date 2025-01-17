import { leadership } from "@/constants/leadership";

import Container from "@/components/atoms/container/container";
import LeadershipCard from "@/components/organisms/leadershipCard";
import Text from "@/components/atoms/Text/Text";

const LeadershipSection = () => {
  return (
    <section className="w-full bg-white -z-10">
      <Container className="max-w-[61.25rem] pt-[3.375rem] md:py-[5.1875rem] pb-[2.75rem] overflow-hidden">
        <Text
          as="h1"
          font="serif"
          variant="2xl"
          className="leading-100 md:leading-400 md:text-3xl"
        >
          Leadership
        </Text>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 mt-8 md:mt-16 justify-items-center">
          {leadership.map((item) => (
            <LeadershipCard key={item.name} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LeadershipSection;
