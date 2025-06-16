import React from "react";
import { productData } from "../page/utils/Products.js";
import { IoBagAdd } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

import Img1 from '../assets/banner.png'
 

 function Card() {
    
    return ( 
            <div className="mt-14 mb-12  ">
        <div className='container'> 
              {/* Header section. */}
              <p className='text-justify  mb-10 max-w-[10000px] '>
        <h1 className='text-4xl font-bold'>Most Popular</h1>
        </p>
         {/* Body section. */}
         <div className="container"> 
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 lg:grid-col-5 place-items-center gap-5  '>
          {/* card section. */}
          {
            productData.map((data) => (
                <div key={data.id} className='space-y-3  rounded-lg shadow-md hover:shadow-green-200'>

                    <div className=" container relative "> 
                    <p className=' absolute flex top-6 left-6 z-10 text-sm text-white bg-slate-900 w-20  rounded-full pl-2 cursor-auto  '>{data.text}</p>
                   <button className=" absolute top-6 right-5 z-10 bg-slate-100 rounded-full size-6 px-1 "><GoHeart /> </button> 
                    <img src={data.img}  alt=""  class=" w-full  p-2  rounded-2xl transition-all duration-300  hover:rotate-2 "/>
                    <button  className="bg-green-500 text-white text-sm font-medium px-2 rounded-2xl hover:bg-green-700 h-7 flex items-center p-1 absolute bottom-4 right-3 mr-1 gap-1 ">
                    <IoBagAdd />  Add
            </button>
                    </div>


        <div className='text-left pl-4 pb-4 pt-2 '>
            <h3 className='font-semibold'>
                {data.title}
            </h3>
            <p className='text-sm pt-2'>{data.description}</p>
        
            <div className="flex items-center pt-2 ">
            <p className='text-lg text-green-500 ' >{data.price }</p>
            <p className='text-sm line-through pl-2 '>{data.discount}</p>
                     </div>       
             </div>

                </div> 
            )

        )
         
          }

          </div>
          
          <div className="container ">
            <a className="w-full rounded-3xl">
            <img src={Img1} className="w-full rounded-3xl cursor-pointer  pt-14  " alt="" />
            </a>
            </div>
          

            </div>

             </div>
        
            </div>
            );
        }

        export default Card;




//  function Card() {
//    return (
//      <>
//        <h1 className="text-lg font-bold mb-2">Most Popular</h1>
//        <div className="flex justify-between items-center flex-wrap">
//          { popularProduct.map((item, index) => (
//            <div
//              className=" my-1 border border-slate-100 p2 rounded-md bg-white w-[19%]"
//              key={index}
//            >
//              <img src={item.img} className="w-24" alt="" srcset="" />
//              <p className="text-sm font-medium text-gray-600">{item.title}</p>
//              <p className="text-sm font-medium text-gray-600">{item.text}</p>
//              <div>
//                <span className="text-green-500 font-bold">{item.price}</span>
//                <span className="ml-2 line-through font-bold">{item.total}</span>
//              </div>
//            </div>
//          ))}
//        </div>
//      </>
//    );
//  }
 
//  export default Card;




