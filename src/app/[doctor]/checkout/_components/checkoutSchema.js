import { z } from "zod";

export const personalInfoFields = [
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
  
  export const paymentFields = [
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
  
  export const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    paymentMethod: z.enum(["card", "cash"]),
    nameOnCard: z.string().optional(),
    cardNumber: z.string().optional(),
    expiryMonth: z.string().optional(),
    expiryYear: z.string().optional(),
    cvv: z.string().optional(),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms and conditions.",
    }),
  }).superRefine((data, ctx) => {
    if (data.paymentMethod === "card") {
      if (!data.nameOnCard || data.nameOnCard.length < 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Name on card must be at least 2 characters.",
          path: ["nameOnCard"],
        });
      }
      if (!data.cardNumber || !/^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/.test(data.cardNumber)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid 16-digit card number.",
          path: ["cardNumber"],
        });
      }
      if (!data.expiryMonth || !/^(0[1-9]|1[0-2])$/.test(data.expiryMonth)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid month (01-12).",
          path: ["expiryMonth"],
        });
      }
      if (!data.expiryYear || !/^\d{2}$/.test(data.expiryYear)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid year (YY).",
          path: ["expiryYear"],
        });
      }
      if (!data.cvv || !/^\d{3,4}$/.test(data.cvv)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid CVV (3 or 4 digits).",
          path: ["cvv"],
        });
      }
    }
  });
  