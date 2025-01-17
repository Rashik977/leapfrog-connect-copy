import Container from "@/components/atoms/container/container";
import Divider from "@/components/atoms/Divider/Divider";
import Text from "@/components/atoms/Text/Text";

export default function DataPolicy() {
  return (
    <Container className="w-full relative -z-10 pt-28 md:pt-36 bg-white">
      <div className="max-w-[65rem] mx-auto">
        <Text as="h1" variant="3xl" font="serif">
          Data Policy
        </Text>
        <div className="max-w-[780px] flex flex-col gap-8 mt-8">
          <Text>
            This Data Rights Policy establishes the protocol to comply with the
            rights of access, rectification, erasure (right to be forgotten),
            restriction of processing, objection, data portability, and
            objection to automated decision-making concerning personal data
            processed by Leapfrog Connect.
          </Text>
          <Text>
            This policy is designed to adhere to the requirements of the General
            Data Protection Regulation (GDPR) and other applicable data
            protection laws, ensuring that data subjects can exercise their
            rights effectively.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Terms and definitions
          </Text>
          <ul className="list-disc pl-5">
            <li>Data Subject: The individual to whom the data belongs.</li>
            <li>
              {" "}
              Personal Data: Any information concerning identified or
              identifiable individuals.
            </li>
            <li>
              {" "}
              Data Processing: Operations or technical procedures involving the
              collection, recording, storage, modification, or transfer of
              personal data.
            </li>
            <li>
              {" "}
              Data Controller: The entity that determines the purpose, content,
              and use of data processing.
            </li>
            <li>
              {" "}
              Data Processor: The entity that processes personal data on behalf
              of the Data Controller.
            </li>
            <li>
              {" "}
              Consent: A freely given, specific, informed, and unambiguous
              indication of the data subject’s agreement to the processing of
              their personal data.
            </li>
            <li>
              {" "}
              Right of Access: The right to request a copy of personal data
              processed.
            </li>
            <li>
              {" "}
              Right to Rectification: The right to request correction of
              inaccurate or incomplete personal data.
            </li>
            <li>
              {" "}
              Right to Erasure (Right to Be Forgotten): The right to request the
              deletion of personal data.
            </li>
            <li>
              {" "}
              Right to Restriction of Processing: The right to request
              limitation of data processing in specific circumstances.
            </li>
            <li>
              {" "}
              Right to Object: The right to object to the processing of personal
              data for specific purposes.
            </li>
            <li>
              {" "}
              Right to Data Portability: The right to receive personal data in a
              structured, commonly used, and machine-readable format or request
              its transfer to another controller.
            </li>
            <li>
              {" "}
              Right to Object to Automated Decision-Making: The right to not be
              subject to decisions based solely on automated processing,
              including profiling.
            </li>
          </ul>
        </div>
        <Text as="h1" variant="3xl" font="serif" className="mt-16">
          Data Subject Rights
        </Text>
        <div className="max-w-[780px] flex flex-col gap-8 mt-8">
          <Text as="h2" variant="2xl" font="serif">
            Personal Data Processing
          </Text>
          <Text>
            Data subjects have the right to request information regarding their
            personal data, including its source, processing purposes, and any
            transfers made or planned. They may exercise the following rights at
            no cost:
          </Text>
          <ol className="list-decimal pl-5">
            <li>
              <Text as="span" weight="bold">
                Right of Access:
              </Text>
              <ul className="list-disc pl-5 md:pl-10">
                <li>
                  Data subjects can request confirmation of whether their data
                  is being processed and may receive a copy of their data in a
                  commonly used electronic format.
                </li>
              </ul>
            </li>
            <li>
              <Text as="span" weight="bold">
                Right to Rectification:
              </Text>
              <ul className="list-disc pl-5 md:pl-10">
                <li>
                  Data subjects can request correction of inaccurate data or
                  completion of incomplete data.
                </li>
              </ul>
            </li>
            <li>
              <Text as="span" weight="bold">
                Right to Erasure (Right to Be Forgotten):
              </Text>
              <ul className="list-disc pl-5 md:pl-10">
                <li>
                  Data subjects can request deletion of personal data when:
                </li>
                <li className="md:pl-5 list-none">
                  <ul className="list-disc pl-5">
                    <li>
                      It is no longer necessary for the purposes it was
                      collected.
                    </li>
                    <li>They withdraw their consent.</li>
                    <li> The processing is unlawful.</li>
                    <li>Legal obligations necessitate deletion.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Text as="span" weight="bold">
                Right to Restriction of Processing:
              </Text>
              <ul className="list-disc pl-5 md:pl-10">
                <li>
                  Data subjects can request limitation of data processing when:
                </li>
                <li className="md:pl-5 list-none">
                  <ul className="list-disc pl-5">
                    <li>Data accuracy is contested.</li>
                    <li>Processing is unlawful but deletion is not desired.</li>
                    <li>
                      The data is no longer needed but is required for legal
                      claims.
                    </li>
                    <li>An objection to processing is pending resolution.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Text as="span" weight="bold">
                Right to Object:
              </Text>
              <ul className="list-disc pl-5 md:pl-10">
                <li>
                  Data subjects can object to processing for reasons related to
                  their particular situation. Objections to processing for
                  direct marketing or profiling must always be respected.
                </li>
              </ul>
            </li>
            <li>
              <Text as="span" weight="bold">
                Right to Data Portability:
              </Text>
              <ul className="list-disc pl-5 md:pl-10">
                <li>
                  Data subjects can request their data be transferred to
                  themselves or another controller in a structured,
                  machine-readable format.
                </li>
              </ul>
            </li>
            <li>
              <Text as="span" weight="bold">
                Right to Object to Automated Decision-Making:
              </Text>
              <ul className="list-disc pl-5 md:pl-10">
                <li>
                  Data subjects can refuse decisions made solely on automated
                  processing, unless necessary for contractual purposes or
                  explicitly consented to.
                </li>
              </ul>
            </li>
          </ol>
          <Text as="h2" variant="2xl" font="serif">
            Exercising data rights
          </Text>
          <Text>
            Data subjects can exercise their rights by submitting a written
            request to the designated email address: connect@lftechnology.com.
            The request must include:
          </Text>
          <ul className="list-disc pl-5">
            <li>The full name of the data subject.</li>
            <li> A detailed description of the requested action.</li>
            <li> A copy of a valid identification document.</li>
          </ul>
          <Text>
            Requests submitted on behalf of a data subject by a legal
            representative must include proof of representation.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Response procedures and timelines
          </Text>
          <div>
            <Text>
              The Privacy Officer will review and respond to all requests within
              the following timeframes:
            </Text>
            <ul className="list-disc pl-5">
              <li>Right of Access: 1 month</li>
              <li> Right to Rectification: 1 month </li>
              <li> Right to Erasure: 1 month</li>
              <li> Right to Restriction of Processing: 1 month</li>
              <li> Right to Object: 1 month </li>
              <li> Right to Data Portability: 1 month</li>
              <li> Right to Object to Automated Decision-Making: 1 month</li>
            </ul>
            <Text>
              In complex cases, the response period may be extended by an
              additional 2 months, with notification provided to the data
              subject.
            </Text>
          </div>
          <Text as="h2" variant="2xl" font="serif">
            Refusal to comply with request
          </Text>
          <div>
            <Text>
              The Privacy Officer may refuse requests under the following
              circumstances:
            </Text>
            <ul className="list-disc pl-5">
              <li>
                The request is repetitive, excessive, or manifestly unfounded.
              </li>
              <li>
                The data subject has already exercised the same right within a
                12-month period without new justification.
              </li>
              <li>
                The request would infringe upon the rights of others or
                contravene legal obligations.
              </li>
            </ul>
          </div>
          <Text>
            Data subjects will be informed in writing of the reasons for refusal
            and their right to file a complaint with the relevant data
            protection authority.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Dispute resolution
          </Text>
          <Text>
            In the event of a dispute regarding data rights, the Privacy Officer
            will attempt to resolve the issue internally. If unresolved, the
            matter may be escalated to the appropriate regulatory authority for
            resolution.
          </Text>
          <Text as="h2" variant="2xl" font="serif">
            Contact information
          </Text>
          <Text>
            For inquiries or requests related to this policy, please contact:{" "}
            <br />
            Privacy Officer Email:{" "}
            <Text as="span" weight="bold">
              connect@lftechnology.com
            </Text>
          </Text>
          <Text>
            This policy is reviewed annually to ensure compliance with
            applicable laws and best practices.
          </Text>
          <Text>Last Updated December 2024</Text>
        </div>
        <Divider className="mt-10 md:mt-24" />
      </div>
    </Container>
  );
}
