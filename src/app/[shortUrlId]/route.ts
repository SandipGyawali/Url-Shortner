import { redirectToUrlOnId } from "@/actions/redirectShortUrl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = req.url;
    const shortUrlId = url.split("/").pop();

    if (!shortUrlId) {
      return NextResponse.json({
        message: "UnSuccessful",
        error: true,
        description: {
          msg: "Issue processing shortUrlId. Please send the appropriate id",
        },
      });
    }

    const response = await redirectToUrlOnId(shortUrlId);

    const originalUrl = response.description.msg;
    return NextResponse.redirect(`${originalUrl}`, { status: 302 });
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
