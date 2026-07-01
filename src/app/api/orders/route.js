import client from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId} from "mongodb";

export async function GET() {
  try {
    await client.connect();

    const db = client.db("novaStore");

    const orders = await db
      .collection("orders")
      .find({})
      .toArray();

    return NextResponse.json(orders);

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await client.connect();

    const db = client.db("novaStore");

    const body = await req.json();

    await db.collection("orders").insertOne(body);

    return NextResponse.json({
      message: "Order placed successfully"
    });

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
export async function PUT(req) {
  await client.connect();

  const db = client.db("novaStore");

  const { id, status } = await req.json();

  await db.collection("orders").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        status,
      },
    }
  );

  return NextResponse.json({
    message: "Status Updated",
  });
}