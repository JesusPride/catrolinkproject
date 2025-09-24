"use client";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

import Button from "@/app/ui/Button";
import { features as featuresData } from "@/app/lib/featuresData";
import Link from "next/link";
import useToggle from "@/app/hooks/useToggle";

function Features() {
  const { toggle, toggleState } = useToggle();

  const features = toggle ? featuresData : featuresData.slice(0, 4);

  return (
    <section className="mx-auto max-w-[var(--container-main)] px-[var(--spacing-main)] pt-2 pb-7">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold ">Generate</h2>
        <Button
          className="flex gap-1  bg-primary items-center px-2"
          onClick={toggleState}
        >
          <IoIosArrowDown className="text-accent-text dark:text-primary-text w-4 h-4" />
          <p className="text-sm text-accent-text dark:text-primary-text ">
            {toggle === false ? "Show all" : "Hide"}
          </p>
        </Button>
      </div>

      <section className="grid sm:grid-cols-2 lg:grid-cols-4  gap-6 my-5">
        {features.map((feat, index) => (
          <div key={index} className="flex items-center gap-3 justify-between ">
            <Image
              src={feat.img}
              alt="profile"
              width="50"
              height="100"
              quality={80}
              className="rounded-lg object-contain "
            />
            <div className="flex-1">
              <h3 className="text-md font-bold ">
                {feat.title}{" "}
                {feat?.status && (
                  <span className="bg-blue-background py-0.5 px-1 text-primary rounded-3xl text-xs">
                    {feat?.status}
                  </span>
                )}
              </h3>
              <p className="text-xs">{feat.text}</p>
            </div>
            <Link
              href="#"
              className="py-1 p-2  rounded-2xl bg-grey-background dark:text-primary-text text-sm"
            >
              Open
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Features;
