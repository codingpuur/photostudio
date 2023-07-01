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
            Mr. Sunder Dipak the man behind the show has been associated with
            wedding photography since ages and has been a celebrity photographer
            himself , its under his vision his sons Mohan & Raman Dipak got the
            inspiration to build up on his foundation. Now we are one of the
            reputed names in the wedding photography industry and have added
            loads of starry names as clients on our reputed client list and are
            followed by more than 8 lac genuine instagram & facebook followers
            in different pages who adore and love our work.
          </p>
          <p className="  max-w-4xl  text-center   font-bold  mx-auto">
            Public Announcement , A Lot of Clients are getting Duped by Similar
            Name Fake Studios , who say they are calling from Dipak Studio
            Punjabi Bagh Branch or Nehru ground branch & are offering very poor
            quality & a very pathetic experience , please dont fall into their
            trap as they are are not connected with us by any means .
          </p>
          <p className="  max-w-4xl  text-center  mx-auto">
            Raman Dipak thats me , I entered this industry in 2001 after doing
            my bachelors in computers science , took up this work as a
            challenge, since then till today i am trying to converge a product
            which has the best of everything , the best in image capturing, the
            best in presentation , and the best in cinematography as well. In
            this industry people promise a lot but a few deliver, few years down
            the line everything wears out but its the album that stands out.
          </p>
        </div>
        <div className="  w-full  h-96  lg:h-fit  overflow-hidden ">
          <img className="  w-full h-full object-cover object-center " src={one} alt="" />
        </div>
        <div className=" space-y-7">
          <h1 className=" text-center text-3xl">About Us...</h1>
          <p className="  max-w-4xl  text-center  mx-auto">
            Dipak studios.com powered by imaging experts Mohan & Raman Dipak is
            the most innovative Wedding photography company . Started way back
            in 1962 as a small time photo studio at neelam chowk Faridabad , now
            has its presence in both delhi and gurgaon as one of the most
            organised players in wedding photography business with a large team
            of wedding professionals ranging from photographers to
            cinematographers , album designers to video editors , and has also
            done international destination weddings in Antalya (Turkey)
            Amsterdam Africa Paris Thailand and Dubai.
          </p>
          <p className="  max-w-4xl  text-center   font-bold  mx-auto">
            We are one of the most celebrated and reviewed wedding photographer
            on Indias premier wedding portal Wedmegood and other wedding portals
            across India.
          </p>
          <p className="  max-w-4xl  text-center  mx-auto">
            We have tried to emerge as a picture company which delivers moments
            in a unique flavour which makes them feel like yesterday. Every
            member of our team is devoted to give you candid and narrative
            moments which weave a story around your moment. We are famous for
            our celebrity weddings of Rishi Kapoor & Amitabh Bachchan daughter ,
            recently covered wedding of singer Millind Gaba , cricketer Rahul
            Tewatia & actor Karan Mehra . Currently operating from three
            locations head office in Faridabad and wedding studios in Delhi &
            Gurgaon.
          </p>
        </div>
       <div className=" w-full">
        <div className=" w-full"><img className="    w-full h-[50vh]  lg:h-[170vh] object-cover object-center" src={two} alt="" /></div>
        <div className=" w-full"><img className=" w-full" src={five} alt="" /></div>
       </div>
        
       <div>
          <h1 className=" text-center text-3xl">Our Services </h1>
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
