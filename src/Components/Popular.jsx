import React, { useRef } from "react";


const popular =[
    {
        name: " Johnson  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/35/conversions/johnson-cover.png",
    },
    {
        name: " Dove  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/28/conversions/dove-cover.png",
    },
    {
        name: " Great Value ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/29/conversions/great_value-cover.png",
    },
    {
        name: " Nature Value ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/30/conversions/nature_valley-cover.png"},
    {
        name: " Suave ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/33/conversions/suave-cover.png",
    },
    {
        name: " Pampers  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/32/conversions/pampers-cover.png",
    },
    {
        name: " Purell ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/34/conversions/purell-cover.png",
    },
    {
        name: " Oxi Clean ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/31/conversions/oxi_clean-cover.png",
    },
    {
        name: " Great Value  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/29/conversions/great_value-cover.png",
    },
    {
        name: " Dove  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/28/conversions/dove-cover.png",
    },
];

const PopularBrands = () => {
  const scrollRef = useRef(null);



  return (
    <div className="relative w-full px-4 py-6"> 
      <h1 className="text-4xl font-bold text-justify mt-1"> Popular Brands</h1>
      <div className="relative mt-10">
        
        <div ref={scrollRef} 
        className="flex overflow-x-auto gap-6 px-10 scrollbar-hide">
{popular.map((popular, index)=>(
  <button key={index} 
  className="flex-shrink-0 w-48 h-50 bg-slate-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center p-4 group  mb-10 mt-4 ">
    <img src={popular.image} alt={popular.name} 
    className="h-8 mb-8 mt-2 object-contain   "/>
    <p className="text-md font-md text-gray-800 group-hover:text-green-500">
    {popular.name}
    </p>
     </button>
))}
        </div>
       

      </div>
    </div> 
  );

};

export default PopularBrands;