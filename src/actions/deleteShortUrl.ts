import { ZodNumber, z } from "zod";
import db from "@/db";

interface DeleteShortUrlReturn {
  message: string;
  error: boolean;
  description: Array<string> | Object;
}

export async function deleteShortUrlOnId(shortUrlId: string) {
  const schema = z.object({
    shortUrlId: z.string(),
  });

  const parse = schema.safeParse({
    shortUrlId,
  });

  if (!parse.success) {
    return {
      message: "Unsuccessful parsing of data",
      error: true,
      description: { msg: parse.error },
    };
  }

  //search if the url exists with the appropriate id
  const exists = await db.url.findFirst({
    where: {
      shortUrlId,
    },
  });

  if (!exists) {
    return {
      message: "Unsuccessful",
      error: true,
      description: { msg: "The url with the id does not exists" },
    };
  }

  const response = await db.url.deleteMany({
    where: {
      shortUrlId: parse.data.shortUrlId,
    },
  });

  return {
    message: "Successful",
    error: false,
    description: response,
  };
}
