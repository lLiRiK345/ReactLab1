import type { Route } from "./+types/home";
import {Button} from "../buttons/buttons";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lab1" },
    { name: "description", content: "Кнопка!" },
  ];
}

export default function Home() {
  return <Button />;
}
