import Link from "next/link";

import {
  HomeIcon,
  VideoCameraIcon,
  PhotoIcon,
  PencilSquareIcon,
  CreditCardIcon,
  SwatchIcon,
  CogIcon,
} from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <nav className="bg-grey-background rounded-2xl p-2 hidden lg:block">
      <ul className="flex gap-5 items-center dark:text-primary-text">
        <li className="bg-white-background py-1.5 px-3 rounded-xl">
          <Link href="/">
            <HomeIcon className="w-5 h-5" />
          </Link>
        </li>
        <li className="hover:bg-white rounded-2xl p-2">
          <Link href="#">
            <PhotoIcon className="w-5 h-5" />
          </Link>
        </li>
        <li className="hover:bg-white rounded-2xl p-2">
          <Link href="#">
            <VideoCameraIcon className="w-5 h-5" />
          </Link>
        </li>
        <li className="hover:bg-white rounded-2xl p-2">
          <Link href="#">
            <PencilSquareIcon className="w-5 h-5" />
          </Link>
        </li>
        <li className="hover:bg-white rounded-2xl p-2">
          <Link href="#">
            <SwatchIcon className="w-5 h-5" />
          </Link>
        </li>
        <li className="hover:bg-white rounded-2xl p-2">
          <Link href="#">
            <CogIcon className="w-5 h-5" />
          </Link>
        </li>
        <li className="hover:bg-white rounded-2xl p-2">
          <Link href="#">
            <CreditCardIcon className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
