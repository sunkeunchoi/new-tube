import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { YouTube } from "developer-icons";
export default function Home() {
  return (
    <div>
      <YouTube />
      <p className="text-xl font-semibold tracking-tight">NewTube</p>
      <ModeToggle />
      <Button>Click Me</Button>
    </div>
  );
}
