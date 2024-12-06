"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import { Checkbox } from "../../../../components/ui/checkbox";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";
import { Label } from "@radix-ui/react-label";

const formData = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "firstName",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "lastName",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "email@example.com",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "+92-XXXXXXXXX",
  },
];

const cardData = [
  {
    name: "nameOnCard",
    label: "Name on Card",
    placeholder: "nameOnCard",
  },
  {
    name: "cardNumber",
    label: "Card Number",
    placeholder: "1234 5678 9012 3456",
  },
  {
    name: "expiryMonth",
    label: "Expiry Month",
    placeholder: "01",
  },
  {
    name: "expiryYear",
    label: "Expiry Year",
    placeholder: "2025",
  },
  {
    name: "cvv",
    label: "CVV",
    placeholder: "123",
  },
];

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address and include @gmail.com",
    }),
    phone: z.string().optional(),
    paymentMethod: z.enum(["credit", "paypal"]),

    nameOnCard: z.string().min(2, {
      message: "Name on card must be at least 2 characters.",
    }),
    cardNumber: z
      .string()
      .min(16, {
        message: "Card number must be at least 16 characters.",
      })
      .regex(/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/, 4, {
        message: "Please enter a valid card number.",
      })
      .optional(),
    expiryMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, {
      message: "Please enter a valid month (01-12).",
    }),
    expiryYear: z.string().regex(/^\d{2}$/, {
      message: "Please enter a valid year (YY).",
    }),
    cvv: z.string().regex(/^\d{3,4}$/, {
      message: "Please enter a valid CVV.",
    }),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions.",
    }),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "credit") {
        return (
          data.nameOnCard &&
          data.cardNumber &&
          data.expiryMonth &&
          data.expiryYear &&
          data.cvv
        );
      }
      return true;
    },
    {
      message: "Please complete all credit card details.",
      path: ["nameOnCard"], // Highlight the first missing field
    }
  );

export default function PaymentForm() {
  const router = useRouter(); 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nameOnCard: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
      cardNumber: "",
      paymentMethod: "credit",
      acceptTerms: false,
    },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log(data);
    router.push("/booking-success");
  };

  return (
    <div className="border-[1px] border-black rounded-sm p-4">
      <h1 className="text-2xl pb-2">Personal Information</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className=" grid grid-cols-2 gap-4  max-md:grid-cols-1">
            {formData.map((data) => (
              <FormField
                key={data.name}
                control={form.control}
                name={data.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold">
                      {data.label}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder={data.placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
         
          <FormField
            control={form.control}
            name={"paymentMethod"}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">Payment Method</FormLabel>
                <RadioGroup
                  {...field}
                  onValueChange={(value) => field.onChange(value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="credit" />
                    <Label className="font-bold">Credit Card</Label>
                  </div>
                    <div className="grid grid-cols-2 gap-4  max-md:grid-cols-1">
                      {cardData.map((data) => {
                        return (
                          <FormField
                            key={data.name}
                            control={form.control}
                            name={data.name}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="font-semibold">
                                  {data.label}
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder={data.placeholder}
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        );
                      })}
                    </div>
                    
                    
                  <div className="flx items-center mt-3 space-x-2">
                    <RadioGroupItem value="paypal" label="PayPal" />
                    <Label className=" font-semibold">Paypal</Label>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked)}
                  />
                  <span className="ms-3">
                    I accept the terms and conditions.
                  </span>
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="font-bold">
            Comfirm and Pay
          </Button>
        </form>
      </Form>
    </div>
  );
}
