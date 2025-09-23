import Link from "next/link";
import {
  PhotoIcon,
  SpeakerWaveIcon,
  ChevronDownIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

import Logo from "@/app/ui/Logo";
import Navbar from "@/app/components/Navbar";
import NotificationsButton from "@/app/components/NotificationBar";
import UiMode from "@/app/components/UiMode";
import HarmburgerMenu from "./HamburgerMenu";
import MobileNavbar from "./MobileNavbar";

function Header() {
  return (
    <header className="flex justify-between mx-auto max-w-[var(--container-main)] px-[var(--spacing-main)] my-2 ">
      <div className="flex items-center gap-4">
        <Logo className="dark:bg-white-background dark:rounded-3xl" />
        <div className="flex gap-2 items-center ">
          <Image
            src="/images/gradientimg.jpg"
            alt="profile"
            width={30}
            height={30}
            quality={80}
            className="rounded-full object-conver hidden lg:block w-7 h-7"
          />
          <Link href="#" className="flex gap-2 items-center">
            <p className="text-sm hidden lg:block">benevolentnimbllebat</p>
            <UserCircleIcon className="lg:hidden block w-5 h-5" />
            <ChevronDownIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Navbar />

      <div className="flex items-center gap-3">
        <Link
          href="#"
          className="lg:flex hidden items-center gap-2 bg-grey-background rounded-lg text-sm p-1.5 dark:text-primary-text"
        >
          <PhotoIcon className="w-4 h-4" />
          <p>Gallery</p>
        </Link>

        <Link
          href="#"
          className="lg:flex items-center gap-2 bg-grey-background rounded-lg text-sm p-1.5 hidden dark:text-primary-text"
        >
          <SpeakerWaveIcon className="w-4 h-4" />
          <p>Support</p>
        </Link>

        <MobileNavbar />
        <NotificationsButton />
        <UiMode />
        <Image
          src="/images/gradientimg.jpg"
          alt="profile"
          width={30}
          height={30}
          quality={80}
          className="rounded-full object-conver hidden lg:block w-7 h-7"
        />
        <HarmburgerMenu />
      </div>
    </header>
  );
}

export default Header;
