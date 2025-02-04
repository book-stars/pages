import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import logger from "~/logger";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Booksta.rs" },
    { name: "description", content: "Welcome to Booksta.rs!" },
  ];
}

export default function Home() {
  logger.info("Home");
  return <Welcome />;
}
