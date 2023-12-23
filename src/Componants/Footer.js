import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid bg-dark p-3 fs-6 border border-top border-primary' style={{ display: "flex", justifyContent: "center" }}>
      <p className='text-white text-center ' style={{ letterSpacing: "2px" }}><i class="fa-regular fa-copyright me-1"></i>
        VXEQ.in <span className='text-white ms-2 ' style={{ letterSpacing: "2px" }}>VXEQ pvt ltd 2023</span>
        <span className='text-white fw-bold ms-3' style={{ letterSpacing: "2px" }}>
          Designed By NerdTech</span></p>
    </div>
  )
}
