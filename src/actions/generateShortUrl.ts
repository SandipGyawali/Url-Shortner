import db from "@/db";
import { z } from "zod";
import { nanoid } from "nanoid";

interface GenerateShortUrlReturn {
  message: string;
  error: boolean;
  description: Array<string> | Object;
}

export async function generateShortUrl(
  url: string
): Promise<GenerateShortUrlReturn> {
  //url schema definition
  const schema = z.object({
    url: z.string(),
  });

  const parse = schema.safeParse({
    url,
  });

  if (!parse.success) {
    return {
      message: "Unsuccessful parsing of data",
      error: true,
      description: { msg: parse.error },
    };
  }

  //search if the url exists in the database
  const exists = await db.url.findFirst({
    where: {
      originalUrl: parse.data.url,
    },
  });

  if (exists) {
    return {
      message: "Unsuccessful",
      error: true,
      description: {
        msg: `Short url creation failed.
        The original url already exists in the database.
        Update the url for new shortUrl for the existing url`,
      },
    };
  }

  const currentDate = new Date();
  const response = await db.url.create({
    data: {
      originalUrl: parse.data.url,
      expiresAt: new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000),
      createdAt: currentDate,
      shortUrlId: nanoid(12),
      visitHistory: 0,
    },
  });

  return {
    message: "Successful",
    error: false,
    description: response,
  };
}
