import db from "@/db";
import { z } from "zod";

export async function redirectToUrlOnId(shortUrlId: string | undefined) {
  const schema = z.object({
    shortUrlId: z.string(),
  });

  const parse = schema.safeParse({
    shortUrlId,
  });

  if (!parse.success) {
    return {
      message: "Unsuccessful",
      error: true,
      description: {
        msg: parse.error,
      },
    };
  }

  const exists = await db.url.findFirst({
    where: {
      shortUrlId,
    },
  });
  console.log(exists);
  if (!exists) {
    return {
      message: "Unsuccessful",
      error: true,
      description: {
        msg: `Cannot redirect the url does exists with the given shortUrlId`,
      },
    };
  }

  return {
    message: "Successful",
    error: true,
    description: {
      msg: exists.originalUrl,
    },
  };
}
