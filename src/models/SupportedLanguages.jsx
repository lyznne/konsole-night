
import { SiDart, SiPerl, SiGo,SiJavascript, SiCsharp, SiMysql, SiKotlin, SiGnubash, SiPython, SiRust, SiTypescript, SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";
import { FaJava, FaPhp,  FaSwift } from "react-icons/fa";
import { BsMarkdown, BsGit } from "react-icons/bs";
import { DiCoffeescript, DiRuby } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";


const supportedLanguages = [
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'C++', icon: <TbBrandCpp /> },
    { name: 'Ruby', icon: <DiRuby /> },
    { name: 'Swift', icon: <FaSwift /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Go', icon: <SiGo/> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Rust', icon: <SiRust /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
    { name: "Dart", icon: <SiDart /> },
    { name: 'Perl', icon: <SiPerl /> },
    { name: 'SQL', icon: < SiMysql /> },
    { name: "Git", icon: <BsGit /> },
    { name: "CoffeScript", icon: <DiCoffeescript /> },
    { name: "Markdown", icon: <BsMarkdown /> },
    { name: "Bash", icon: <SiGnubash /> },
    { name: "Tailwindcss", icon: <SiTailwindcss /> },
    { name: "C#", icon: <SiCsharp /> }
];

export default supportedLanguages;