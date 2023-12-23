import React from 'react'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'

export default function Home() {
    return (
        <>
        <div className="container-fluid bg-dark text-white">
            <div className="container">
                <h1 className='text-center text-secondary py-3 pt-5 'style={{fontSize:"45px"}}>VXEQ INFRA FACILITIES PVT LTD</h1>
                <div className="row p-3">
                    <div className="col-md-6 col-sm-12 px-5 text-center">
                        <p className='fs-5 ' style={{marginTop:"70px"}}>VXEQ.IFPL offer to nail down existing facilities management
                            service providers to cut the cost by 25%
                            and to improve the quality by 100%.</p>
                        <h3 className='mt-5 mb-4' style={{fontSize:"37px"}}>HOMEATZ GLOBAL</h3>
                        <p className='fs-5 mt-4'>Work From Home-Earn from Home
                            Worldwide Global Opportunity via app on Apple
                            and Goggle Play Store</p>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h4 className='text-center fs-3 mb-3 mt-1'>Salient Features</h4>
                        <p className='fs-6 text-center'>1- You can put pressure on existing fms provider to reduce rate by 25%, by giving them offer as attached, of alternative agency and a threat that if not yielded you may move the matter to consumer forum (NCDRC) for direct indirect losses to consumers,
                            due to excess CAM & poor QUAL
                            ITY.</p>
                        <p className='fs-6 text-center'>2- VXEQ offers to undertake that it is willing to replace the existing service provider CAM with 25% cut and assurance that all the cost components shall be shared online with all stack holders by digitally instant software and decision making
                            shall be by eVoting to improve the services.</p>
                        <p className='fs-6 text-center'>3- VXEQ offers to outsource the fms contract to respective AOA,
                            with the condition that a separate current bank account
                            will be opened for respective aoa, after signing an mom that for profit loss
                            respective AOA shall be responsible, accounting shall have to be transparent via VXEQ app,
                            but if AOA earns any profit, than only 10% of profit earned shall be
                            VXEQ share and in return VXEQ shall provide FREE Technical Audit Of
                            Building and Guidance /assistance in taking/ handing over of
                            inventories/ records from builder, beside providing a free software
                            for digital transparency and instant accounting,
                            eVoting software.</p>
                    </div>
                </div>
            </div>
        </div>
        <About/>
        <Contact/>
        
        </>
        
    )
}
