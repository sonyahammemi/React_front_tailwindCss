import React from 'react'

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto py-12 grid md:grid-cols-3 gap-6 " >
        {/*Card */}
        <div className="rounded-xl relative" >
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-4" >Sun's Out, BOGO's Out</p>
                <p className='px-2' >Through 8/26</p>
                <button className="border-white bg-white text-black mw-2 absolute bottom-4" >Order Now</button>
            </div>  
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
            src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=pexels-pixabay-461198.jpg&fm=jpg' alt='/' />          
        </div>
        {/*Card */}
        <div className="rounded-xl relative" >
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-4" >New Restaurants</p>
                <p className='px-2' >Added Daily</p>
                <button className="border-white bg-white text-black mw-2 absolute bottom-4" >Order Now</button>
            </div>  
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
            src='https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?cs=srgb&dl=pexels-jan-n-g-u-y-e-n-%F0%9F%8D%81-699953.jpg&fm=jpg' alt='/' />          
        </div>
        {/*Card */}
        <div className="rounded-xl relative" >
            {/* Overlay */}
            <div className="absolute w-full h-full bg-black/50 rounded-xl text-white" >
                <p className="font-bold text-2xl px-2 pt-4" >We Deliver Desserts Too</p>
                <p className='px-2' >Tasty Treats</p>
                <button className="border-white bg-white text-black mw-2 absolute bottom-4" >Order Now</button>
            </div>  
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl '
            src='https://images.pexels.com/photos/2205270/pexels-photo-2205270.jpeg?cs=srgb&dl=pexels-donald-tong-2205270.jpg&fm=jpg' alt='/' />          
        </div>
        
    </div>
  )
}

export default HeadlineCards