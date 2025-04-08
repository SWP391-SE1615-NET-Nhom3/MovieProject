import React from 'react'
import Image from 'next/image';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function ListMovie(props: {title: string}) {
    
    function SampleNextArrow(props: React.HTMLAttributes<HTMLDivElement>) {
        const { className, style, onClick } = props;
        return (
          <div  
            className={className}
            style={{ ...style, display: "block",fontSize:'50px',color:'white' }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props: React.HTMLAttributes<HTMLDivElement>) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
          />
        );
      }
      const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1200, // Dưới 1200px
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 992, // Dưới 992px
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768, // Dưới 768px (tablet)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 576, // Dưới 576px (mobile)
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const movies = Array.from({ length: 8 }, (_, i) => i + 1);
  return (
    <div className="w-full h-full">
    <div className="mx-auto w-[80%]  mt-[4%]" >   
  <h2 className="text-3xl font-bold mb-4 ml-[8%] title_categories">{props.title}</h2>
  <div className="flex justify-center">
  <Slider {...settings}>
    {movies.map((movie,index) => (
      <a key={index} className="p-2 cursor-pointer" href="/detail" style={{margin:'0 50px'}}>                     
         <div
             className="w-full flex justify-center align-center items-center flex-col rounded-lg shadow-lg bg-[#1f1f1f] hover:scale-105 transition-transform duration-300"
           >
             <Image width={200} height={240} alt="#" src="/imgs/spider.jpg" className="w-full h-full"  />
             <div className="title_movie title_categories w-full my-2 text-xl font-bold">Dr. Stone: Science Future</div>
             <div className="content_movie flex justify-between w-full mb-3">
              <div className="season text-white">Season 4</div>
              <div className="status text-white">Hoàn thành</div>
             </div>
           </div>
      </a>
    ))}
  </Slider>
  </div>
  </div>
  </div>
  )
}
