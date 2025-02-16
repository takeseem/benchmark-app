import { NextRequest, NextResponse } from "next/server";
import * as test1Dao from "@/dao/test1";
import { asInt } from "@/util/util";

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
      const id = asInt(req.nextUrl.searchParams.get("id"));
      if (!id) return NextResponse.json(null);

      const po = await test1Dao.getById(id);
      return NextResponse.json(po);
    default:
      return NextResponse.json({
        code: "404",
        msg: "Not Found",
      }, { status: 404 });
  }
}