import Link from "next/link";
import ActionBar from "./ActionBar";

export default function Home() {
  return (
    <>
      <ActionBar />
      <main className="flex min-h-screen flex-col items-center p-12">
        This is home page.
      </main>
    </>
  );
}
