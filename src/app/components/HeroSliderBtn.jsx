"use client";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Button from "@/app/ui/Button";
import { useSlider } from "@/app/components/Slider";

function HeroSliderBtn() {
  const { increaseCurSlide, decreaseCurSlide } = useSlider();
  return (
    <aside className="flex gap-4 ">
      <Button className="p-1 rounded-2xl" onClick={decreaseCurSlide}>
        <IoIosArrowBack className="w-5 h-5" />
      </Button>
      <Button className="p-1 rounded-2xl" onClick={increaseCurSlide}>
        <IoIosArrowForward className="w-5 h-5" />
      </Button>
    </aside>
  );
}

export default HeroSliderBtn;
