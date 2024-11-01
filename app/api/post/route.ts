import { db } from "@/lib/db"

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // get page and lastCursor from query
    const url = new URL(request.nextUrl);

    const take = url.searchParams.get("take");
    const lastCursor = url.searchParams.get("cursor");

    let result = await db.post.findMany({
      take: take ? parseInt(take as string) : 10,
      ...(lastCursor && {
        skip: 1, // Do not include the cursor itself in the query result.
        cursor: {
          id: lastCursor as string,
        },
      }),
      orderBy: {
        createdAt: "desc",
      },
    });

    let json_response = {};
    if (result.length == 0) {
      json_response = {
        status: "success",
        results: result.length,
        metaData: {
          lastCursor: null,
          hasNextPage: false,
        },
        data: [],
      };
      return new NextResponse(JSON.stringify(json_response), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const lastPostInResults: any = result[result.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await db.post.findMany({
      // Same as before, limit the number of events returned by this query.
      take: take ? parseInt(take as string) : 10,
      skip: 1, // Do not include the cursor itself in the query result.
      cursor: {
        id: cursor,
      },
    });

    json_response = {
      status: "success",
      results: result.length,
      metaData: {
        lastCursor: cursor,
        hasNextPage: nextPage.length > 0,
      },
      data: result,
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    
    if (!json.slug) {
      json.slug = json.title.toLowerCase().replace(/ /g, "-");
    }

    const post = await db.post.create({
      data: json,
    });

    let json_response = {
      status: "success",
      data: {
        post,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    if (error.code === "P2002") {
      let error_response = {
        status: "fail",
        message: "Post with title already exists",
      };
      return new NextResponse(JSON.stringify(error_response), {
        status: 409,
        headers: { "Content-Type": "application/json" },
      });
    }

    let error_response = {
      status: "error",
      message: error.message,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
