import GettingStartedSection from "@/components/template/gettingStartedSection";
import HomeHeader from "@/components/template/homeHeader";
import InfoSection from "@/components/template/infoSection";
import LeadershipSection from "@/components/template/leadershipSection";
import ProgramSection from "@/components/template/programSection";
import UnpreparedSection from "@/components/template/unpreparedSection";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <InfoSection />
      <UnpreparedSection />
      <ProgramSection />
      <LeadershipSection />
      <GettingStartedSection />
    </>
  );
}
