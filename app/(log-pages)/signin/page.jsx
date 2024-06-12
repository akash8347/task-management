// "use client"
// import Image from 'next/image'
// import React from 'react'
// import { signIn } from 'next-auth/react'
// import { FaGoogle } from "react-icons/fa";

// const Signin = () => {
//   return (
//     <div className=" ">
//       <div className="container min-h-screen w-full md:w-full md:flex-row flex flex-col">
        
//         <div className="child1 bg-green-300 w-full md:w-1/2 flex flex-col items-center">
//           <div className="w-[180px] mt-10">
//             <Image src={"/task-img.svg"} width={256} height={256} alt="Task Image"/>
//           </div>
//           <div className="text text-center">
//             <div className="text-2xl mb-5">
//               Welcome to the Fast-Task App
//             </div>
//             <p className="">
//               A modern task management app that simplifies your daily tasks
//             </p>
//           </div>
//         </div>

//         <div className="child2 flex  justify-center bg-yellow-300 items-center w-full md:w-1/2">
//           <button
//             className="rounded-md  border-blue-500 border-2 flex items-center min-w-52 p-2 mt-10 mb-10 md:mt-0  flex-grow-0 flex-shrink-0"
//             onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
//           >
//             <FaGoogle /> Continue with Google
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;


"use client"
import Image from 'next/image'
import React from 'react'
import { signIn } from 'next-auth/react'
import { FaGoogle } from "react-icons/fa";
import Footer from '@/myComponents/Footer';

const Signin = () => {
  return (
    <>
    <div className="min-h-screen  flex items-center ">
      <div className="container  w-full   flex flex-col">
        
        <div className="child1  w-full  flex flex-col items-center">
          <div className="w-[180px] mt-10">
            <Image src={"/task-img.svg"} width={256} height={256} alt="Task Image"/>
          </div>
          <div className="text text-center">
            <div className="text-2xl mb-5">
              Welcome to the Fast-Task App
            </div>
            <p className="">
              A modern task management app that simplifies your daily tasks
            </p>
          </div>
        </div>

        <div className="child2 flex  justify-center  items-center w-full ">
          <button
            className="rounded-md text-blue-500  border-blue-500 border-2 flex items-center min-w-52 p-2 mt-10 mb-10   flex-grow-0 flex-shrink-0
            hover:bg-blue-500 hover:text-white  transition-all
            "
            onClick={() => signIn("google", { callbackUrl: "/" })}
          >
            <FaGoogle /> <span className='ml-3'>Continue with Google</span>
          </button>
        </div>
       
      </div>
      
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default Signin;
