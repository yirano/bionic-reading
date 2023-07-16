import { Handlers } from "$fresh/server.ts";
import Layout from "../../islands/Layout.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const body = {};
  },
};

export default function Convert() {
  const convert = "";
  return (
    <Layout>
      <div>
        <p>
          Convert
        </p>
      </div>
    </Layout>
  );
}
