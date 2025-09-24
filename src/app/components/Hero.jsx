import HeroSliderBtn from "../components/HeroSliderBtn";
import HeroSliderDots from "../components/HeroSliderDot";
import HeroSlides from "../components/HeroSlides";
import { SliderProvider } from "../components/Slider";

function Hero() {
  return (
    <section className="my-10 overflow-hidden mx-auto max-w-[var(--container-main)] px-[var(--spacing-main)]">
      <SliderProvider>
        <HeroSlides />
        <div className="flex items-center justify-between">
          <HeroSliderDots />
          <HeroSliderBtn />
        </div>
      </SliderProvider>
    </section>
  );
}

export default Hero;
