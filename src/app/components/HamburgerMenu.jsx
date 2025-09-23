"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";
import { useToggle } from "@/app/components/ToggleTheme";

function HarmburgerMenu() {
  const { openNav } = useToggle();
  return (
    <Button className="lg:hidden p-1 rounded-lg" onClick={openNav}>
      <Bars3Icon className="w-6 h-6" />
    </Button>
  );
}

export default HarmburgerMenu;
