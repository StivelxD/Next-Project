import Head from "next/head";
import Navigation from "./navigation";

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js Project</title>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
    </Head>
    <Navigation />
    <div>{props.children}</div>
  </div>
);

export default Container;
