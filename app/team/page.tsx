import TeamHero from "./component/TeamHero";
import CurvedStage from "./component/CurvedStage";
import TeamHead from "./component/TeamHead";
import ExecutionTeam from "./component/ExecutionTeam";

export const metadata = {
  title: "Team | E-Cell",
  description: "Meet the team behind E-Cell",
};

export default function TeamPage() {
  return (
    <div className="bg-[#0f0b28]">
      <TeamHero />
      <CurvedStage />
      <TeamHead />
      <ExecutionTeam />
    </div>
  );
} 