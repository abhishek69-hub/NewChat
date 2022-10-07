import React from 'react'

export default function Container() {
  return (
    <div name="container" className='h-screen w-full  flex flex-col item-center justify-center'>
      <div className=" mx-auto border border-black h-2/3 my-10 w-4/5 rounded-lg bg-indigo-50 p-4 ">
              <div className='container overflow-auto w-50 h-5/6 p-4'>
                  <div className="message left "><span> hello man </span></div>
                  <div className="message right"><span>yes brother. whats up ?</span></div>

              </div>
              <div className='m-4'>
              <form action="#" id="send-container" className='inline-block mx-auto item-center h w-full flex justify-center item-center justify-around'>
                  <input type="text" id="messageInp" className='w-2/3 h-10 rounded-lg hover:border hover:border-red-300 p-2' />
                  <button className='border w-[80px] rounded-lg bg-blue-300 hover:bg-blue-600 hover:scale-95 duration-50 '><span>Send</span></button>
              </form>
              </div>
              
          
      </div>
      
    </div>
  )
}
