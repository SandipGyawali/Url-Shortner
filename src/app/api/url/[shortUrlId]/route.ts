import { deleteShortUrlOnId } from "@/actions/deleteShortUrl";
import { getExistingShortUrlOnId } from "@/actions/getExistingShortUrl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = req.url;
    const shortUrlId = url.split("/").pop();
    console.log(shortUrlId);

    if (!shortUrlId) {
      return NextResponse.json({
        message: "UnSuccessful",
        error: true,
        description: {
          msg: "Issue processing shortUrlId. Please send the appropriate id",
        },
      });
    }

    const response = await getExistingShortUrlOnId(shortUrlId);

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

export async function DELETE(req: NextRequest) {
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
    const response = await deleteShortUrlOnId(shortUrlId);

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
