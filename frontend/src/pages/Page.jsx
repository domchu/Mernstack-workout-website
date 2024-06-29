import react from "react"
import Banner from '../Components/Banner/Banner';
import allBannerImage from '../assets/allBanner.jpg';
import Slider from "../Components/Slider/Slider";


const Page = () => {
    

    return (
      <>
        {/* <Banner image={allBannerImage} text='Pages' /> */}
        <Slider/>
      </>
    );
}

export default Page