// "use client";
// import Image from "next/image";
// import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
// import { useState} from "react";

// export default function GalleryModel({clinicImages}) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isClose, setIsClose] = useState(true);

//   const nextSlide =(() => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % clinicImages.length);
//   });

//   const prevSlide = (() => {
//     setActiveIndex((prevIndex) => (prevIndex - 1 + clinicImages.length) % clinicImages.length);
//   })

//   return (
//     <>
//     {isClose &&
//     <div className="w-[54%]  fixed max-xl:w-full z-10  mx-auto  top-20 left-0 overflow-hidden">
//       <div
//         className="flex transition-transform duration-500 ease-in-out "
//         style={{
//           transform: `translateX(-${activeIndex * 100}%)`
//         }}
//       >
//         {clinicImages.map((image, index) => (
//           <div key={index} className="w-full flex-shrink-0 " >
//           <div  className="w-full" >
//             <Image
//               src={image}
//               alt="pic"
//               className="w-1/2 h-screen object-cover bg-secondary float-end"
//             />
//           </div>
//           <div className="w-1/2 h-screen bg-foreground opacity-75" onClick={()=>setIsClose(!isClose)}></div>
//           </div>
//         ))}
//       </div>

//       <button
//         className={`absolute ${activeIndex === 0 ? "text-red-700":'bg-black/50'  }  left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-background rounded-full`}
//         onClick={prevSlide}
//         disabled={activeIndex === 0}
//       >
//         <ArrowBigLeft className="w-6 h-6" />
//       </button>

//       <button
//         className={`absolute ${activeIndex === clinicImages.length - 1 ? "text-red-600":'bg-black/50'  }  right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center  text-background rounded-full`}
//         onClick={nextSlide}
//         disabled={activeIndex === clinicImages.length - 1}
//       >
//         <ArrowBigRight className="w-6 h-6" />
//       </button>
//     </div>
// }
//     </>
//   )
// }

// "use client";
// import Image from "next/image";
// import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
// import { useState } from "react";

// export default function GalleryModel({ clinicImages, setIsOpen }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % clinicImages.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + clinicImages.length) % clinicImages.length
//     );
//   };

//   return (
//         <div className="w-[54%]  fixed max-xl:w-full z-10  mx-auto  top-20 left-0 overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out "
//             style={{
//               transform: `translateX(-${activeIndex * 100}%)`,
//             }}
//           >
//             {clinicImages.map((image, index) => (
//               <div key={index} className="w-full flex-shrink-0 ">
//                 <div className="w-full">
//                   <Image
//                     src={image}
//                     alt="pic"
//                     className="w-1/2  h-screen object-cover bg-secondary float-end max-xl:relative  max-xl:right-[25%] max-xl:h-fit max-xl:top-48"
//                     style={{opacity:1}}
//                   />
//                 </div>
//                 <div
//                   className="w-1/2 h-screen bg-foreground opacity-75 max-xl:w-full"
//                   style={{backgroundColor: "rgba(0,0,0,0.5)"}}
//                   onClick={() => setIsOpen(false)}
//                 ></div>
//               </div>
//             ))}
//           </div>

//           <button
//             className={`absolute ${
//               activeIndex === 0 ? "text-red-700" : "bg-black/50"
//             }  left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-background rounded-full`}
//             onClick={prevSlide}
//             disabled={activeIndex === 0}
//           >
//             <ArrowBigLeft className="w-6 h-6" />
//           </button>

//           <button
//             className={`absolute ${
//               activeIndex === clinicImages.length - 1
//                 ? "text-red-600"
//                 : "bg-black/50"
//             }  right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center  text-background rounded-full`}
//             onClick={nextSlide}
//             disabled={activeIndex === clinicImages.length - 1}
//           >
//             <ArrowBigRight className="w-6 h-6" />
//           </button>
//         </div>
//   );
// }


// "use client";
// import Image from "next/image";
// import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
// import { useState } from "react";

// export default function GalleryModel({ clinicImages, setIsOpen }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const nextSlide = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % clinicImages.length);
//   };

//   const prevSlide = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + clinicImages.length) % clinicImages.length
//     );
//   };

//   return (
//         <div className="w-[54%]  fixed max-xl:w-full z-10  mx-auto  top-20 left-0 overflow-hidden">
//           <div
//             className="flex transition-transform duration-500 ease-in-out "
//             style={{
//               transform: `translateX(-${activeIndex * 100}%)`,
//             }}
//           >
//             {clinicImages.map((image, index) => (
//               <div key={index} className="w-full flex-shrink-0 ">
//                 <div className="w-full">
//                   <Image
//                     src={image}
//                     alt="pic"
//                     className="w-1/2  h-screen object-cover bg-secondary float-end max-xl:float-none max-xl:w-full max-xl:p-52 max-xl:bg-slate-400"
//                     style={{opacity:1}}
//                   />
//                 </div>
//                 <div
//                   className="w-1/2 h-screen bg-foreground opacity-75 max-xl:w-full bg-red-400"
//                   style={{backgroundColor: "rgba(0,0,0,0.5)"}}
//                   onClick={() => setIsOpen(false)}
//                 ></div>
//               </div>
//             ))}
//           </div>

//           <button
//             className={`absolute ${
//               activeIndex === 0 ? "text-red-700" : "bg-black/50"
//             }  left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black/50 text-background rounded-full`}
//             onClick={prevSlide}
//             disabled={activeIndex === 0}
//           >
//             <ArrowBigLeft className="w-6 h-6" />
//           </button>

//           <button
//             className={`absolute ${
//               activeIndex === clinicImages.length - 1
//                 ? "text-red-600"
//                 : "bg-black/50"
//             }  right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center  text-background rounded-full`}
//             onClick={nextSlide}
//             disabled={activeIndex === clinicImages.length - 1}
//           >
//             <ArrowBigRight className="w-6 h-6" />
//           </button>
//         </div>
//   );
// }


"use client";

import Image from "next/image";
import { ArrowBigLeft, ArrowBigRight, X } from 'lucide-react';
import { useState } from "react";

export default function GalleryModel({ clinicImages, setIsOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % clinicImages.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + clinicImages.length) % clinicImages.length
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <button className="bg-primary px-4 py-2 absolute top-5 left-2 rounded-lg z-50" onClick={() => setIsOpen(false)}><X size={30} className="text-background"/></button>
      <div className="relative w-full max-w-4xl" >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {clinicImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative w-full h-[80vh]">
                <Image
                  src={image}
                  alt={`Clinic image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="z-10"
                />
                {/* <div
                  className="absolute inset-0 z-0 bg-black bg-opacity-50"
      
                ></div> */}
              </div>
            </div>
          ))}
        </div>

        <button
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full z-20 ${
            activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={prevSlide}
          disabled={activeIndex === 0}
        >
          <ArrowBigLeft className="w-6 h-6" />
        </button>

        <button
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full z-20 ${
            activeIndex === clinicImages.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextSlide}
          disabled={activeIndex === clinicImages.length - 1}
        >
          <ArrowBigRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

