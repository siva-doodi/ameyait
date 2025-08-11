'use client';
import React from "react";
import Image from 'next/image';
import MyImage from '../../components/MyImage'
import Button from "../../components/Button";
import Text from '../common/Text'
const AmeyaSection = () => {
    return (
        <>
            <section className="px-4 md:px-24 py-12 bg-[#608BC1] text-white">
                <div className="md:w-[80%] m-auto">
                    <div className="md:w-[45%] md:m-auto">                      
                        <div className="md:text-center text-2xl border-b-2 rounded border-[#0f1941] p-2 font-bold mb-4">OverView: Ameyait Solutions</div>
                    </div>
                    <Text variant="span">Apex Cura’s Agentic SaaS platform is designed to improve hospital revenue outcomes by
                        deploying specialized AI Agents across departments. The Operations Agent automates call-center workflows, enquiry handling and patient chat support — uncovering new revenue opportunities and boosting conversion rates. The Medical Agent acts as a virtual specialty assistant, ensuring precise, efficient digital documentation for clinicians. AI Agents coordinate seamlessly to streamline operations, deepen patient engagement,
                        and accelerate your revenue cycle through intelligent, revenue-focused automation.</Text>                  
                </div>
            </section>
            <section className="px-4 md:px-24 mt-20">
                {/* Section 1 */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <div className="w-full md:w-[50%]">
                        <MyImage
                            src="/images/hemosect1.jpg"
                            alt="Next.js Logo"
                            width={500}
                            height={400}
                        />
                    </div>
                    <div className="w-full md:w-[50%]">
                        <Text variant="h3" className="text-[2rem] text-primary-text font-bold mb-4">
                            Customer analytics{" "}
                            <span className="text-[#5D5D5D] font-[300]">
                                to improve business processes
                            </span>
                        </Text>
                        <Text variant="p" className="text-justify mb-4">
                            Understand your Customers from the holistic data known to your organization
                            rather than fragmented analytics. Pooling all the data at a common place
                            & building Unified Customer View (UCV) will drive insightful Customer Analytics
                            & enhance Customer Experience at multiple touch points. Satisfied customers build
                            great companies.
                        </Text>
                        <Button text="Click Me" />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-20">
                    <div className="w-full md:w-[50%] order-2 md:order-1">
                        <Text variant="h3">
                            Customer analytics{" "}
                            <span className="text-[#5D5D5D] font-[300]">
                                to improve business processes
                            </span>
                        </Text>
                        <p className="text-[#5D5D5D] text-justify mb-4">
                            Understand your Customers from the holistic data known to your organization
                            rather than fragmented analytics. Pooling all the data at a common place
                            & building Unified Customer View (UCV) will drive insightful Customer Analytics
                            & enhance Customer Experience at multiple touch points. Satisfied customers build
                            great companies.
                        </p>
                        <Button text="Click Me" />
                    </div>
                    <div className="w-full md:w-[50%] order-1 md:order-2">
                        <MyImage
                            src="/images/herosection2.jpg"
                            alt="Next.js Logo"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
export default AmeyaSection;