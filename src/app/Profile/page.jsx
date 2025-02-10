import Image from "next/image"
import { FaEye } from "react-icons/fa";
import Gaming from "../components/Gaming/Gaming";
const page = () => {
  return (
    <section className="bg-[#212224] ">
    <div className="container lg:px-24 md:px-12 sm:px-0 bg-[#27292a] mx-auto py-10   rounded-md">
      <div className="container lg:px-24 md:px-12 sm:px-0 bg-[#212224] mx-auto py-10 rounded-md grid grid-cols-1  lg:grid-cols-3 gap-10  ">
      <Image src={"/profile.jpg"} alt="profile" width={400} height={500} className="rounded-md mx-auto"/>
      <div className="flex flex-col py-5">
        <button className="text-white bg-[#ec6090] rounded-full py-3 w-fit px-5 my-3">Offline</button>
        <h2 className="text-2xl text-white font-extrabold">Alan Smithee</h2>
        <p className="text-[#666666] py-5">You Haven&apos;t Gone Live yet. Go Live By Touching The Button Below.</p>
        <button className="border-2 border-[#ec6090] py-3 px-5 w-fit text-[#ec6090] rounded-full">Start Live Stream</button>
      </div>
      <div className=" rounded-md p-5 bg-[#27292a]">
        <div className="flex items-center justify-between  border-b-2 border-b-[#666666] pb-5">
          <p className="text-[#666666]">Games Downloaded</p>
          <span className="text-[#ec6090]">3</span>
        </div>
        <div className="flex items-center justify-between  border-b-2 border-b-[#666666] py-5">
          <p className="text-[#666666]">Friends Online</p>
          <span className="text-[#ec6090]">3</span>
        </div>
        <div className="flex items-center justify-between  border-b-2 border-b-[#666666] py-5">
          <p className="text-[#666666]">Live Streams </p>
          <span className="text-[#ec6090]">3</span>
        </div>
        <div className="flex items-center justify-between   py-5">
          <p className="text-[#666666]">Clips </p>
          <span className="text-[#ec6090]">3</span>
        </div>
      </div>
      
      </div>
     <div className="bg-[#212224] px-5">
     <hr className="w-[90%] mx-auto bg-[#666666] h-[1px] border-none"/>
     <div className="px-5">
       <h3 className="text-4xl font-semibold py-5">
         <span className="text-white underline">
         Your Most Popular &nbsp; 
         </span> 
         <span className="text-[#ec6090]">
          Clips
         </span>
       </h3>
     </div>
     </div>
     <div className="container lg:px-24 md:px-12 sm:px-0 bg-[#212224] mx-auto py-10 rounded-md grid grid-cols-1  lg:grid-cols-4 gap-10">
     <div className="rounded-md bg-[#27292a] p-5 flex flex-col items-center">
     <Image src={"/clip-01.jpg"} alt="clip" width={200} height={200} className="rounded-md"/>
     <p className="flex items-center gap-x-10 pt-5">
     <h4 className="text-white font-semibold whitespace-nowrap">First Clip</h4>
     <span className="flex items-center gap-1">
     <FaEye className="text-[#ec6090]"/>
     <span className="text-white">250</span>
     </span>
     </p>
    </div>
    <div className="rounded-md bg-[#27292a] p-5 flex flex-col items-center">
    <Image src={"/clip-02.jpg"} alt="clip" width={200} height={200} className="rounded-md"/>
    <p className="flex items-center gap-x-10 pt-5">
    <h4 className="text-white font-semibold whitespace-nowrap">Second Clip</h4>
    <span className="flex items-center gap-1">
    <FaEye className="text-[#ec6090]"/>
    <span className="text-white">250</span>
    </span>
    </p>
   </div>
   <div className="rounded-md bg-[#27292a] p-5 flex flex-col items-center">
   <Image src={"/clip-03.jpg"} alt="clip" width={200} height={200} className="rounded-md"/>
   <p className="flex items-center gap-x-10 pt-5">
   <h4 className="text-white font-semibold whitespace-nowrap">Third Clip</h4>
   <span className="flex items-center gap-1">
   <FaEye className="text-[#ec6090]"/>
   <span className="text-white">250</span>
   </span>
   </p>
  </div>
  <div className="rounded-md bg-[#27292a] p-5 flex flex-col items-center">
  <Image src={"/clip-04.jpg"} alt="clip" width={200} height={200} className="rounded-md"/>
  <p className="flex items-center gap-x-10 pt-5">
  <h4 className="text-white font-semibold whitespace-nowrap">Fourth Clip</h4>
  <span className="flex items-center gap-1">
  <FaEye className="text-[#ec6090]"/>
  <span className="text-white">250</span>
  </span>
  </p>
 </div>
 <button className="text-white bg-[#ec6090] rounded-full p-3 relative lg:left-[200%] lg:translate-x-[-25%]">Load More Clips</button>
    </div>
    <Gaming/>
    </div>
    </section>
  )
}

export default page
