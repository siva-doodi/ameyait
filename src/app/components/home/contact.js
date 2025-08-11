import React from "react";
import Text from '../common/Text'
const ContactForm = () => {
    return (
        <>
            <section className="px-6 py-12 bg-[#608BC1] text-white">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
                        <Text variant="span">
                                Have a project in mind or need help with your software solutions?
                            Our team is here to assist you. Fill out the form and we’ll get back to you shortly.
                        </Text>                    
                        <div className="space-y-4 mt-6">
                            <p className="flex items-center gap-3">
                                📍 <Text variant="span">123 Software Street, Tech City, India</Text>
                            </p>
                            <p className="flex items-center gap-3">
                                📞 <Text variant="span">+91 98765 43210</Text>
                            </p>
                            <p className="flex items-center gap-3">
                                📧 <Text variant="span">contact@softcompany.com</Text>
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-8 shadow-lg text-gray-800">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Form</h2>
                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            />
                            <textarea
                                rows="4"
                                placeholder="Your Message..."
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full cursor-pointer py-3 bg-[#608BC1] hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

        </>
    )

}
export default ContactForm