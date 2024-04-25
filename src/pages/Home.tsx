import CalendarAction from "@/components/CalendarAction";
import Certificate from "@/components/Certificate";
import Container from "@/components/Container";
import Discover from "@/components/Discover";
import Integration from "@/components/Integration";
import Jumbotron from "@/components/Jumbotron";
import LangSection from "@/components/LangSection";
import PowerUp from "@/components/PowerUp";
import Product from "@/components/product/Product";
import Promoter from "@/components/Promoter";
import SchedulingGsapSection from "@/components/scheduling/SchedulingGsapSection";
import VideoBg from "@/components/VideoBg";

function Home() {
  return (
    <div className="">
      <LangSection />
      <Container>
        <Jumbotron />
        <VideoBg />
        <Promoter />
        <Product />
        <Integration />
        <SchedulingGsapSection />
        <CalendarAction />
        <Discover />
        <Certificate />
        <PowerUp />
      </Container>
    </div>
  );
}

export default Home;
