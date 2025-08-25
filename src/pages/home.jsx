import { useState } from "react";
import Slide from "../components/slide/slide";
import data from '../data/slide.json'
import Intro from "../components/intro/intro";

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <main>
            <Slide 
                source={data[activeIndex].source}
                alt={data[activeIndex].alt}
                title="titre"
                subtitle={data[activeIndex].subtitle}
                span={data[activeIndex].span}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
            <Intro />
        </main>
    )
}