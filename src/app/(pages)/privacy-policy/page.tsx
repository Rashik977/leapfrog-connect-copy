import Container from "@/components/atoms/container/container";
import Divider from "@/components/atoms/Divider/Divider";
import Text from "@/components/atoms/Text/Text";

export default function PrivacyPolicy() {
  return (
    <Container className="w-full relative -z-10 pt-28 md:pt-36 bg-white">
      <div className="max-w-[65rem] mx-auto">
        <Text as="h1" variant="3xl" font="serif">
          Privacy Policy
        </Text>
        <div className="max-w-[780px] flex flex-col gap-8 mt-8">
          <Text>
            This Privacy Policy applies to the website and services (“Services”)
            provided by Leapfrog Connect Pvt. Ltd., Kathmandu, Nepal, a training
            and placement initiative of Leapfrog Technology Inc. (“Leapfrog
            Connect,” “we,” “us,” or “our”).
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Collection of information
          </Text>
          <Text>
            We may collect the following types of information when you use our
            Services:
          </Text>
          <ol className="list-decimal pl-5">
            <li>
              Information You Provide Directly:
              <br />
              For certain activities, such as registering with our Services,
              subscribing to updates, or contacting us directly, we may collect
              information, including but not limited to:
              <br />
              <ul className="list-disc list-inside pl-5">
                <li>
                  Full name, email address, mobile phone number, and mailing
                  address;
                </li>
                <li>
                  Educational background, employment history, and professional
                  certifications; and{" "}
                </li>{" "}
                <li>
                  {" "}
                  Any other details you provide during training, placement, or
                  inquiries.
                </li>
              </ul>
            </li>
            <li>
              {" "}
              We may combine this with information we already have about you.
            </li>
            <li>
              {" "}
              Information Collected Automatically:
              <br />
              We may collect certain information automatically, such as:
              <br />
              <ul className="list-disc list-inside pl-5">
                <li>
                  Your IP address, browser type, operating system, and device
                  information;
                </li>
                <li>
                  Pages visited, links clicked, and other standard server log
                  data;
                </li>
                <li>
                  {" "}
                  and Location data from your device (e.g., GPS signals or
                  nearby Wi-Fi access points).
                </li>
              </ul>
            </li>
            <li>
              {" "}
              Cookies or similar technologies may be used to collect this data.
              By using our Services, you consent to our use of cookies. You can
              manage cookie preferences through your browser settings.
            </li>
            <li>
              {" "}
              Information from Third Parties:If you access our Services via
              advertisements or third-party platforms, we may receive relevant
              information from those platforms.
            </li>
          </ol>
          <Text as="h2" variant="2xl" font="serif">
            Use of information
          </Text>
          <Text>We use the collected information for purposes such as:</Text>
          <ul className="list-disc pl-5">
            <li>
              Providing and improving our Services, including training programs
              and job placement support;
            </li>
            <li>
              Communicating updates, course schedules, or job opportunities;{" "}
            </li>
            <li> Responding to your queries and fulfilling requests; </li>
            <li>
              Conducting surveys, feedback collection, and research to improve
              our offerings; and
            </li>
            <li>
              Preventing prohibited activities and ensuring compliance with
              applicable laws.
            </li>
          </ul>
          <Text>
            We may also use your information for purposes disclosed at the time
            of collection or with your explicit consent.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Sharing of information
          </Text>
          <Text>
            Leapfrog Connect is committed to safeguarding your trust and ensures
            transparency regarding the sharing of collected information:
          </Text>
          <ol className="list-decimal pl-5">
            <li>
              <Text as="p" weight="bold">
                Third-Party Service Providers:
              </Text>
              We may share information with trusted third-party vendors who
              assist us in offering specialized services such as billing,
              analytics, marketing, or technical support. These parties are
              contractually bound to use your information solely for the
              intended purpose.
            </li>
            <li>
              <Text as="p" weight="bold">
                Corporate Affiliates:
              </Text>
              Your information may be shared with Leapfrog Technology Inc. and
              its affiliates for operational purposes.{" "}
            </li>
            <li>
              <Text as="p" weight="bold">
                Legal Requirements:
              </Text>
              Information may be disclosed to comply with legal obligations,
              respond to subpoenas, or protect the rights and safety of Leapfrog
              Connect, our users, and the public.
            </li>
            <li>
              <Text as="p" weight="bold">
                With Your Consent:
              </Text>
              We may share information for other purposes disclosed at the time
              of collection or as per your explicit consent.
            </li>
          </ol>
          <Text>
            We do not sell or share your personal information for third-party
            direct marketing purposes.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Security
          </Text>
          <Text>
            We implement reasonable technical and organizational measures to
            protect your data from unauthorized access, misuse, or loss. While
            we strive to secure your data, no method of transmission over the
            internet or electronic storage is 100% secure. We encourage you to
            take precautions when sharing sensitive information.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Your choice
          </Text>
          <ul className="list-disc pl-5">
            <li>
              <Text as="span" weight="bold">
                Access and Correction:
              </Text>{" "}
              You may request access to or correction of your personal
              information by contacting us at
              <Text as="span" weight="bold">
                connect@lftechnology.com.
              </Text>
            </li>
            <li>
              <Text as="span" weight="bold">
                Cookies:
              </Text>{" "}
              You can disable cookies through your browser settings, though some
              features of our Services may be affected.
            </li>
            <li>
              <Text as="span" weight="bold">
                Data Deletion:
              </Text>{" "}
              You may request deletion of your personal information unless it is
              required by law for us to retain it.
            </li>
          </ul>
          <Text as="h2" variant="2xl" font="serif">
            Third party links and content
          </Text>
          <Text>
            Our Services may contain links to third-party websites or content
            not managed by Leapfrog Connect. We are not responsible for the
            privacy practices or content of such third-party sites.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Changes to Privacy Policy
          </Text>
          <Text>
            Leapfrog Connect may update this Privacy Policy periodically. The
            updated policy will be posted with the revised “Effective Date.” We
            recommend reviewing it regularly to stay informed about how your
            information is protected.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Questions
          </Text>
          <Text>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us at
            <Text as="span" weight="bold">
              {" "}
              connect@lftechnology.com.
            </Text>
          </Text>
        </div>
        <Divider className="mt-10 md:mt-24" />
      </div>
    </Container>
  );
}
