import React from 'react'
import WrappedButton from '../../components/Button'
import HomeLayout from '../../layout/HomeLayout'

const HomePage = () => {
  return (
    <HomeLayout>
      <div className='flex m-auto w-[90%] h-[100%] mb-14 mt-8 pb-10'>
        <div className='w-[95%] mt-14'>
          <h1 className="text-[var(--c-dark-1)] lg:text-5xl md:text-2xl text-xl md:w-[60%] font-bold mb-6 text-center md:text-start px-2 md:px-0 ">Lorem, ipsum dolor sit amet consectetur</h1>
              <p className="text-sm md:w-[60%] w-[100%] text-center md:text-start px-3 md:px-0 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliqua. Ut enim ad minim veniam, quis nostrud 
              ut aliqua. Ut enim ad minim veniam, quis nostrud 
              </p>
              <div className='md:flex md:gap-4 md:ml-0 ml-4 my-8'>
              <WrappedButton
                value="Call to Action" 
                onClick={() => alert('Button clicked')}
                wrapperClass="bg-black py-2 text-[var(--c-white-2)] rounded-md px-4 text-center mb-5 md:mb-0"
              />
              <WrappedButton
                value="See Workspace" 
                onClick={() => alert('Button clicked')}
                wrapperClass="bg-var(--c-white-2) py-2 px-4 text-black rounded-md border-2 border-black text-center"
              />
              </div>
        </div>
        <div className='w-[70%] relative mt-6 hidden md:block'>
          <div className='bg-[var(--c-img-bg-1)] xl:w-[56%] md:w-[85%] h-[100%] m-auto my-8 '>
            <div className='bg-[var(--c-img-bg-2)] xl:w-[30%] md:w-[70%] h-[50%]  absolute bottom-[53%] xl:left-[55%] md:left-[35%]'>
            </div>
          </div>
        </div>
      </div> 

      <div className="md:flex md:justify-between w-[90%] m-auto mb-14 py-8">
        <div className="lg:w-[20%] w-[100%]">
          <h4 className='text-[var(--c-dark-10)] font-bold mb-4'>Header Text</h4>
          <p className='text-[var(--text-bg)] mb-4 md:mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores error animi nihil in, reiciendis quam quisquam quibusdam adipisci? Molestiae atque officia magnam reiciendis porro esse nam temporibus ex culpa.</p>
          
        </div>
        <div className="bg-[var(--c-img-bg-1)] md:w-[30%] w-[100%] h-[400px] mb-5 md:mb-0 lg:block md:hidden">
          
        </div>
        <div className="lg:w-[20%] w-[100%] flex flex-wrap content-end ... ">
          <h4 className='text-[var(--c-dark-10)] font-bold mb-4'>Header Text</h4>
          <p className='text-[var(--text-bg)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum maiores error animi nihil in, reiciendis quam quisquam quibusdam adipisci? Molestiae atque officia magnam reiciendis porro esse nam temporibus ex culpa.</p>
        </div>
      </div>
    </HomeLayout>
  )
}

export default HomePage