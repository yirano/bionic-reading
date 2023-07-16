import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Layout from "../components/Layout.tsx";

export default function Home() {
  return (
    <Layout>
      <h1 class="font-bold text-xl">Welcome!</h1>
    </Layout>
  );
}
