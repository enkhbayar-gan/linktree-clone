"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const ActionBar = () => {
  const router = useRouter();

  const handleSignout = () => {
    window.sessionStorage.removeItem("user");
    router.replace("/");
  };

  return !window.sessionStorage.getItem("user") ? (
    <div className="bg-lime-300 p-3 flex gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/login"}>Login</Link>
    </div>
  ) : (
    <div className="bg-lime-300 p-3 flex gap-5">
      <Link href={"/"}>Home</Link>
      <button onClick={handleSignout}>Sign out</button>
    </div>
  );
};

export default ActionBar;
