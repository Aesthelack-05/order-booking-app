import React, { useRef } from "react";
import { CiHeart } from "react-icons/ci";
import { IoBagAddSharp } from "react-icons/io5";
const trending =[
    {
            name:" Chicken_Breast  ",
            image:" https://d91ztyz4qy326.cloudfront.net/storeking/220/conversions/chicken_breast_tenderloins-cover.png " ,
          
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
          
        },
    {
            name:" Liquid_Dish_Soap  ",
            image:"https://d91ztyz4qy326.cloudfront.net/storeking/613/conversions/antibacterial_liquid_dish_soap-cover.png  ",
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
           
        },
    {
            name:" Fruit_Adventure_Mints  ",
            image:"https://d91ztyz4qy326.cloudfront.net/storeking/472/conversions/tic_tac_fruit_adventure_mints-cover.png  ",
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
           
        },
    {
            name:"Rainbow_Trout  ",
            image:" https://d91ztyz4qy326.cloudfront.net/storeking/271/conversions/rainbow_trout-cover.png " ,
        
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
           
        },
    {
            name:"Moisturizing_Lotion  ",
            image:" https://d91ztyz4qy326.cloudfront.net/storeking/1255/conversions/moisturizing_bedtime_lotion-cover.png " ,
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
            
        },
    {
            name:"Beef_Meat  ",
            image:" https://d91ztyz4qy326.cloudfront.net/storeking/238/conversions/beef_meat-cover.png  " ,
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
            
        },
    {
            name:"High_Endurance_Mens  ",
            image:"https://d91ztyz4qy326.cloudfront.net/storeking/922/conversions/high_endurance_mens_3-in-1-cover.png  " ,
            title:"  ",
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
            
        },
    {
            name:"Chicken_Breast_Tender  ",
            image:" https://d91ztyz4qy326.cloudfront.net/storeking/220/conversions/chicken_breast_tenderloins-cover.png  " ,
            title:"  ",
            price:"$144.500",
            discount:"$170.000",
            description:"Gram",
            
        },
    {
            name:" Overnight_Diapers ",
            image:" https://d91ztyz4qy326.cloudfront.net/storeking/1198/conversions/overnight_diapers_size_6-cover.png  " ,
          
            price:"$144.500",
            discount:"$170.000",
            description:"Kg",
           
        },
];

const TrendingItems = () => {
  const scrollRef = useRef(null);



  return (
    <div className="relative w-full px-4 py-6"> 
      <h1 className="text-4xl font-bold text-justify mt-1">Trending Items</h1>
      <div className="relative mt-10">
        
        <div ref={scrollRef} 
        className="flex overflow-x-auto gap-6 px-10 scrollbar-hide">
{trending.map((trending, index) => (
  <button key={index} 
  className="flex-shrink-0 w-48 h-80 bg-white shadow-md rounded-2xl  flex flex-col items-center justify-center text-center p-4   mb-10 mt-4 group relative hover:shadow-lg ">
    <button className=" bg-white rounded-full text-black text-xl absolute z-10 right-4 top-10 "><CiHeart /></button>

    <img src={trending.image} alt={trending.name} 
    className="h-34 mb-8 mt-2 object-contain  group-hover:rotate-3 rounded-md"/>
    <button className="bg-green-500 rounded-full  w-16 h-6 flex items-center gap-1 pl-2 pr-2 hover:bg-green-800 absolute right-4 bottom-28 text-white" ><IoBagAddSharp /> Add</button>

    <div className="container">
        <div className="text-left pt-4">
        <p className="text-sm font-md text-black  ">
    {trending.name}
    </p>
    <p className='text-sm pt-1'>{trending.description}</p>
    <div className="flex text-left pt-2 ">
            <p className='text-sm text-green-500 ' >{trending.price }</p>
            <p className='text-sm line-through pl-2 '>{trending.discount}</p>
                     </div> 
                     </div>
                     </div> 
     </button>
    
     
)
)}
        </div>
       

      </div>
    </div> 
  );

};

export default TrendingItems;