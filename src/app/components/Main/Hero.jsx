import Popular from "../Popular/Popular"
import Gaming from "../Gaming/Gaming"
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className="container lg:px-24 md:px-12 sm:px-0 bg-[#27292a] mx-auto py-10   rounded-md  ">
    <div style={{backgroundImage:"url('/banner-bg.jpg')"}} className="bg-no-repeat bg-cover bg-center min-h-96  rounded-lg">
      <div className="p-10 max-sm:text-center">
      <h2 className="text-white text-4xl font-semibold">Welcome To Cyborg</h2>
        <p className="text-white font-bold text-6xl w-auto py-10">
        <span className="text-[#ec6090]">Browse </span> Our <br/> Popular Games Here
        </p>
        <button className="text-white bg-[#ec6090] rounded-full p-4">Browse Now
        </button>
      </div>
      </div>
      <Popular />
      <Gaming/>
    </section>
  )
}

export default Hero
