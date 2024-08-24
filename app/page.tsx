"use client";

import { Toaster } from "@/components/ui/toaster";
import FormComponent from "./form";
import cover from "@/public/cover.jpg";
import Image from "next/image";
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";

export default function Home() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  function setSuccess(val: boolean) {
    setIsSuccess(val);
  }

  return (
    <>
      <main className="flex min-h-screen w-screen gap-14 bg-white px-5 py-5 lg:px-12 lg:py-12">
        <section className="sticky top-12 hidden h-[calc(100vh-6em)] w-full max-w-screen-sm rounded-2xl md:block">
          <div className="absolute bottom-10 left-10 max-w-md">
            <h1 className="mb-6 text-2xl font-bold text-white">
              My response of love and obedience
            </h1>
            <p className="mb-6 text-sm text-white">
              {
                'One person gives freely, yet gains even more; another withholds unduly, but comes to poverty" - '
              }
              <span className="block pt-2 text-xs text-white">
                Proverbs 11:24
              </span>
            </p>
          </div>
          <Image
            src={cover}
            alt="Serene park"
            className="inset-0 rounded-2xl object-cover"
            placeholder="blur"
          />
        </section>

        {!isSuccess ? (
          <FormComponent setIsSuccess={setSuccess} />
        ) : (
          <SuccessComponent />
        )}
      </main>
      <Toaster />
    </>
  );
}

function SuccessComponent(): React.ReactElement {
  return (
    <Alert className="h-fit">
      <CheckCircle className="h-4 w-4 " />
      <AlertTitle className="">All Set!</AlertTitle>
      <AlertDescription>
        We have recevied your submission. You should recevie an email with your
        information shortly. Remember to check your spam/junk if you don't see
        the email in your inbox.
      </AlertDescription>
    </Alert>
  );
}

{
  /* <div className="sticky top-5 h-fit w-full rounded-2xl">
            <div className="max-w-md">
              <h1 className="mb-6 text-2xl font-bold text-gray-800">
                My response of love and obedience
              </h1>
              <p className="mb-6 text-sm text-gray-800">
                {
                  'One person gives freely, yet gains even more; another withholds unduly, but comes to poverty" - '
                }
                <span className="block pt-2 text-xs text-gray-500">
                  Proverbs 11:24
                </span>
              </p>
            </div>
            <Image
              src={cover}
              alt="Serene park"
              className="h-24 w-full rounded-2xl object-cover"
              placeholder="blur"
            />
          </div> */
}
