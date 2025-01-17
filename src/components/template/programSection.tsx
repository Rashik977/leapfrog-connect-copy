import React from "react";
import Link from "next/link";

import Container from "@/components/atoms/container/container";
import ProgramCard from "@/components/organisms/programCard";
import Button from "@/components/atoms/Button/Button";
import Text from "@/components/atoms/Text/Text";

import { programDetails } from "@/constants/programDetails";

const ProgramSection = () => {
  return (
    <section className="w-full text-white" id="program">
      <Container className="max-w-[61.25rem] py-16 md:py-20 flex flex-col">
        {/* Header */}
        <div className="mb-12 md:mb-[4.5rem]">
          <Text
            as="h1"
            variant="2xl"
            font="serif"
            className="md:text-3xl md:leading-400 mb-6"
          >
            We have more than one tracks to help
            <br />
            <Text as="span" className="text-green-200">
              you grow and excel.
            </Text>
          </Text>
          <Text variant="base">
            Programs are subject to availability. Please contact us if you have
            any questions.
          </Text>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center mb-[8rem] lg:mb-20 xl:justify-between lg:items-stretch gap-8 md:gap-12 xl:gap-0">
          {programDetails.map((program) => (
            <ProgramCard
              icon={program.icon}
              key={program.heading}
              heading={program.heading}
              duration={program.duration}
              tracks={program.tracks}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <Text weight="bold">Are you ready to get started?</Text>
          <Link href="/contact">
            <Button>Enroll now</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ProgramSection;
