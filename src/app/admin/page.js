"use client";
import { useEffect, useState} from "react";
import { useRouter } from "next/navigation";
export default function AdminPage(){
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [name,setName] = useState("");
    const [price,setPrice]=useState("");
    const [brand,setBrand]=useState("");
    const[image,setImage]=useState("");
    const[slug,setSlug]=useState("");
    const router = useRouter();

    async function loadData() {
  const productsRes = await fetch("/api/products");
  const productsData = await productsRes.json();
  setProducts(productsData);

  const ordersRes = await fetch("/api/orders");
  const ordersData = await ordersRes.json();
  setOrders(ordersData);
}

    useEffect(() => {
  const role = localStorage.getItem("role");

  if (role !== "admin") {
    router.push("/login");
    return;
  }

  loadData();
}, []);

    async function addProduct() {
     const method = editingId ? "PUT" : "POST";

     await fetch("/api/products",{
        method,
        headers:{
            "Content-Type":"application/json",
        },

        body:JSON.stringify({
            id:editingId,
            name,
            price:Number(price),
            brand,
            image,
            slug,
        }),
     });

     setName("");
     setPrice("");
     setBrand("");
     setImage("");
     setSlug("");
     setEditingId(null);
  

  location.reload();
}

  async function deleteProduct(id) {
  await fetch("/api/products", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  location.reload();
}
async function updateOrderStatus(id, status) {
  await fetch("/api/orders", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      status,
    }),
  });

  loadData();
}

    return (
  <section className="min-h-screen bg-black text-white pt-32 px-10">
    <h1 className="text-5xl font-bold mb-10">
      NOVA Admin Dashboard
    </h1>

    <div className="grid gap-4 mb-10">
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-3 rounded bg-zinc-900"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="p-3 rounded bg-zinc-900"
      />

      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        className="p-3 rounded bg-zinc-900"
      />

      <input
        type="text"
        placeholder="Image Path"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="p-3 rounded bg-zinc-900"
      />

      <input
        type="text"
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="p-3 rounded bg-zinc-900"
      />

      <button
        onClick={addProduct}
        className="bg-yellow-500 text-black py-3 rounded font-bold"
      >
        {editingId ? "Update Product" : "Add Product"}
      </button>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-zinc-900 p-6 rounded-xl border border-zinc-700"
        >
          <h2 className="text-2xl font-bold">{product.name}</h2>

          <p>₹{product.price}</p>

          <p className="text-gray-400">{product.brand}</p>

          <button 
           onClick={() => {
            if(confirm("Delete this product?")){
                deleteProduct(product._id);
            }
           }}
           className="mt-4 bg-red-600 px-4 py-2 rounded-lg">
            Delete
           </button>

           <button 
            onClick={() => {
                setEditingId(product._id);
                setName(product.name);
                setPrice(product.price);
                setBrand(product.brand);
                setImage(product.image);
                setSlug(product.slug);
            }}
            className="mt-2 ml-2 bg-blue-600 px-4 py-2 rounded-lg">
                Edit
            </button>
        </div>
      ))}
      <h2 className="text-4xl font-bold mt-16 mb-6">
  Orders
</h2>

<div className="grid gap-6">
  {orders.length === 0 ? (
    <p className="text-gray-400">No orders yet.</p>
  ) : (
    orders.map((order) => (
      <div
        key={order._id}
        className="bg-zinc-900 p-6 rounded-xl border border-zinc-700"
      >
        <h3 className="text-2xl font-bold">
          {order.customerName}
        </h3>

        <p>{order.email}</p>

        <p>{order.address}</p>

        <p className="mt-2">
          Total: ₹{order.total.toLocaleString()}
        </p>

        <div className="mt-3">
  <label className="font-semibold">Status: </label>

  <select
    value={order.status}
    onChange={(e) =>
      updateOrderStatus(order._id, e.target.value)
    }
    className="bg-zinc-800 p-2 rounded ml-2"
  >
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
  </select>
</div>

        <p className="mt-4 font-semibold">
          Items:
        </p>

        <ul className="list-disc ml-6">
          {order.items.map((item) => (
            <li key={item._id}>
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      </div>
    ))
  )}
</div>
    </div>
  </section>
);
}