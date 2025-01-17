import Container from "@/components/atoms/container/container";
import Divider from "@/components/atoms/Divider/Divider";
import Text from "@/components/atoms/Text/Text";

export default function Contact() {
  return (
    <Container className="w-full relative -z-10 pt-28 md:pt-36 bg-white">
      <div className="max-w-[65rem] mx-auto">
        <Text as="h1" variant="3xl" font="serif" className="text-center">
          Coming Soon.
        </Text>
        <Divider className="mt-10 md:mt-24" />
      </div>
    </Container>
  );
}
