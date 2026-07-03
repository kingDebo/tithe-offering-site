import { TFormSchema } from "@/app/lib/types";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface UserReceiptEmailProps extends TFormSchema {}

export const UserReceiptEmail = (props: UserReceiptEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        "You have successfully submitted your gift and contact information"
      </Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[40px]">
            <Heading className="mx-0 mb-[8px] p-0 text-left text-[24px] font-bold text-black">
              Thank you for your submission!
            </Heading>
            <Text className="mb-[24px] text-left text-[14px] text-gray-600">
              Here is a summary of the information you sent us:
            </Text>
            <Text className="mb-[8px] text-left text-[16px] font-semibold text-black">
              Contact Information
            </Text>
            <Text className="mb-[4px] text-left text-[14px] leading-[8px] text-gray-700">
              {props.name}
            </Text>
            <Text className="mb-[4px] text-left text-[14px] leading-[8px] text-gray-700">
              {props.address}
            </Text>
            <Text className="mb-[4px] text-left text-[14px] leading-[8px] text-gray-700">
              {props.email}
            </Text>
            <Text className="mb-[16px] text-left text-[14px] leading-[8px] text-gray-700">
              {props.telephone}
            </Text>
            <Text className="mb-[8px] text-left text-[16px] font-semibold">
              Gift Information
            </Text>
            <Text className="mb-[4px] text-left text-[14px] leading-[8px] text-gray-700">
              Tithe: ${props.tithe}
            </Text>
            <Text className="text-left text-[14px] leading-[8px] text-gray-700">
              Combined Budget: ${props.combinedBudget}
            </Text>
            {props["offering-1"].value > 0 && (
              <Text className="mt-[4px] text-left text-[14px] leading-[8px] text-gray-700">
                {props["offering-1"].department}: ${props["offering-1"].value}
              </Text>
            )}
            {props["offering-2"].value > 0 && (
              <Text className="mt-[4px] text-left text-[14px] leading-[8px] text-gray-700">
                {props["offering-2"].department}: ${props["offering-2"].value}
              </Text>
            )}
            {props["offering-3"].value > 0 && (
              <Text className="mt-[4px] text-left text-[14px] leading-[8px] text-gray-700">
                {props["offering-3"].department}: ${props["offering-3"].value}
              </Text>
            )}
            {props["offering-4"].value > 0 && (
              <Text className="mt-[4px] text-left text-[14px] leading-[8px] text-gray-700">
                {props["offering-4"].department}: ${props["offering-4"].value}
              </Text>
            )}
            {props["offering-5"] && props["offering-5"].value > 0 ? (
              <Text className="mt-[4px] text-left text-[14px] leading-[8px] text-gray-700">
                {props["offering-5"].department}: ${props["offering-5"].value}
              </Text>
            ) : null}
            <Text className="mt-[24px] text-left text-[14px] font-semibold leading-[8px] text-black">
              Total: ${props.total}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

UserReceiptEmail.Previewprops = {
  name: "Delbert Defoe",
  address: "Bellevue Chopin",
  telephone: "17672950272",
  email: "ryandefoe93@gmail.com",
} as UserReceiptEmailProps;

export default UserReceiptEmail;
