import { NextRequest, NextResponse } from "next/server";
import { generateShortUrl } from "@/actions/generateShortUrl";
import { getExistingShortUrl } from "@/actions/getExistingShortUrl";

export async function GET() {
  const response = await getExistingShortUrl();

  return NextResponse.json(response);
}

export async function POST(req: NextRequest) {
  try {
    const { url }: { url: string } = await req.json();

    if (!url) {
      return {
        message: "UnSuccessful",
        error: true,
        description: {
          msg: "Issue processing url. Please send the appropriate url",
        },
      };
    }

    const response = await generateShortUrl(url);

    return NextResponse.json(response);
  } catch (err) {
    return NextResponse.json({
      message: "Unsuccessful",
      error: true,
      description: {
        msg: "An error occurred while processing the request",
      },
    });
  }
}
