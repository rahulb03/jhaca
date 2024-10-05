// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import image from "../../public/assets/img/bg/7.png";
// const Breadcrumb = ({ title }) => {
//   return (
//     <>
//       {/* ================ Breadcrumb Start ================*/}
//       <div
//         className='breadcrumb-area bg-cover'
//         style={{ backgroundImage: 'url("")' }}
//       > 
//       <Image src={image} alt="img"  />
//         <div className='container'>
//           <div className='breadcrumb-inner'>
//             <div className='row justify-content-center'>
//               <div className='col-lg-6'>
//                 <h2 className='page-title'>{title}</h2>
//               </div>
//               <div className='col-lg-6 text-lg-end'>
//                 <ul className='page-list'>
//                   <li>
//                     <Link href='/index-1'>Home</Link>
//                   </li>
//                   {"  "}/ <li>{title}</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ================ Breadcrumb End ================*/}
//     </>
//   );
// };

// export default Breadcrumb;


import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../public/assets/img/bg/7.png"; // Assuming this is the correct path

const Breadcrumb = ({ title }) => {
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className='breadcrumb-area bg-cover'
        style={{ backgroundImage: `url(${image.src})` , height:'50px'}}  // Use image.src to reference the image path
      >
        <div className='container'>
          <div className='breadcrumb-inner'>
            <div className='row justify-content-center'>
              <div className='col-lg-6'>
                <h2 className='page-title'>{title}</h2>
              </div>
              <div className='col-lg-6 text-lg-end'>
                <ul className='page-list'>
                  <li>
                    <Link href='/index-1'>Home</Link>
                  </li>
                  {"  "}/ <li>{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumb;
