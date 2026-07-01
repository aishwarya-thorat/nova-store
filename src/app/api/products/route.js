import client from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
export async function GET(){
   await client.connect();
   const db = client.db("novaStore");
   const products = await db.collection("products").find({}).toArray();

   return NextResponse.json(products);
}
export async function POST(request){
    await client.connect();
    const db = client.db("novaStore");
    const body = await request.json();
    await
   db.collection("products").insertOne(body);

   return NextResponse.json({
    message:"Product Added Successfully",
   });
}
export async function DELETE(request) {
  await client.connect();

  const db = client.db("novaStore");

  const { id } = await request.json();

  await db.collection("products").deleteOne({
    _id: new ObjectId(id),
  });

  return NextResponse.json({
    message: "Deleted",
  });
}

export async function PUT(request) {
  await client.connect();

  const db = client.db("novaStore");

  const body = await request.json();

  await db.collection("products").updateOne(
    { _id: new ObjectId(body.id) },
    {
      $set: {
        name: body.name,
        price: body.price,
        brand: body.brand,
        image: body.image,
        slug: body.slug,
      },
    }
  );

  return NextResponse.json({
    message: "Updated Successfully",
  });
}
