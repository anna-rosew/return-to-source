"use server";

import { formSchema } from "@/lib/schemas/emailSchema";
import { z } from "zod";

export const send = async (data: z.infer<typeof formSchema>) => {
  console.log(data);
};
