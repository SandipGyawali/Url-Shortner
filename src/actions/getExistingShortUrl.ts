import db from "@/db";
import { Url } from "@prisma/client";

interface ExistingShortUrlReturn {
  result: Array<Url>;
}

export async function getExistingShortUrl(): Promise<ExistingShortUrlReturn> {
  const response = await db.url.findMany();

  return {
    result: response,
  };
}

export async function getExistingShortUrlOnId(
  shortUrlId: string
): Promise<Object> {
  const response = await db.url.findFirst({
    where: {
      shortUrlId,
    },
  });

  return { result: response };
}
