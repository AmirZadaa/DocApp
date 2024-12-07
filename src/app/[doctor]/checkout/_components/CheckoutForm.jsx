
"use client";

import React  from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm} from "react-hook-form";
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
import {personalInfoFields, paymentFields,formSchema } from "./checkoutSchema"


export default function CheckoutForm({doctorName}) {

  
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
      paymentMethod: "cash",
      acceptTerms: false,
    },
    mode: "onSubmit",
  });

  const onSubmit = (data) => {
    router.push("/booking-success?doctorName=" + doctorName);
  };

  return (
    <div className="border-[1px] border-black rounded-sm p-4">
      
      <h1 className="text-2xl pb-2">Personal Information</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className=" grid grid-cols-2 gap-4  max-md:grid-cols-1">
            {personalInfoFields.map((data) => (
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
                    <RadioGroupItem value="cash" />
                    <Label className="font-bold">Cash on visit</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" />
                    <Label className="font-bold">Card Payment</Label>
                  </div>
                 
                </RadioGroup>
                {field.value === "card" && (
                    <div className="grid grid-cols-2 gap-4  max-md:grid-cols-1">
                      {paymentFields.map((data) => {
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
                   )}
                    
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

