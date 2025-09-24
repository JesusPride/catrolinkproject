"use client";

import { BellIcon } from "@heroicons/react/24/solid";
import Button from "@/app/ui/Button";

function NotificationsButton() {
  return (
    <Button
      className="p-2 rounded-lg dark:text-primary-text hover:bg-white"
      onClick={() => console.log("hello")}
    >
      <BellIcon className="w-5 h-5" />
    </Button>
  );
}

export default NotificationsButton;
