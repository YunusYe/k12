import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

{
  /*
  */
}

const footer = () => {
  return (
    <div>
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      
      <div>
        <div className="flex justify-between md:w-[75%] my-6">
         

          <a href="https://www.facebook.com/vakifk12/">
            <FaFacebookSquare size={30} />
            </a>
          
          <a href="https://www.linkedin.com/in/vakifk12/">
            <FaLinkedin size={30} />
            </a>
          
          <a href="https://twitter.com/vakifk12">
            <FaTwitterSquare size={30} />
            </a>
          
          <a href="https://www.youtube.com/channel/UCUa7-2Olwr5iF7RSAd4s4TA">
            <FaYoutubeSquare size={30} />
          </a>


        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between mt-6">

        <div>
          <h6 className="font-medium text-gray-400"><Link to ="/MarkaKullanımı">Marka Kullanımı</Link></h6>
        </div>
        <div>
          <h6 className="font-medium text-gray-400"><Link to ="/Kvkk">Kvkk</Link></h6>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">info@k12.org.tr</h6>
        </div>
       
      </div>

    </div>

        <div className="flex mb-6 m-auto justify-center text-white ">
          <p className="text-sm">© Copyright 2023 www.k12.org.tr | Tüm hakları Vakıf k12'ye aittir</p>
        </div>

    </div>
  );
};

export default footer;
