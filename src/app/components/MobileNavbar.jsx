"use client";

import Link from "next/link";
import {
  HomeIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  PhotoIcon,
  PencilSquareIcon,
  CreditCardIcon,
  SwatchIcon,
  CogIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import Button from "../ui/Button";
import { useToggle } from "@/app/components/ToggleTheme";

function MobileNavbar() {
  const { closeNav, toggleNav } = useToggle();
  return (
    <nav
      className={`bg-grey-background transition-all dark:text-primary-text  rounded-2xl py-4 px-2 lg:hidden fixed top-0 right-0 z-1000`}
      style={
        toggleNav === false || toggleNav === null
          ? { transform: "translateY(-100%)" }
          : { transform: "translateY(0)" }
      }
    >
      <ul className="flex flex-col gap-5 items-center">
        <li>
          <Button onClick={closeNav}>
            <XMarkIcon className="w-6 h-6" />
          </Button>
        </li>
        <li className="bg-white-background py-1.5 px-3 rounded-xl">
          <Link href="/">
            <HomeIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <PhotoIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <VideoCameraIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <PencilSquareIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <SwatchIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <CogIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <CreditCardIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <PhotoIcon className="w-8 h-8" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <SpeakerWaveIcon className="w-8 h-8" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MobileNavbar;
