"use client";

import { useRouter } from "next/navigation";
import ActionBar from "../ActionBar";

const AdminPage = () => {
  const router = useRouter();
  let text = "This is admin page.";
  if (window && !window.sessionStorage.getItem("user")) {
    router.replace("/login");
  }

  return (
    <>
      <ActionBar/>
      <main className="flex min-h-screen flex-col items-center p-12">
        {text}
      </main>
    </>
  );
};

export default AdminPage;
