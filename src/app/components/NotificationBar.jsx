"use client";

import { IoMdNotifications } from "react-icons/io";
import Button from "@/app/ui/Button";

function NotificationsButton() {
  return (
    <Button
      className="p-2 rounded-lg dark:text-primary-text hover:bg-white"
      onClick={() => console.log("ring ring")}
    >
      <IoMdNotifications className="w-5 h-5 text-black" />
    </Button>
  );
}

export default NotificationsButton;
