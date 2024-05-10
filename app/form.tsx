"use client";

import { ZodError, z } from "zod";
import { FieldErrors, FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";
import { formSchema } from "./lib/definitions";
import TextFieldComponent from "./ui/TextFieldComponent";
import NumberFieldComponent from "./ui/NumberInputComponent";
import SelectFieldComponent from "./ui/SelectFieldComponent";
import Image from "next/image";
import cover from "@/public/cover.jpg";
import { Combobox } from "./ui/Combobox";
import { Value } from "@radix-ui/react-select";
import { TFormSchema, TFormValueNames } from "./lib/types";

export default function FormComponent() {
  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tithe: 0,
      combinedBudget: 0,
      "offering-1": {
        department: "Department",
        value: 0,
      },
      "offering-2": {
        department: "Department",
        value: 0,
      },
      "offering-3": {
        department: "Department",
        value: 0,
      },
      "offering-4": {
        department: "Department",
        value: 0,
      },
      "offering-5": {
        department: "Department",
        value: 0,
      },
      total: 0,
    },
  });

  const {
    setValue,
    watch,
    formState: { isDirty, errors, isSubmitting },
    register,
    control,
    setError,
  } = form;

  const watchOfferings = watch([
    "offering-1.value",
    "offering-2.value",
    "offering-3.value",
    "offering-4.value",
    "offering-5.value",
  ]);

  const watchSingleAmounts = watch(["tithe", "combinedBudget"]);

  const rerenders = useRef<number>(0);

  useEffect(() => {
    const offerings = watchOfferings
      .filter((val) => val)
      .concat(watchSingleAmounts.filter((val) => val));

    if (offerings.length === 0) return;

    const total = offerings.reduce((prev, curr) => prev + curr);

    setValue("total", total);
  }, [watchOfferings, watchSingleAmounts, setValue]);

  async function onSubmit(values: TFormSchema) {
    console.log("Success", values);

    try {
      const result = await fetch("/api", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (result.ok) {
        console.log("great");
      } else {
        const err: ZodError = await result.json();
        err.issues.forEach((issue) => {
          setError(issue.path[0] as TFormValueNames, {
            message: issue.message,
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  function onError(values: FieldErrors<TFormSchema>) {
    console.log("Errors", values);
  }

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form
          className="w-full space-y-12"
          onSubmit={form.handleSubmit(onSubmit, onError)}
        >
          <div id="form-label-wrapper" className="mb-12 space-y-6">
            <FormLabel className="text-4xl font-bold ">
              Contact Information
            </FormLabel>
            <div id="divider" className="h-[1px] w-full bg-slate-400"></div>
          </div>
          <div id="mobanking-info-wrapper" className="mb-12 space-y-6">
            <TextFieldComponent
              name="reference"
              label="Mobanking Reference"
              placeholder=""
              description="The reference you entered in your Mobanking transfer"
            />
            <TextFieldComponent
              name="transfer-date"
              label="Mobanking Transfer Date"
              placeholder="12/12/24"
              description="The date you made the transfer (Shows up in your transaction history)"
            />
            <NumberFieldComponent
              name="transfer-amount"
              label="Mobanking Transfer Amount"
            />
          </div>
          <div id="church-select-wrapper" className="mb-12 space-y-6">
            <Combobox />
          </div>
          <div id="contact-info-wrapper" className="mb-12 space-y-6">
            <TextFieldComponent
              name="name"
              label="Full name"
              placeholder="Jane Doe"
            />
            <TextFieldComponent
              name="address"
              label="Home Address"
              placeholder="5th Street, Roseauville"
            />
            <TextFieldComponent
              name="telephone"
              label="Phone Number"
              placeholder="17672051234"
            />
            <TextFieldComponent
              name="email"
              label="Email Address"
              placeholder="J.Doe99@example.com"
            />
          </div>
          <div className=" mb-12 space-y-2">
            <FormLabel className="text-xl font-bold">Tithe</FormLabel>
            <NumberFieldComponent name="tithe" />
          </div>
          <div className="mb-12 space-y-2">
            <FormLabel className="mb-12 text-xl font-bold">Offering</FormLabel>
            <NumberFieldComponent
              name="combinedBudget"
              label="Combined Budget"
            />

            <div className="flex space-x-4 py-2">
              <SelectFieldComponent name="offering-1.department" />
              <NumberFieldComponent name="offering-1.value" />
            </div>
            <div className="flex space-x-4 py-2">
              <SelectFieldComponent name="offering-2.department" />
              <NumberFieldComponent name="offering-2.value" />
            </div>
            <div className="flex space-x-4 py-2">
              <SelectFieldComponent name="offering-3.department" />
              <NumberFieldComponent name="offering-3.value" />
            </div>
            <div className="flex space-x-4 py-2">
              <SelectFieldComponent name="offering-4.department" />
              <NumberFieldComponent name="offering-4.value" />
            </div>
            <div className="flex space-x-4">
              <FormField
                control={control}
                name="offering-5.department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Other</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Department" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="offering-5.value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0.00"
                        {...register(field.name, {
                          valueAsNumber: true,
                          min: 0,
                        })}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div id="total-wrapper" className="mb-12">
            <FormField
              control={form.control}
              name="total"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl font-bold">
                    Total Giving
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="0.0"
                      {...field}
                      disabled
                      {...register("total", {
                        valueAsNumber: true,
                        validate: (value, formValues) =>
                          value === formValues["transfer-amount"] ||
                          "Your total is not equal to the transfer amount",
                      })}
                    />
                  </FormControl>
                  {errors.total && <p>{errors.total.message}</p>}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={!isDirty || isSubmitting}
            className="w-full"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </FormProvider>
  );
}
