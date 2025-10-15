import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <ModeToggle />
      <p className="font-bold text-rose-500">Hello World!</p>
      <Button>Click Me</Button>
    </div>
  );
}
