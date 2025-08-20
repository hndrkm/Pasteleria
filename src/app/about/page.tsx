import About from "@/ui/sections/About"
import OurServices from "@/ui/sections/OurServices"

export default function AboutPage() {
  return (
    <div className="w-full ">
      <div className="bg-gradient-to-b from-orange-600 to-transparent h-32 mb-8"></div>
      <div className="flex flex-col divide-y-2 divide-dashed divide-primary">
        <About />
        {/*
        <OurServices />
        */}
      </div>
    </div>
  );
}
