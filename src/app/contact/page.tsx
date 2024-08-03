import ContactUs from "@/ui/sections/ContactUs";
import VisitUs from "@/ui/sections/VisitUs";
export default function ContactPage() {
    return (
      <div className="w-full space-y-8  ">
        <div className="bg-gradient-to-b from-orange-600 to-transparent h-32 mb-8"></div>
        <ContactUs/>
        <VisitUs/>
      </div>
    );
}
