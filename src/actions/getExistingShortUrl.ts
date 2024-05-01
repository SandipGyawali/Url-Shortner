import db from "@/db";
import { Url } from "@prisma/client";
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from "next/dist/shared/lib/constants";

interface ExistingShortUrlReturn {
  result?: Array<Url>;
  status: string;
  error: boolean;
  description?: {
    msg: string;
  };
}

export async function getExistingShortUrl(): Promise<ExistingShortUrlReturn> {
  try {
    const response = await db.url.findMany();

    return {
      result: response,
      status: "Successful",
      error: false,
    };
  } catch (err) {
    return {
      error: true,
      status: "Unsuccessful",
      description: {
        msg: "Error while getting the url",
      },
    };
  }
}

export async function getExistingShortUrlOnId(
  shortUrlId: string
): Promise<Object> {
  try {
    const response = await db.url.findFirst({
      where: {
        shortUrlId,
      },
    });

    return { error: false, result: response, status: "Successful" };
  } catch (err) {
    return {
      error: true,
      status: "Unsuccessful",
      description: {
        msg: "Error white processing with id",
      },
    };
  }
}
