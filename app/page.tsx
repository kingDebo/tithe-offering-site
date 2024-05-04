"use client";

import { z } from "zod";
import {
  Controller,
  FieldErrors,
  FormProvider,
  useForm,
} from "react-hook-form";
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
import { TFormSchema } from "./lib/types";

export default function Home() {
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
    formState: { isDirty },
    register,
    control,
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
    rerenders.current++;
    console.log("Rerender count:", rerenders.current);
  });

  useEffect(() => {
    const offeringTotal = watchOfferings
      .filter((val) => val)
      .reduce((prev, curr) => prev + curr);

    const singleAmountTotal = watchSingleAmounts.reduce(
      (prev, curr) => prev + curr,
    );

    setValue("total", offeringTotal + singleAmountTotal);
  }, [watchOfferings, watchSingleAmounts]);

  function onSubmit(values: TFormSchema) {
    console.log(values, "running");
  }

  function onError(values: FieldErrors<TFormSchema>) {
    console.log(values, "running");
  }

  return (
    <main className="min-h-screen w-full">
      <Image
        src={cover}
        alt="cover"
        className="m-auto mb-10 h-48 w-3/4 rounded-b-2xl object-cover"
      />
      <FormProvider {...form}>
        <Form {...form}>
          <form
            className="mx-auto mt-4 max-w-screen-sm pb-6"
            onSubmit={form.handleSubmit(onSubmit, onError)}
          >
            <FormLabel className="text-xl font-bold ">
              Contact Information
            </FormLabel>
            <div className="space-y-6 pt-4">
              <Combobox />
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
            <div className="h-10"></div>
            <FormLabel className="text-xl font-bold">Tithe</FormLabel>
            <NumberFieldComponent name="tithe" />
            <div className="h-6"></div>
            <FormLabel className="text-xl font-bold">Offering</FormLabel>
            <div className="h-6"></div>
            <NumberFieldComponent
              name="combinedBudget"
              label="Combined Budget"
            />
            <div className="h-6"></div>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <SelectFieldComponent name="offering-1" />
                <NumberFieldComponent name="offering-1" />
              </div>
              <div className="flex space-x-4">
                <SelectFieldComponent name="offering-2" />
                <NumberFieldComponent name="offering-2" />
              </div>
              <div className="flex space-x-4">
                <SelectFieldComponent name="offering-3" />
                <NumberFieldComponent name="offering-3" />
              </div>
              <div className="flex space-x-4">
                <SelectFieldComponent name="offering-4" />
                <NumberFieldComponent name="offering-4" />
              </div>
              <div className="flex space-x-4">
                <FormField
                  control={control}
                  name="offering-5.department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Other</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Department"
                          {...field}
                        />
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

            <div className="h-10"></div>
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
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="h-10"></div>
            <Button disabled={!isDirty} className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </FormProvider>
    </main>
  );
}
