


import React from 'react';
import { GoHeartFill } from "react-icons/go";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentLine, RiCustomerService2Fill } from "react-icons/ri";

const infoItems = [
  {
    icon: <GoHeartFill className='text-3xl text-green-500 mb-3' />,
    title: 'Quality & Savings',
    desc: 'Comprehensive quality control and affordable prices',
  },
  {
    icon: <CiDeliveryTruck className='text-3xl text-green-500 mb-3' />,
    title: 'Fast Delivery',
    desc: 'Fast and convenient door to door delivery',
  },
  {
    icon: <RiSecurePaymentLine className='text-3xl text-green-500 mb-3' />,
    title: 'Secure Payment',
    desc: 'Different secure payment methods',
  },
  {
    icon: <RiCustomerService2Fill className='text-3xl text-green-500 mb-3' />,
    title: 'Professional Service',
    desc: 'Efficient customer support from passionate team',
  },
];

const Info = () => {
  return (
    <div className='container mx-auto pt-10 pb-12 border-t-2'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
        {infoItems.map((item, index) => (
          <div key={index} className='text-left max-w-xs mx-auto '>
            {item.icon}
            <h2 className='font-bold text-lg mb-1'>{item.title}</h2>
            <p className='text-sm text-gray-600'>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
