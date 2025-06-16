import { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { BiCategory } from "react-icons/bi";
import { FaHeadset } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Offers", link: "/#" },
  { id: 3, name: "Daily Deals", link: "/#" },
  { id: 4, name: "Flash Sales", link: "/#" },
];

const DropdownLinks = [
  { id: 1, name: "Food", link: "/#" },
  { id: 2, name: "Cleaning Supplies", link: "/#" },
  { id: 3, name: "Personal Care", link: "/#" },
  { id: 4, name: "Health & Wellness", link: "/#" },
  { id: 5, name: "Baby Care", link: "/#" },
  { id: 6, name: "Home & Kitchen", link: "/#" },
];

// // const NestedDropdown = [
// //   { id: 1, name: "Fruits & Vegetables", link: "/#" },
// //   { id: 2, name: "Fruits & Vegetables", link: "/#" },
// //   { id: 3, name: "Fruits & Vegetables", link: "/#" },
// //   { id: 4, name: "Fruits & Vegetables", link: "/#" },
// //   { id: 5, name: "Fruits & Vegetables", link: "/#" },
// // ];

// // const NextNested = [
// //   { id: 1, name: "Food", link: "/#" },
// //   { id: 1, name: "Food", link: "/#" },
// //   { id: 1, name: "Food", link: "/#" },
// //   { id: 1, name: "Food", link: "/#" },
// ]


function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleBrowseClick = () => {
    console.log("Browse Category clicked!");

    setShowDropdown(!showDropdown); 
  };

  const handleDropdownClick = (itemName) => {
    console.log(`You clicked: ${itemName}`);
    setShowDropdown(false); 
  };

  const [count,setCount ] = useState(0);


  return (
    <div className='container flex-wrap'>
      <div className='flex  mt-4 mb-4 pt-4 border-t-2 border-gray-300 flex-wrap'>

      
        <div className='relative'>
          <button
            onClick={handleBrowseClick}
            className='flex  items-center gap-[10px] py-2 bg-slate-900 text-white w-50 h-50 rounded text-base'
          >
            <BiCategory className='w-6' />
            Browse Category
            <FaCaretDown className={`pr-2 mr-2 transition-all duration-200 ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

       
          {showDropdown && (
            <div className='absolute mt-2 z-[9999] w-[180px] rounded-md bg-white shadow-lg'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownClick(data.name);
                      }}
                      className='block w-full p-2 text-start hover:text-green-500 hover:bg-gray-100 border-b last:border-none'
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        
        <ul className="sm:flex items-center gap-4 ml-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className='flex px-4 hover:text-green-500 duration-200'>
                {data.name}
              </a>
            </li>
          ))}
        </ul>

    
        <div className='flex gap-4 ml-auto'>
          <button className='flex gap-1 items-center text-blue-600'
              onClick = {() => alert("Contact Us")}>
        
            <FaHeadset /> +8801333384628
          </button>

          <button 
  onClick={() => setCount(count + 1)} 
  className='bg-green-500 rounded flex items-center justify-between px-4 text-white gap-1 flex-wrap'
>
  <FaBagShopping /> My Cart ({count})
</button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
