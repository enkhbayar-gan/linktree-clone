"use client"; //TODO try to use server component
import Link from "next/link";
import { FormEvent, useState } from "react";
import { mockData } from "../data";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    //TODO call API
    if (!mockData[username] || mockData[username].password !== password) {
      setErrorMsg("Invalid credentials");   
    } else {
      window.sessionStorage.setItem("user", JSON.stringify(mockData[username]));
      router.replace("/admin");
    }
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-lime-300 p-3 flex gap-5">
        <Link href={"/"}>Home</Link>
      </div>
      <main className="flex min-h-screen flex-col items-center px-4 py-8">
        <h1>Login Form</h1>
        {/* Username */}
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <input
              type="text"
              className="px-3 py-1.5 text-gray-700 bg-white border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="mt-4">
            <input
              type="password"
              className="px-3 py-1.5 text-gray-700 bg-white  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
              name="pin"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text text-red-400">{errorMsg}</p>
          {/* Login button */}
          <div className="text-center pt-1 mt-4 pb-1">
            <button
              className="bg-green inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
