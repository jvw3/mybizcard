import mylogo from "../images/jwlogo.svg"
import { AboutMe } from "./AboutMe"
import { CardInfo } from "./CardInfo"

export const MyCard = () => {


return <>
<main className="flex-col w-screen h-screen bg-slate-500">
<div className="relative flex items-start justify-center bg-black h-25">
    <img className="w-20" src={mylogo}></img>
</div>
<div className="flex justify-center"><CardInfo /></div>
<div className="flex">
    <h1>Skills</h1>
</div>
<div className=""><AboutMe /></div>
</main>
</>
}