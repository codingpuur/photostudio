import React from "react";
import Banner from "../Banner/Banner";

import one from '../../assets/home/one.jpg'
// src\assets\home\one.JPG
import two from '../../assets/home/two.jpg'
import three from '../../assets/home/three.jpg'
import four from '../../assets/home/four.avif'
import five from '../../assets/home/five.jpg'
import six from '../../assets/home/six.avif'


import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      

      <div className="mt-10 space-y-12">
        <div className=" space-y-7">
          <h1 className=" text-center text-3xl">Biography...</h1>
          <p className="  max-w-4xl  text-center  mx-auto">
          The Photo Junction is a Wedding photography company that specialises in weddings and related ceremonies. Although it is based in South Delhi, We travel across the nation capturing the most precious moments from different caste and culture weddings. Its professionals practice photography and fine art photography and we are also available to for all the pre-wedding shoots.
          </p>
          <p className="  max-w-4xl  text-center   font-bold  mx-auto">
          We cover all the fun and emotional moments of your pre-wedding, wedding and post-wedding functions and combine them in an album, for you to adore forever. The Photo Junction has a good reputation of work in the history of Photography. We are serving the clients for more than a decade that is why we are the top most demand of every wedding and prewedding shoot lovers.
          </p>
          <p className="  max-w-4xl  text-center  mx-auto">
          The skilled and experienced team of The Photo Junction has knowledge about the latest technicalities of the photography field and use only the high-end cameras and equipment to provide the best services to you. The photographs and videos shot by them will address the love you share with your better half and stand as a journal of your everlasting bond. We would ensure that your wedding is the most unforgettable experience with memories that can be cherished for life.
          </p>
        </div>
        <div className="  w-full  h-96  lg:h-fit  overflow-hidden ">
          <img className="  w-full h-full object-cover object-center " src={one} alt="" />
        </div>
        <div className=" space-y-7">
          <h1 className=" text-center text-3xl">About Us...</h1>
          <p className="  max-w-4xl   mx-auto">
          Be it an outdoor wedding, a destination wedding or an intimate wedding. We are a SPECIALISED WEDDING STUDIO in tune with latest trends and technology covering every form of photography and cinematography.

          </p>
          <p className="  max-w-4xl       mx-auto">
          Our studio has a team of professional photographers who have expertise in capturing people in their natural environments, situations and emotions Our vision is to offer quality work on time coz' we know you deserve the best. So the work is so created that you cherish your lifetime moments and enjoy the beautiful stories that are magically crafted with cameras'.
          </p>
         
          <p className="  max-w-4xl  text-center  mx-auto font-bold">
          Our Specialization : <br />
          Luxury Cinematic Wedding Films   <br />
          Pre Wedding Films in Bollywood Style <br />
           Destination Weddings <br />
            Candid photoshoots for bride and groom  <br />
            Fabulous Designer Photo books customized to your style
          </p> 
          <p  className="max-w-4xl    mx-auto">
We the team of passion driven photographers believe to deliver your everlasting memories with personalised touch as we value the trust you put in us

          </p>
          <p className="max-w-4xl    mx-auto font-bold">
Always passionate to serve those who are in pursuit of excellence

          </p>
       
        </div>
   


       <div className=" w-full">
        <div className=" w-full"><img className="    w-full h-[50vh]  lg:h-[170vh] object-cover object-center" src={two} alt="" /></div>
        <div className=" w-full"><img className=" w-full" src={five} alt="" /></div>
       </div>
        
       <div>
          <h1 className=" text-center text-3xl  md:border-b-2 border-black md:w-11/12 mx-auto  pb-10" >We Offer Services </h1>
          <Services/>
        </div>

        <div className="  w-full">
          <img className=" w-full" src={four} alt="" />
          <img className=" w-full" src={three} alt="" />
          <img className=" w-full" src={six} alt="" />
        </div>
        
        

      
      </div>
    </div>
  );
};

export default Home;
