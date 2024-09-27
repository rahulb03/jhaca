'use client';
import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { counters } from "@/data/project_counter";
import Image from "next/image";


const CounterAreaThree = () => {
  return (
    <>
      {/*================= counter area start =================*/}
      <div className='counter-area bg-base pd-top-110 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            {counters.map(({ id, image, count, label, suffix }) => (
              <div className='col-lg-3 col-md-6' key={id}>
                <div className='single-counter-inner style-2 text-center'>
                  <div className='thumb'>
                    <Image src={image} alt='img' className="border-rounded" height={75} width={75} style={{backgroundColor:'white' , padding:'5px' , borderRadius:'50px'}}/>
                  </div>
                  <h2 className='text-white mt-3 mb-2'>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={count} />{suffix || ''}
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <p className='text-white'>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*================= counter area end =================*/}
    </>
  );
};

export default CounterAreaThree;
