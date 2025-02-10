import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
const content=[
    {url:"/popular-01.jpg",main:"Fortnite",rate:4.8,second:"Sandbox",down:"2.8M"},
    {url:"/popular-02.jpg",main:"PubG",rate:4.8,second:"Battle  S",down:"2.8M"},
    {url:"/popular-03.jpg",main:"Dota2",rate:4.8,second:"Steam-X",down:"2.8M"},
    {url:"/popular-04.jpg",main:"CS-GO",rate:4.8,second:"Legendary",down:"2.8M"},
    {url:"/popular-05.jpg",main:"Mini Craft",rate:4.8,second:"Legendary",down:"2.8M"},
    {url:"/popular-06.jpg",main:"Eagles Fly",rate:4.8,second:"Matrix Games",down:"2.8M"},
    {url:"/popular-07.jpg",main:"Warface",rate:4.8,second:"Max 3D",down:"2.8M"},
    {url:"/popular-08.jpg",main:"Warcraft",rate:4.8,second:"Legend",down:"2.8M"},

]
const Popular = () => {
  return (
    <div className="container lg:px-24 md:px-12 sm:px-0 bg-[#212224] mx-auto py-10 my-10 rounded-md relative">
      <h2 className="px-5 text-4xl font-extrabold  text-white"><span className="underline">Most Popular</span> <span className="text-[#ec6090] ">Right Now</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        
           {content.map((cont,index)=>{
            return(
                <div className="bg-[#27292a] py-10 px-5 rounded-md w-[200px] mx-auto" key={index}>
                <Image src={cont.url} alt="popular" width={200} height={300} className="rounded-md w-full overflow-hidden"/>
                <div className="py-5 flex items-center justify-between">
                    <h4 className="text-white">{cont.main}</h4>
                    <span className="text-white flex items-center justify-between gap-x-1"><FaStar className="text-yellow-400"/>
                    {cont.rate}</span>
                </div>
                <div className="pt-5 flex items-center justify-between">
                <h4 className="text-[#666666]">{cont.second}</h4>
                <span className="text-white flex items-center justify-between gap-x-1"><FaDownload className="text-[#ec6090]"/>
                {cont.down}</span>
            </div>
               </div>
            )
           })}
      </div>
      <button className="text-white bg-[#ec6090] rounded-full p-5 absolute left-[50%] translate-x-[-50%]">Discover Popular</button>
    </div>
  )
}

export default Popular
