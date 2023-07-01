import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="md:flex justify-around bg-black  text-white relative  space-y-10 md:space-y-0  ">
        <div className="  space-y-10 ">
          <div className=" flex justify-center mt-10  ">
            <img
              className=" h-14 w-44 md:h-16 md:w-52 px-2 mt-10  border-white   object-cover object-center "
              src={logo}
              alt="LOGO"
            />
          </div>
          <div className=" list-none flex gap-4 justify-center text-lg ">
            <a href="https://www.facebook.com/thephotojunction/">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          
            <a href="https://www.youtube.com/channel/UC2FdDI8tF5jc1SgHI2bvHeQ">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a href="https://www.instagram.com/thephotojunction/">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.linkedin.com/in/the-photo-junction-b44a4121b/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
          <p>
            Marketing manager :{" "}
            <span>
              {" "}
              <a
                href="https://wa.me/971841001"
                className="whatsapp_float  right-10 bottom-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deepanshu kathpalya
              </a>
            </span>{" "}
          </p>
        </div>
        <div className="  space-y-6  md:space-y-14  flex flex-col justify-center items-center ">
          <h1 className="      ">Contact us :</h1>
          <div>
            <p className="w-72 md:w-44">
              A-5, Main, Shohan Lal Marg, Suraj Kund Rd, opp cng pump, Pul
              Pehlad Pur, New Delhi, Delhi 110044
            </p>
            <p>
              Phone no: <span>971841001</span>
            </p>
            <p>
              Email: <span>thephotojunction0027@gmail.com</span>
            </p>
          </div>
        </div>
        <div className=" space-y-10">
          <h1 className="  text-center ">Map:</h1>
          
          <iframe
            className=" w-full h-40 rounded-lg  md:w-80 md:h-72"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.326740885744!2d77.28778277513759!3d28.499815675737544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7c623868683%3A0x11d150139aafaa6d!2sThe%20photo%20Junction!5e0!3m2!1shi!2sin!4v1687570868280!5m2!1shi!2sin"
            width="0"
            height="0"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          />
        </div>
      </div>
      <div className=" w-full  bg-black text-white flex justify-around py-5  text-xs md:text-base">
        <div>copyright@thephotojuntion</div>
        <div className="">
          Site By :{" "}
          <span>
            {" "}
            <a href="https://www.linkedin.com/in/shubhamweb/">
              Shubham Chaudhari
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
