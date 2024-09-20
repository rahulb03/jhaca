import React from "react";
import { workProcesses } from "@/data/work-process";

const WorkProcessThree = () => {
  return (
    <>
      {/*==================== Work Process Three start ====================*/}
      <div className='work-process-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-9'>
              <div className='section-title text-center'>
                <h6 className='sub-title'>CREATIVE MEMBERS</h6>
                <h2 className='title'>
                  The Best Development <span>Solutions</span> In The Country
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {workProcesses.map((process) => (
              <div className='col-lg-3 col-md-6' key={process.id}>
                <div className='single-work-process-inner-3 text-center'>
                  <h2 className='process-count mb-2 color-base'>{process.id.toString().padStart(2, '0')}.</h2>
                  <h5 className='mb-4'>{process.title}</h5>
                  <img src={process.image} alt={`Process ${process.id}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessThree;
