import { Resend } from "resend";
import { formSchema } from "../lib/definitions";
import UserReceiptEmail from "@/emails/user-receipt-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formdata = await request.json();

  const parseData = formSchema.safeParse(formdata);

  if (!parseData.success) {
    return Response.json(parseData.error, {
      status: 400,
    });
  }

  try {
    const res = await resend.emails.send({
      from: "Test-Emails<hello@emails.debo.dev>",
      to: [`${parseData.data.email}` /*"ministerialassocdom@eastcarib.org" */],
      subject: "Tithe & Offering Form",
      react: UserReceiptEmail(parseData.data),
    });

    if (res.error) {
      return Response.json(
        {
          message: `We were not able to send your email: ${res.error.message}`,
        },
        { status: 500 },
      );
    }
  } catch (e) {
    return Response.json(
      { message: "We were not able to send your email" },
      { status: 500 },
    );
  }

  return Response.json({ message: "great job" }, { status: 200 });
}
