import React from "react";
import MyImage from '../components/MyImage'
import TextCard from '../components/common/TextCard'
import RoundButton from '../components/common/RoundButton'
import Text from '../components/common/Text'
const AboutPage = () => {
    const whychoose = [

        {
            icon: "💡",
            title: "Innovative Solutions",
            desc: "We craft modern software tailored to your unique business needs."
        },
        {
            icon: "🛡️",
            title: "Trusted Partner",
            desc: "Building long-term relationships based on transparency and trust."
        },
        {
            icon: "⚡",
            title: "Fast & Scalable",
            desc: "Our products grow with your business, without slowing you down."
        },
        {
            icon: "🌍",
            title: "Global Reach",
            desc: "Helping clients in multiple industries across the globe."
        }

    ]
    return (
        <>
            <section className="bg-white text-gray-800 ">
                <section className="bg-primary-bg text-gray-800 mt-16 py-10 px-4 md:px-24">
                    <div>
                        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-10">
                            <div className="lg:w-1/2 lg:text-center lg:text-left">

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-8 mb-4">
                                    About <span className="text-primary-text">Ameya Software</span>
                                </h1>
                                <Text variant="p">We are a passionate team of innovators, designers, and engineers
                                    dedicated to building digital products that make a difference.</Text>
                                <RoundButton
                                    text="Join Our Journey 🚀"
                                />
                            </div>
                            <div className="lg:w-1/2 shadow-md bg-white rounded-lg p-4">
                                <MyImage
                                    src="/images/about-hero.png"
                                    alt="About Ameya"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="max-w-7xl mx-auto px-6 lg:px-24 py-20 grid md:grid-cols-2 gap-10">
                    <TextCard
                        title="Our Mission"
                        description="To empower businesses worldwide by delivering innovative software
        solutions that solve real-world challenges and create lasting value."
                        className="bg-gradient-to-b from-pink-50 to-white text-[#b72960]"
                    />

                    <TextCard
                        title="Our Vision"
                        description="To be the most trusted and admired software development partner,
                            known for our creativity, quality, and commitment."
                        className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-yellow-50 to-white hover:shadow-xl transition"
                    />
                </div>
                <div className="bg-secondary-bg py-20">
                    <div className="max-w-5xl mx-auto text-center">
                        <Text variant="h2">Our Journey</Text>
                        <div className="relative border-l-4 border-[#b72960] pl-6">
                            <div className="mb-10">
                                <Text variant="h6">2018 - Founded</Text>
                                <Text variant="p">Started with a small but passionate team.</Text>
                            </div>
                            <div className="mb-10">
                                <Text variant="h6">2020 - First Major Product</Text>
                                <Text variant="p">Launched our flagship SaaS platform.</Text>
                            </div>
                            <div>
                                <Text variant="h6">2023 - Global Expansion</Text>
                                <Text className="text-gray-600">Serving clients in over 10 countries.</Text>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 py-20">
                    <div className="max-w-7xl mx-auto px-6 lg:px-24 text-center">
                        <Text variant="h2">
                            Why Choose Ameya Software?
                        </Text>
                        <Text variant="p">
                            At Ameya Software, we combine innovation, expertise, and passion to deliver
                            solutions that help businesses thrive in the digital era.
                        </Text>
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {
                                whychoose.map((item) => (
                                    <div
                                        key={item.title}
                                        className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
                                    >
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <h4 className="text-lg font-semibold text-primary-color mb-2">{item.title}</h4>
                                        <Text variant="p" className="text-sm text-secondary-color">{item.desc}</Text>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
export default AboutPage