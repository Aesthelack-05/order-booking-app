import React from 'react'
import Img1 from '../assets/browse1.png'
import Img2 from '../assets/browse2.png'
import Img3 from '../assets/browse3.png'

function Browse() {
  return (
    
      <div className='container items-center'>

<div className=' pt-8 ml-4 mr-8 w-full flex'>
 <button> <img src={Img1}  className="rounded-md m-2 hover:shadow-md  p-1 " alt="" /></button>
 <button>  <img src={Img2} className="rounded-md m-2 hover:shadow-md p-1 "  alt="" /></button>
 <button> <img src={Img3} className="rounded-md m-2 hover:shadow-md p-1"  alt="" /></button>
</div>


      </div>
    
  )
}

export default Browse