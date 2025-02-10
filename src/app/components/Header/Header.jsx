"use client"
import Link from "next/link";
import { IoGameController } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import styles from"./Header.module.css"
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RiMenuAddLine } from "react-icons/ri";
import { useState } from "react";
const navLinks=[
 { name:"Home",
  href:"/"},
  {name:"Browse",
  href:"/Browse"},
  {name:"Details",
    href:"/Details"
  },{
    name:"Streams",
    href:"/Streams"
  }
]
const profile=[
  {name:"Profile",
    href:"/Profile"
  }
]
const Header = () => {
  const [open, setOpen] = useState(false)
  console.log(open)
  const pathName=usePathname()
  return (
    <>
    <nav className="container lg:px-24 md:px-12 sm:px-0 bg-[#212224] max-w-full flex items-center justify-evenly py-5">
    <div className="flex items-center justify-between sm:gap-x-2 lg:gap-x-10">
    <Link href={"/"} className="flex items-center justify-between text-[#A74C6D] gap-x-5 text-2xl">
        <IoGameController size={36}/>
        <h1 className="sm:text-lg lg:text-4xl">GamePlay</h1>
    </Link>

    <form name="name" className="hidden lg:flex px-4 py-3 rounded-full   overflow-hidden max-w-md mx-auto font-[sans-serif]  bg-[#28292B]" >
    <IoSearchSharp className="text-gray-500 mr-5" size={24}/>
      <input type="text" placeholder="Type Something" className="w-full outline-none bg-transparent text-gray-600 text-sm " />
    </form>
    </div>
  <ul className={`hidden md:flex items-center justify-between gap-x-10 `}>
    {navLinks.map((link, index) => {
      const isActive=pathName.startsWith(link.href)
      return(
        <li  key={index} className={`${styles.li} transition-all sm:text-sm lg:text-xl active text-[#363536]`}>
      <Link href={link.href} className={isActive ?"text-[#A74C6D]":""}>
      {link.name}
      </Link>
    </li>
      )
    })}
  </ul>
  <RiMenuAddLine size={40} className=" transition-all ease-linear cursor-pointer text-gray-500 bg-[#28292B] p-2 rounded-full flex md:hidden" onClick={()=>{setOpen(!open)}}/>
  
  { profile.map((link,index)=>{
    const isActive=pathName.startsWith(link.href)
    return(
      <Link href={link.href} className={`${styles.li}   text-[#363536] ${isActive ?"text-[#A74C6D]":""}`} key={index}>
      <div className=" flex items-center justify-between p-2 rounded-full bg-[#28292B] gap-x-2">
      <span className="sm:text-sm lg:text-xl">{link.name}</span>
      <Image src={"/profile-header.jpg"} width={30} height={30} alt="profile-header"className="rounded-full" />
      </div>
    </Link>
    )
  }) 
    }
  </nav>
  <div className={`z-10 w-[80vw] mx-auto rounded-b-md  relative bg-[#28292B]  ${open?`flex ${styles.menu}`:"hidden"} `}>
    <ul className="flex flex-col items-center ${styles.menu} justify-evenly">
    {navLinks.map((link, index) => {
      const isActive=pathName.startsWith(link.href)
      return(
        <li  key={index} className={`px-20 ${styles.li} text-xl text-[#363536] text-center `}>
      <Link href={link.href} className={`${isActive ?"text-[#A74C6D]":""} cursor-pointer`} onClick={()=>{
        setOpen(!open)
      }}>
      {link.name}
      </Link>
    </li>
      )
    })}
    
    </ul>
    </div>
    </>
  )
}

export default Header
