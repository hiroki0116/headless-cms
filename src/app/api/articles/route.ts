import { NextResponse } from "next/server";
import axios from "axios";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    return NextResponse.json(
      { error: "Environment variables are not set" },
      { status: 500 }
    );
  }

  try {
    const domain = process.env.MICROCMS_SERVICE_DOMAIN;
    const url = `https://${domain}.microcms.io/api/v1/blogs`;

    const response = await axios.get(url, {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching articles:", error);
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
