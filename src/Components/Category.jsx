import React, { useRef } from "react";


const categories =[
    {
        name: " Food  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/36/conversions/food-thumb.png",
    },
    {
        name: " Chicken  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/42/conversions/chicken-thumb.png",
    },
    {
        name: " Baby-Care ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/90/conversions/baby_care-thumb.png",
    },
    {
        name: " Fresh Fruits ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/39/conversions/fresh_fruits-thumb.png"},
    {
        name: "Women’s_perfume   ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/73/conversions/women’s_perfume-thumb.png",
    },
    {
        name: " Personal-Care  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/67/conversions/personal_care-thumb.png",
    },
    {
        name: " Candy_&_chocolates ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/50/conversions/candy_&_chocolates-thumb.png",
    },
    {
        name: " Soft-Drinks  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/56/conversions/soft_drinks-thumb.png",
    },
    {
        name: " Tomato Sause  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/46/conversions/tomato_sauce-thumb.png",
    },
    {
        name: " Beef  ",
        image:"https://d91ztyz4qy326.cloudfront.net/storeking/43/conversions/beef-thumb.png",
    },
];

const CategoriesSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if(!scrollRef.current) return ;
    const amount = 300;
    scrollRef.current.scrollBy({
      left: direction === "right" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full px-4 py-6"> 
      <h1 className="text-4xl font-bold text-justify mt-1"> Broese by Categories</h1>
      <div className="relative mt-10">
        <button
         onClick = {() => scroll("left")}
          className="group absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-lime-50 shadow-md rounded-full p-2 hover:bg-green-500">
          <svg className="w-6 h-6 z-20  group-hover:text-white text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div ref={scrollRef} 
        className="flex overflow-x-auto gap-6 px-10 scrollbar-hide">
{categories.map((cat, index)=>(
  <div key={index} 
  className="flex-shrink-0 w-48 h-50 bg-slate-100 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center p-4 hover:shadow-md transition hover:bg-white group ">
    <img src={cat.image} alt={cat.name} 
    className="h-16 object-contain mb-4  group-hover:rotate-3"/>
    <p className="text-lg font-semibold text-gray-800 group-hover:text-green-500">
    {cat.name}
    </p>
     </div>
))}
        </div>
        <button onClick={() => scroll("right")}
          className=" group absolute right-0 top-1/2 -translate-y-1/2  bg-lime-50 shadow-md rounded-full p-2 hover:bg-green-500 "> 
          <svg className="w-6 h-6 group-hover:text-white text-green-500 " fill="none"  stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24  " >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          </button>

      </div>
    </div> 
  );

};

export default CategoriesSlider;