import Container from "@/components/atoms/container/container";
import Divider from "@/components/atoms/Divider/Divider";
import Text from "@/components/atoms/Text/Text";

export default function TermsOfUse() {
  return (
    <Container className="w-full relative -z-10 pt-28 md:pt-36 bg-white">
      <div className="max-w-[65rem] mx-auto">
        <Text as="h1" variant="3xl" font="serif">
          Terms of use
        </Text>
        <div className="max-w-[780px] flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-8">
            <Text as="h2" variant="2xl" font="serif">
              Consent
            </Text>
            <Text>
              By accessing and using Leapfrog Connect’s website or Services, you
              agree to abide by this Privacy Policy and our Terms of Use. You
              are responsible for compliance with local, national, and
              international laws when using our Services.
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <Text as="h2" variant="2xl" font="serif">
              Site Access
            </Text>
            <Text>
              Leapfrog Connect reserves the right to restrict or terminate
              access to our website or Services for any violation of these
              terms.
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <Text as="h2" variant="2xl" font="serif">
              Appropriate Use
            </Text>
            <Text>
              The Services are designed to support training and placement
              activities. Misuse of the platform for unauthorized purposes may
              result in account suspension or legal action.
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <Text as="h2" variant="2xl" font="serif">
              Security and Confidentiality
            </Text>
            <Text>
              Your data is transmitted over a secure connection using SSL
              encryption. Please ensure you access the platform using an
              SSL-compatible browser.
            </Text>
          </div>
          <div className="flex flex-col gap-8">
            <Text as="h2" variant="2xl" font="serif">
              Children’s Privacy
            </Text>
            <Text>
              Our Services are intended for individuals aged 18 and above. If
              you are under 18, please consult a parent or guardian for
              assistance.
            </Text>
          </div>
          <div>
            <Text>
              For further details, email us at{" "}
              <Text as="span" weight="bold">
                connect@lftechnology.com.
              </Text>
            </Text>
          </div>
        </div>
        <Divider className="mt-10 md:mt-24" />
      </div>
    </Container>
  );
}
