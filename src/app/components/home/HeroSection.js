'use client';
import Image from 'next/image';
import Link from 'next/link';
import RoundButton from '../common/RoundButton';
import Text from '../common/Text'
import MyImage from '../MyImage';
const HeroSection = () => {
    return (
        <section>
            <div className="w-full  pt-10 pb-20 relative overflow-hidden">
                <div className="min-h-screen flex flex-col justify-center items-center relative z-10">
                    <div className="px-6 md:px-12 lg:px-24 flex flex-col gap-y-10 md:gap-y-8 lg:flex-row lg:justify-between items-center">
                        <div className="w-full lg:w-[45%] order-2 md:order-1 flex flex-col gap-6 md:text-center lg:text-left">
                            <h1 className="text-4xl md:text-4xl font-semibold text-primary-text">
                                Build Your <br />
                                <span className="text-3xl md:text-4xl font-normal text-[#334EAC] block pt-3">
                                    Future with Our Ameya
                                </span>
                            </h1>
                            <Text variant="p" >We turn ideas into animated worlds that entertain and inspire.
                                Join our creative journey and experience the power of storytelling
                                through animation!</Text>            
                            <div>
                                <Link href="/contact">
                                    <RoundButton
                                    text="Explore Our Work 🚀"
                                />
                                </Link>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end order-1 md:order-2 items-end w-full h-full">
                            <MyImage 
                                src="/images/section-hero.png"
                                alt="Hero_image_section"
                                 width={1000}
                                height={800}             
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default HeroSection;