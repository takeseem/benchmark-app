import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  switch (type) {
    case "json":
      return NextResponse.json({
        id: 1,
        name: "json",
      });
    case "json2":
      return NextResponse.json({
        id: 1,
        name: "json",
      });
    case "query":
      const id = req.nextUrl.searchParams.get("id");
      return NextResponse.json({
        id: id || "null",
        name: `query: ${id}`,
      });
    default:
      return NextResponse.json({
        code: "404",
        msg: "Not Found",
      }, { status: 404 });
  }
}