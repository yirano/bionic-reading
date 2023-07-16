import { Handlers, PageProps } from "$fresh/server.ts";
import { useState } from "preact/hooks";
import "$std/dotenv/load.ts";
import Layout from "../../islands/Layout.tsx";

interface ResponseData {
  body: string;
}

export const handler: Handlers = {
  async POST(req, ctx) {
    const rapidapi = Deno.env.get("RAPIDAPI_KEY");
    if (!rapidapi) {
      throw new Error("Can't retrieve API Key");
    }
    const encodedParams = new URLSearchParams();
    encodedParams.set("content", "Hello, my name is Yirang");
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
    `<style>.bionic-reader-container { color: red; }</style>${data.body}`;
  const [render, setRender] = useState(style);
  const handleSubmit = (event: Event) => {
    event.preventDefault();
  };
  return (
    <Layout>
      <form method="POST" onSubmit={handleSubmit}>
        <textarea
          name="content"
          rows={10}
          class="w-11/12 border-1 rounded-sm"
        />
        <button type="submit">Submit</button>
      </form>
      <iframe
        class="text-xl"
        srcDoc={render}
        style={{ width: "100%", height: "500px" }}
      />
    </Layout>
  );
}
