// app/careers/page.jsx  (or pages/careers.jsx)
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import MyImage from '../components/MyImage'
import TextCard from "../components/common/TextCard";
import RoundButton from "../components/common/RoundButton";
const JOBS = [
    {
        id: "fe-1",
        title: "Senior Frontend Engineer",
        location: "Remote / India",
        team: "Web",
        level: "Senior",
        bullets: [
            "Build performant React/Next.js apps",
            "Mentor engineers & own UI components",
            "Ship accessible, testable UI",
        ],
    },
    {
        id: "be-1",
        title: "Backend Engineer (Node.js)",
        location: "Remote / Bengaluru",
        team: "Platform",
        level: "Mid - Senior",
        bullets: [
            "Design APIs and distributed services",
            "Work with Postgres and caching",
            "Improve observability & reliability",
        ],
    },
    {
        id: "pm-1",
        title: "Product Manager - Growth",
        location: "Hybrid / Mumbai",
        team: "Product",
        level: "Mid",
        bullets: [
            "Drive growth experiments",
            "Work cross-functionally with engineering & marketing",
        ],
    },
];

export default function CareersPage() {
    const [applyJob, setApplyJob] = useState(null); // job object or null
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        resume: null,
    });
    const [submitting, setSubmitting] = useState(false);
    const brandPink = "#b72960";

    function openApply(job) {
        setApplyJob(job);
        setForm({ name: "", email: "", message: "", resume: null });
    }

    function closeApply() {
        setApplyJob(null);
    }

    function onFile(e) {
        setForm((s) => ({ ...s, resume: e.target.files?.[0] || null }));
    }

    async function submitApply(e) {
        e.preventDefault();
        if (!form.name || !form.email) {
            alert("Please enter name and email.");
            return;
        }
        setSubmitting(true);
        await new Promise((r) => setTimeout(r, 900));
        setSubmitting(false);
        alert(`Application sent for ${applyJob.title}. We'll reach out soon!`);
        closeApply();
    }

    return (
        <main className="min-h-screen bg-primary-bg mt-8 text-gray-900">
            {/* HERO */}
            <section
                className="relative overflow-hidden py-20"
                aria-labelledby="careers-heading"
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold mt-8 mb-4">
                            Join <span className="text-primary-text">our team</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                            We build delightful, reliable software used by businesses globally.
                            If you love craftsmanship, ownership, and learning fast — you’ll fit
                            right in.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="#open-roles"
                                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#f48fb1] to-[#b72960] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-[1.02] transition"
                            >
                                View Open Roles
                            </a>
                            <a
                                href="#culture"
                                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 text-gray-700 hover:shadow-sm transition"
                            >
                                Our Culture
                            </a>
                        </div>

                        {/* quick stats */}
                        <div className="mt-8 flex flex-wrap gap-6">
                            <div className="bg-gray-50 border rounded-lg px-4 py-3">
                                <div className="text-sm text-gray-500">Remote</div>
                                <div className="font-semibold text-lg">Fully flexible</div>
                            </div>
                            <div className="bg-gray-50 border rounded-lg px-4 py-3">
                                <div className="text-sm text-gray-500">Interview</div>
                                <div className="font-semibold text-lg">Fast & transparent</div>
                            </div>
                            <div className="bg-gray-50 border rounded-lg px-4 py-3">
                                <div className="text-sm text-gray-500">Benefits</div>
                                <div className="font-semibold text-lg">Competitive</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 shadow-md bg-white rounded-lg">
                        <MyImage
                            src="/images/job_interview-121.jpg"
                            alt="Next.js Logo"
                            width={500}
                            height={500} />
                    </div>

                </div>
            </section>

            {/* BENEFITS / WHY JOIN */}
            <section id="culture" className=" py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <TextCard
                            title="Flexible Work"
                            description="Work-from-home, flexible hours, and supportive PTO policies."
                            className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-yellow-50 to-white hover:shadow-xl transition"

                        />
                        <TextCard
                            title="Growth & Learning"
                            description=" Budget for conferences, peer learning days, and monthly knowledge
                                sessions."
                            className="bg-gradient-to-b from-pink-50 to-white text-[#b72960]"

                        />
                        <TextCard
                            title="Comp & Benefits"
                            description=" Competitive salary, health coverage, and performance bonuses."
                            className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-yellow-50 to-white hover:shadow-xl transition"

                        />
                    </div>
                </div>
            </section>
            <section id="open-roles" className="py-16 secondary-bg">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold">Open Positions</h2>
                        <p className="text-gray-600">Updated: Aug 9, 2025</p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {JOBS.map((job) => (
                            <article
                                key={job.id}
                                className="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="flex items-center justify-center w-12 h-12 rounded-full text-white font-bold"
                                        style={{ background: "linear-gradient(135deg,#f48fb1,#b72960)" }}
                                        aria-hidden
                                    >
                                        {job.team[0]}
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {job.title}
                                        </h3>
                                        <div className="text-sm text-gray-500 mt-1">
                                            {job.location} • {job.level}
                                        </div>

                                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                            {job.bullets.map((b, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <span className="mt-1">•</span>
                                                    <span>{b}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-5 flex items-center gap-3">
                                            
                                            <RoundButton
                                                onClick={() => openApply(job)}
                                                text="Apply"
                                            />


                                            <a
                                                href="#"
                                                className="text-sm text-[#6b7280] hover:underline"
                                                aria-label={`See details about ${job.title}`}
                                            >
                                                See details
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* little tag */}
                                <span className="absolute top-4 right-4 text-xs px-2 py-1 rounded-md bg-[#fdf2f8] text-[#b72960] border border-[#fde4ef]">
                                    {job.team}
                                </span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 border-t bg-white">
                <div className="max-w-5xl mx-auto px-6">
                    <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
                    <dl className="space-y-4">
                        <div>
                            <dt className="font-medium">What is the hiring process like?</dt>
                            <dd className="text-gray-600 mt-1">
                                A quick initial call, one technical interview, and a culture/match conversation.
                            </dd>
                        </div>
                        <div>
                            <dt className="font-medium">Can I work remotely?</dt>
                            <dd className="text-gray-600 mt-1">Yes — we support remote-first work.</dd>
                        </div>
                        <div>
                            <dt className="font-medium">How do I submit my resume?</dt>
                            <dd className="text-gray-600 mt-1">Use the Apply button on any role and attach your resume.</dd>
                        </div>
                    </dl>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#fff1f5] to-[#fff7f9] p-8 rounded-2xl">
                    <div>
                        <h3 className="text-2xl font-bold">Not seeing a perfect fit?</h3>
                        <p className="text-gray-600 mt-2">
                            Send a general application and we’ll keep your profile on file.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <RoundButton
                            text="Send General Application"
                            onClick={() => openApply({ title: "General Application" })}
                            className=""
                        />
                    </div>
                </div>
            </section>

            {/* Footer-like small */}
            <footer className="py-10 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} YourCompany • Built with ❤️
            </footer>

            {/* APPLY DRAWER / MODAL */}
            {applyJob && (
                <div
                    className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/40 p-4"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
                        <div className="flex items-center justify-between p-6 border-b">
                            <div>
                                <h4 className="text-lg font-semibold">Apply — {applyJob.title}</h4>
                                <p className="text-sm text-gray-500">{applyJob.location}</p>
                            </div>
                            <button
                                onClick={closeApply}
                                className="text-gray-400 hover:text-gray-600"
                                aria-label="Close apply form"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={submitApply} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium">Full name</label>
                                    <input
                                        className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
                                        value={form.name}
                                        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Email</label>
                                    <input
                                        type="email"
                                        className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
                                        value={form.email}
                                        onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium">Message / Cover note</label>
                                <textarea
                                    rows={4}
                                    className="mt-2 w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-200"
                                    value={form.message}
                                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                                    placeholder="Tell us why you'd be a great fit (optional)"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Resume (PDF)</label>
                                <input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    className="mt-2"
                                    onChange={onFile}
                                />
                                {form.resume && (
                                    <div className="mt-2 text-sm text-gray-600">
                                        Selected: {form.resume.name}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={closeApply}
                                    className="px-4 py-2 rounded-full border"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="px-6 py-2 rounded-full bg-[#b72960] text-white shadow"
                                >
                                    {submitting ? "Sending..." : "Submit Application"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </main>
    );
}
