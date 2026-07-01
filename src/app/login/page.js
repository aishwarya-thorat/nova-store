"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function handleLogin(){

    if(email==="admin@nova.com" && password==="admin123"){
        localStorage.setItem("role","admin");
        router.push("/admin");
    }


    else{
        alert("Invalid Credentials");
    }

  }

  return(
    <section className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="bg-zinc-900 p-8 rounded-2xl w-[400px]">

        <h1 className="text-4xl font-bold mb-8">
          Admin Login
        </h1>
        <p className="text-gray-400 mb-6">
            Only administrators can access the dashboard.
        </p>

        <input
          className="w-full p-3 mb-4 rounded bg-black"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-6 rounded bg-black"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold"
        >
          Login
        </button>

        <div className="mt-6 text-sm text-gray-400 border-t border-zinc-700 pt-4">
            <p className="font-semibold mb-2">
                Demo Credentials
            </p>
            <p>
                Email: admin@nova.com
            </p>
            <p>Password: admin123</p>
        </div>

      </div>
      

    </section>
  )

}