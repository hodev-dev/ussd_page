import React from 'react'

const Fail = () => {
  return (
    <div className={"flex items-center justify-center w-full h-screen bg-gradient-to-tr from-red-800 to-red-300"}>
      <div className={"flex flex-col items-center justify-center w-full text-white bg-white rounded-lg shadow-lg md:w-6/12 h-80"}>
        <h1 className={"text-4xl text-red-600"}>پرداخت ناموفق</h1>
        <h1 className={"mt-5 text-base text-black"}>پرداخت انجام نشد. اطفا کمی دیگر پرداخت انحام دهید</h1>
      </div>
    </div>
  )
}

export default Fail
