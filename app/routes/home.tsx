import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "micrusa" },
    { name: "description", content: "Nothing here" },
  ];
}

export default function Home() {
  return <Welcome />;
}
