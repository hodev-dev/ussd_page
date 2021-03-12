import React, { useEffect } from 'react'

const Success = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

  }, [])

  return (
    <div className={"flex items-center justify-center w-full h-screen bg-gradient-to-tr from-green-800 to-green-300"}>
      <div className={"flex flex-col items-center justify-center w-full text-white bg-white rounded-lg shadow-lg md:w-6/12 h-80"}>
        <h1 className={"text-4xl text-green-600"}>پرداخت موفق</h1>
        <h1 className={"mt-5 text-xl text-black"}>جهت تکمیل فرایند پرداخت شماره خود را وارد نمایید</h1>
        <input className={"w-full h-12 mt-5 text-2xl text-center text-black border-2 border-gray-300 rounded-lg outline-none md:w-10/12"} type="text" placeholder={"شماره موبایل"} />
        <a className={"flex items-center justify-center w-10/12 h-8 mt-5 text-center text-white bg-blue-600 rounded-lg outline-none"}>ارسال پیامک تایید</a>
      </div>
    </div>
  )
}

export default Success
