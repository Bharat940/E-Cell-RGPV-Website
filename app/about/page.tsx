import Onmission from "./components/Onmission";
import WhoWeAre from "./components/WhoWeAre";
import Provide from "./components/Provide";
import Mentors from "./components/Mentors";
import Image from "next/image";
import CurvedStageEffect from "./components/CurvedStageEffect";


export default function AboutPage() {
    return (
        <div className="bg-[#0f0b28]">
            <Onmission />
            <WhoWeAre />
            <CurvedStageEffect />
            <Provide />
            <Mentors />
        </div>
    )
}