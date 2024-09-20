// 'use client'
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast, Toaster } from 'react-hot-toast';
// import { Address, Email_id, Phone_number , IframeSrc } from '@/Config/config';
// const ContactMain = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     // Please See Documentation for more information
//     emailjs
//       .sendForm(
//         '**********', //YOUR_SERVICE_ID
//         '**********', //YOUR_TEMPLATE_ID
//         form.current,
//         '**********', //YOUR_PUBLIC_KEY
//       )
//       .then(
//         (result) => {
//           if (result.text === 'OK') {
//             toast.success('Massage Sent Successfully!');
//             form.current[0].value = '';
//             form.current[1].value = '';
//             form.current[2].value = '';
//             form.current[3].value = '';
//           }
//         },
//         (error) => {
//           if (error.text !== 'OK') {
//             toast.success('Massage Not Sent!');
//           }
//         },
//       );
//   };
//   return (
//     <>
//       {/* ================= Contact Main start =================*/}
//       <Toaster position="bottom-center" reverseOrder={false} />
//       <>
//         {/* contact area start */}
//         <div className="contact-area pd-top-120 pd-bottom-120">
//           <div className="container">
//             <div className="contact-page-inner bg-gray">
//               <div className="section-title mb-4 pb-2">
//                 <h2 className="title">Direct contact us? </h2>
//                 <p className="content mb-0">
//                   For your car we will do everything advice, repairs and
//                   maintenance. We are the some preferred choice by many car
//                   owners because our experience and knowledge is selfe
//                   vident.For your car we will do som everything.
//                 </p>
//               </div>
//               <form ref={form} onSubmit={sendEmail}>
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="single-input-inner">
//                       <input
//                         id="name"
//                         name="user_name"
//                         type="text"
//                         placeholder="Enter Your Name."
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="single-input-inner">
//                       <input
//                         id="email"
//                         name="user_email"
//                         type="email"
//                         placeholder="Enter Your Email."
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-12">
//                     <div className="single-input-inner">
//                       <input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         placeholder="Enter Your Subject."
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12">
//                     <div className="single-input-inner">
//                       <textarea
//                         name="message"
//                         id="massage"
//                         cols="1"
//                         rows="5"
//                         placeholder="Enter Your Massage ..."
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12 text-center">
//                     <button
//                       type="submit"
//                       className="btn btn-base border-radius-5"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         {/* contact area end */}
//         {/* contact list start */}
//         <div className="contact-page-list">
//           <div className="container">
//             <div className="row justify-content-center">
//               <div className="col-lg-4 col-md-6">
//                 <div className="media single-contact-list">
//                   <div className="media-left">
//                     <img src="assets/img/icon/13.svg" alt="img" />
//                   </div>
//                   <div className="media-body">
//                     <h5>Contacts us</h5>
//                     <h6>{Phone_number}</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <div className="media single-contact-list">
//                   <div className="media-left">
//                     <img src="assets/img/icon/14.svg" alt="img" />
//                   </div>
//                   <div className="media-body">
//                     <h5>Your Email</h5>
//                     <h6>{Email_id}</h6>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 col-md-6">
//                 <div className="media single-contact-list">
//                   <div className="media-left">
//                     <img src="assets/img/icon/15.svg" alt="img" />
//                   </div>
//                   <div className="media-body">
//                     <h5>Location</h5>
//                     <h6>{Address}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* contact list start */}
//         {/* map start */}
//         <div className="contact-g-map">
//           <iframe
//             src={IframeSrc}
//             title="new title"
//           />
//         </div>
//         {/* map end */}
//       </>

//       {/* ================= Contact Main End =================*/}
//     </>
//   );
// };

// export default ContactMain;



// 'use client'
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast, Toaster } from 'react-hot-toast';
// import { Address, Email_id, Phone_number, IframeSrc } from '@/Config/config';

// const ContactMain = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         '', // Replace with your service ID
//         'YOUR_TEMPLATE_ID', // Replace with your template ID
//         form.current,
//         'YOUR_PUBLIC_KEY', // Replace with your public key
//       )
//       .then(
//         (result) => {
//           if (result.text === 'OK') {
//             toast.success('Message Sent Successfully!');
//             form.current.reset(); // Reset the form
//           }
//         },
//         (error) => {
//           toast.error('Message Not Sent!');
//         }
//       );
//   };

//   return (
//     <>
//       <Toaster position="bottom-center" reverseOrder={false} />
//       <div className="contact-area pd-top-120 pd-bottom-120">
//         <div className="container">
//           <div className="contact-page-inner bg-gray">
//             <div className="section-title mb-4 pb-2">
//               <h2 className="title">Direct contact us?</h2>
//               <p className="content mb-0">
//                 For your car we will do everything advice, repairs, and maintenance. We are the preferred choice by many car owners because our experience and knowledge are self-evident.
//               </p>
//             </div>
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="name"
//                       name="user_name"
//                       type="text"
//                       placeholder="Enter Your Name."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="email"
//                       name="user_email"
//                       type="email"
//                       placeholder="Enter Your Email."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="pan"
//                       name="user_pan"
//                       type="text"
//                       placeholder="Enter Your PAN Number."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="city"
//                       name="user_city"
//                       type="text"
//                       placeholder="Enter Your City."
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <div className="single-input-inner">
//                     <textarea
//                       name="message"
//                       id="message"
//                       cols="1"
//                       rows="5"
//                       placeholder="Enter Your Message..."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 text-center">
//                   <button
//                     type="submit"
//                     className="btn btn-base border-radius-5"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="contact-page-list">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-6">
//               <div className="media single-contact-list">
//                 <div className="media-left">
//                   <img src="assets/img/icon/13.svg" alt="Contact Us" />
//                 </div>
//                 <div className="media-body">
//                   <h5>Contact Us</h5>
//                   <h6>{Phone_number}</h6>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="media single-contact-list">
//                 <div className="media-left">
//                   <img src="assets/img/icon/14.svg" alt="Your Email" />
//                 </div>
//                 <div className="media-body">
//                   <h5>Your Email</h5>
//                   <h6>{Email_id}</h6>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="media single-contact-list">
//                 <div className="media-left">
//                   <img src="assets/img/icon/15.svg" alt="Location" />
//                 </div>
//                 <div className="media-body">
//                   <h5>Location</h5>
//                   <h6>{Address}</h6>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="contact-g-map">
//         <iframe
//           src={IframeSrc}
//           title="Map"
//         />
//       </div>
//     </>
//   );
// };

// export default ContactMain;


// 'use client';
// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast, Toaster } from 'react-hot-toast';
// import { Address, Email_id, Phone_number, IframeSrc } from '@/Config/config';

// const ContactMain = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         'service_sdx951d', // Replace with your service ID
//         'template_9fe4vtg', // Replace with your template ID
//         form.current,
//         '2ucmdjgMuwh4qLpX6', // Replace with your public key
//       )
//       .then(
//         (result) => {
//           if (result.text === 'OK') {
//             toast.success('Message Sent Successfully!');
//             form.current.reset(); // Reset the form
//           }
//         },
//         (error) => {
//           toast.error('Message Not Sent!');
//         }
//       );
//   };

//   return (
//     <>
//       <Toaster position="bottom-center" reverseOrder={false} />
//       <div className="contact-area pd-top-120 pd-bottom-120">
//         <div className="container">
//           <div className="contact-page-inner bg-gray">
//             <div className="section-title mb-4 pb-2">
//               <h2 className="title">Direct contact us?</h2>
//               <p className="content mb-0">
//                 For your car we will do everything advice, repairs, and maintenance. We are the preferred choice by many car owners because our experience and knowledge are self-evident.
//               </p>
//             </div>
//             <form ref={form} onSubmit={sendEmail}>
//               <div className="row">
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="name"
//                       name="from_name" // Updated to match the template variable
//                       type="text"
//                       placeholder="Enter Your Name."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="email"
//                       name="from_email" // Updated to match the template variable
//                       type="email"
//                       placeholder="Enter Your Email (optional)"
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="pan"
//                       name="user_pan" // Updated to match the template variable
//                       type="text"
//                       placeholder="Enter Your PAN Number."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-md-12">
//                   <div className="single-input-inner">
//                     <input
//                       id="city"
//                       name="user_city" // Updated to match the template variable
//                       type="text"
//                       placeholder="Enter Your City."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12">
//                   <div className="single-input-inner">
//                     <textarea
//                       name="message"
//                       id="message"
//                       cols="1"
//                       rows="5"
//                       placeholder="Enter Your Message..."
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div className="col-12 text-center">
//                   <button
//                     type="submit"
//                     className="btn btn-base border-radius-5"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="contact-page-list">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-4 col-md-6">
//               <div className="media single-contact-list">
//                 <div className="media-left">
//                   <img src="assets/img/icon/13.svg" alt="Contact Us" />
//                 </div>
//                 <div className="media-body">
//                   <h5>Contact Us</h5>
//                   <h6>{Phone_number}</h6>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="media single-contact-list">
//                 <div className="media-left">
//                   <img src="assets/img/icon/14.svg" alt="Your Email" />
//                 </div>
//                 <div className="media-body">
//                   <h5>Your Email</h5>
//                   <h6>{Email_id}</h6>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4 col-md-6">
//               <div className="media single-contact-list">
//                 <div className="media-left">
//                   <img src="assets/img/icon/15.svg" alt="Location" />
//                 </div>
//                 <div className="media-body">
//                   <h5>Location</h5>
//                   <h6>{Address}</h6>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="contact-g-map">
//         <iframe
//           src={IframeSrc}
//           title="Map"
//         />
//       </div>
//     </>
//   );
// };

// export default ContactMain;



'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';
import { Address, Email_id, Phone_number, IframeSrc } from '@/Config/config';

const ContactMain = () => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(formRef.current);
    const data = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      user_pan: formData.get('user_pan'),
      user_city: formData.get('user_city'),
      message: formData.get('message'),
    };

    try {
      const result = await emailjs.send('service_sdx951d', 'template_9fe4vtg', data, '2ucmdjgMuwh4qLpX6');
      if (result.text === 'OK') {
        toast.success('Message Sent Successfully!');
        formRef.current.reset(); // Reset the form
      }
    } catch (error) {
      toast.error('Message Not Sent!');
    }
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="contact-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="contact-page-inner bg-gray">
            <div className="section-title mb-4 pb-2">
              <h2 className="title">Direct contact us?</h2>
              <p className="content mb-0">
                For your car we will do everything advice, repairs, and maintenance. We are the preferred choice by many car owners because our experience and knowledge are self-evident.
              </p>
            </div>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="name"
                      name="from_name" // Updated to match the template variable
                      type="text"
                      placeholder="Enter Your Name."
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="email"
                      name="from_email" // Updated to match the template variable
                      type="email"
                      placeholder="Enter Your Email (optional)"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="pan"
                      name="user_pan" // Updated to match the template variable
                      type="text"
                      placeholder="Enter Your PAN Number."
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="city"
                      name="user_city" // Updated to match the template variable
                      type="text"
                      placeholder="Enter Your City."
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input-inner">
                    <textarea
                      name="message"
                      id="message"
                      cols="1"
                      rows="5"
                      placeholder="Enter Your Message..."
                      required
                    />
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-base border-radius-5"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-page-list">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/13.svg" alt="Contact Us" />
                </div>
                <div className="media-body">
                  <h5>Contact Us</h5>
                  <h6>{Phone_number}</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/14.svg" alt="Your Email" />
                </div>
                <div className="media-body">
                  <h5>Your Email</h5>
                  <h6>{Email_id}</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/15.svg" alt="Location" />
                </div>
                <div className="media-body">
                  <h5>Location</h5>
                  <h6>{Address}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-g-map">
        <iframe
          src={IframeSrc}
          title="Map"
        />
      </div>
    </>
  );
};

export default ContactMain;
