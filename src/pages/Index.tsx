import SlidePresentation from "@/components/SlidePresentation";
import Slide01Cover from "@/slides/Slide01Cover";
import Slide02Hook from "@/slides/Slide02Hook";
import Slide03Overview from "@/slides/Slide03Overview";
import Slide04Origin from "@/slides/Slide04Origin";
import Slide05Epidemiology from "@/slides/Slide05Epidemiology";
import Slide06Complexity from "@/slides/Slide06Complexity";
import Slide07Electoral from "@/slides/Slide07Electoral";
import Slide08SAT from "@/slides/Slide08SAT";
import Slide09Cost from "@/slides/Slide09Cost";
import Slide10Opportunity from "@/slides/Slide10Opportunity";
import Slide11Investment from "@/slides/Slide11Investment";
import Slide12Closing from "@/slides/Slide12Closing";

const slides = [
  Slide01Cover,
  Slide02Hook,
  Slide03Overview,
  Slide04Origin,
  Slide05Epidemiology,
  Slide06Complexity,
  Slide07Electoral,
  Slide08SAT,
  Slide09Cost,
  Slide10Opportunity,
  Slide11Investment,
  Slide12Closing,
];

const Index = () => <SlidePresentation slides={slides} />;

export default Index;
