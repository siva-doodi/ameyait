import React from "react";
import Button from "../../components/Button";
import Image from 'next/image';
import RoundButton from "../common/RoundButton";
import { VscTools } from "react-icons/vsc";
import { TbBulbFilled } from "react-icons/tb";
import MyImage from "../MyImage";
import Text from '../common/Text'
const ServiceCard = () => {
    const listOfServices = [
        { id: 1, icon: "", name: "Web Development", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" },
        { id: 2, icon: "", name: "App Development", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" },
        { id: 3, icon: "", name: "SAP Services", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" },
        { id: 4, icon: "", name: "Cloud Services", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" },
        { id: 5, icon: "", name: "AI-ML", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" },
        { id: 6, icon: "", name: "Data-Science", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500" }
    ]
    return (
        <>
            <section className="mt-20 px-4 md:px-24 py-12 bg-sky-600 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {listOfServices.map((item) => (
                        <div className="flex flex-col gap-2" key={item.id}>
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <Text variant="h4">
                                {item.name}
                            </Text>
                            <Text variant="span">{item.description}</Text>
                            <a
                                className="font-bold"
                                style={{ color: item.color }}
                                href="#"
                            >
                                Know More
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col lg:flex-row md:justify-center items-center gap-12 lg:gap-20 px-6 lg:px-24 py-20 bg-white">

                {/* Text Content */}
                <div className="lg:w-1/2 md:text-center lg:text-left">
                    <Text variant="h2">What We Do</Text>
                    <Text variant="p" className="mb-4">We deliver cutting-edge software solutions tailored to your business needs.
                        From concept to deployment, our team ensures innovation, quality, and
                        performance in every project. Let’s turn your ideas into impactful
                        digital products that drive results.</Text>
                    <RoundButton
                        text="Read More"
                    />
                </div>

                {/* Service Cards */}
                <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="flex  justify-center gap-4 p-6 h-[180px] border border-gray-200 rounded-sm hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#608BC1] w-12 h-12 flex justify-center items-center text-white text-lg">
                            <TbBulbFilled />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Creative Ideas
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Transform raw data into actionable insights.
                            </p>
                        </div>
                    </div>
                    <div className="flex  justify-center gap-4 p-6 h-[210px] border border-gray-200 rounded-sm  hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#b72960] w-12 h-12 flex justify-center items-center text-white text-lg">
                            <VscTools />
                        </div>
                        <div>
                            <Text variant="h5">Innovative Tools</Text>
                            <Text variant="p">
                                Build scalable, high-performance software tailored to your business needs.
                            </Text>
                        </div>
                    </div>
                    <div className="flex  justify-center gap-4 p-6 h-[180px] border border-gray-200 rounded-sm hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#608BC1] w-12 h-12 flex justify-center items-center text-white text-lg">
                            <MyImage
                                src="/Icons/arrow_14814061.png"
                                alt="Gaol"
                                width="30"
                                height="30"
                            />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Goal
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Transform raw data into actionable insights.
                            </p>
                        </div>
                    </div>
                    <div className="flex  justify-center gap-4 p-6 h-[210px] border border-gray-200 rounded-sm  hover:shadow-lg transition">
                        <div className="flex-shrink-0 rounded-full bg-[#b72960] w-12 h-12 flex justify-center items-center text-white text-lg">
                            <MyImage
                                src="/Icons/laptop_2888684.png"
                                alt="Performance Optmized"
                                width="20"
                                height="20"
                            />
                        </div>
                        <div>
                            <h5 className="text-lg font-semibold text-gray-800 mb-1">
                                Performance Optmized
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Build scalable, high-performance software tailored to your business needs.
                            </p>
                        </div>
                    </div>

                </div>

            </section>



        </>
    )
}
export default ServiceCard;