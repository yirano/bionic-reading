import { Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import "$std/dotenv/load.ts";
import Layout from "../../components/Layout.tsx";

interface ResponseData {
  body: string;
}

export const handler: Handlers = {
  async POST(req, ctx) {
    const rapidapi = Deno.env.get("RAPIDAPI_KEY");
    if (!rapidapi) {
      throw new Error("Can't retrieve API Key");
    }

    const requestBody = await req.text();
    const formData = new URLSearchParams(requestBody);
    const content = formData.get("content") || "";

    const encodedParams = new URLSearchParams();
    encodedParams.set("content", content);
    encodedParams.set("response_type", "html");
    encodedParams.set("request_type", "html");
    encodedParams.set("fixation", "1");
    encodedParams.set("saccade", "10");

    const res = await fetch("https://bionic-reading1.p.rapidapi.com/convert", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com",
        "X-RapidAPI-Key": rapidapi,
      },
      body: encodedParams.toString(),
    });

    if (!res.ok) {
      throw new Error(`Could not fetch data ${res.status}`);
    }

    const data = await res.text();
    return ctx.render({ body: data });
  },
};

export default function Convert({ data }: PageProps<ResponseData>) {
  const style =
    `<style>.bionic-reader-container { font-size: 20px; line-height: 29px; letter-spacing: 1px; font-family: Arial; } .bionic-b {font-weight: 700;}</style>${data?.body}`;
  const [render, setRender] = useState(style);
  return (
    <Layout>
      <form method="POST" action="/convert">
        <textarea
          name="content"
          rows={10}
          class="w-full border-1 rounded-sm p-6"
        />
        <button type="submit">Submit</button>
      </form>
      {data?.body &&
        (
          <iframe
            class="border-1 drop-shadow-md mt-12 p-4"
            srcDoc={render}
            style={{ width: "100%", height: "500px" }}
          />
        )}
    </Layout>
  );
}
