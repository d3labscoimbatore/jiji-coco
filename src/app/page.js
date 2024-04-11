import Button from "@/app/components/button/Button";
import Card from "./components/card/Card";
import Chip from "./components/chip/Chip";
import Profile from "./components/profile/Profile";

export default async function Home() {
  // Fteching the HTMLData from the mocky
  const reponse = await fetch(
    "https://run.mocky.io/v3/48126de9-e1e1-4762-80ed-b5b0a968993c"
  );
  const HTMLData = await reponse.json();

  return (
    <main className="flex">
     <Profile/>
    </main>
  );
}
