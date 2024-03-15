import * as z from "zod";
const currYear = new Date().getFullYear().toString().substring(2);

const CardDetailSchema = z.object({
    fullname: z
      .string()
      .regex(/([A-Za-z]){1,}\s([A-Za-z]){1,}/, "This field is required")
      .min(6, "Write your name correctly"),
    cardNumber: z
      .string()
      .regex(
        /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/,
        "Please write your card number correctly"
      ),
    month: z
      .string()
      .refine((val) => !Number.isNaN(parseInt(val)), {
        message: "This field is required",
      })
      .transform((month) => parseInt(month))
      .pipe(
        z
          .number()
          .min(1, "Write month between 1-12")
          .max(12, "Write month between 1-12")
      ),
    year: z
      .string()
      .refine((val) => !Number.isNaN(parseInt(val)), {
        message: "This field is required",
      })
      .transform((year) => parseInt(year))
      .pipe(
        z
          .number()
          .min(Number(currYear), "Write correct year")
          .max(99, "Write correct year")
      ),
    secNum: z
      .string()
      .min(1, "Write correct cvc number")
      .max(3, "Write correct cvc number"),
  });

  export default CardDetailSchema