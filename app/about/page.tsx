import Image from "next/image"
import Onmission from "./components/Onmission"
import WhoWeAre from "./components/WhoWeAre"
import { Profiler } from "react"
import Provide from "./components/Provide"


export default function AboutPage() {
    return (
        <div className="">
            <Onmission />
            <WhoWeAre />
            
            <Provide />

        </div>
    )
}