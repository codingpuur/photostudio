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
      

      <div className="mt-10 space-y-2   font-bold md:font-thin  text-gray-700 px-1 ">
        <div className=" space-y-7">
          <h1 className=" text-center text-3xl text-gray-500">Biography...</h1>
          <p className="  max-w-4xl  text-center  mx-auto">
          The Photo Junction is a South Delhi based renowned Wedding Photography Studio that specialises in weddings and all its’ related ceremonies along with pre-wedding shoots. Our professionals practice photography and fine art photography too. We love to travel across the nation capturing the most precious moments from weddings of all the cultures. 
          </p>
          <p className="  max-w-4xl    font-bold  mx-auto">
          We cover all the fun and emotional moments of your pre-wedding, wedding and post-wedding functions and combine them in an album, for you to adore forever. The Photo Junction owns a good reputation of work and is serving the clients for more than a decade that is why we are the top most demand of every wedding and prewedding shoot lovers. <br />
          </p>
<p className="max-w-4xl mx-auto font-bold">
Services Offered

</p>
        </div>
          <p className="  max-w-4xl   mx-auto">
          The skilled and experienced team of The Photo Junction has knowledge about the latest technicalities of the photography field and use only the high-end cameras and equipment to provide the best services to you. The photographs and videos shot by them will address the love you share with your better half and stand as a journal of your everlasting bond. We would ensure that your wedding is the most unforgettable experience with memories that can be cherished for life.
          </p>
          <p className="  max-w-4xl   mx-auto">
          The Photo Junction's wedding package includes a wide range of exclusive services that will make you have a complete wedding experience. 
          </p>
          <p className="max-w-4xl     mx-auto">

            <h1>The services include the following:</h1>
            <ul className=" list-disc">
              <li>Candid and traditional shots</li>
              <li>Videography</li>
              <li>Cinematic videos</li>
              <li>Pre-wedding  and post-wedding couple portraits</li>
              <li>Digital album with high-resolution pictures</li>
              <li>DVD or Blu-ray with the entire coverage</li>
              <li>Photobooks</li>
              <li>Photo booth services</li>
            </ul>
          </p>
          <p className="max-w-4xl   mx-auto space-y-4 ">
            <h1 className="  font-bold ">WEDDING PLANNING</h1>
            <p className=" text-xl">We create. You celebrate.</p>
            <p>Weddings in India are a grand celebration of love and commitment that bring families and friends together. They are often a big affair with elaborate ceremonies and rituals that span several days. Planning a wedding can be a daunting task, especially when there are so many things to consider, from choosing the right venue and catering to selecting the perfect decor and entertainment. In nut shell a well- planned wedding is what prospective brides and grooms look for & there we are to create the perfect and best day ever with endless ideas on our vision-boards turned into reality on your big day.</p>
          </p>
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
