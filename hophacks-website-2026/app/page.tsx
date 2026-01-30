import React from 'react';
import { Mail, MapPin, Building, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-bg-primary text-text-primary font-inter selection:bg-accent-blue selection:text-white overflow-x-hidden">

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-10 overflow-hidden">

                {/* Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    {/* INSERT IMAGE HERE: Background Nebula/Starfield Image */}
                    <div className="w-full h-full bg-gradient-to-b from-bg-secondary to-bg-primary opacity-80"></div>
                    {/* Decorative Orb */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-blue rounded-full blur-[150px] opacity-20"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-gold rounded-full blur-[120px] opacity-10"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
                    {/* Logo Placeholder */}
                    <div className="mb-8 relative group">
                        <img src="/logo2023.png" alt="HopHacks Logo" />
                    </div>

                    <h1 className="font-anton text-7xl md:text-9xl tracking-tight leading-none mb-2 drop-shadow-2xl">
                        <span className="text-white">HOP</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-tr from-accent-blue to-white">HACKS</span>
                    </h1>

                    <h2 className="font-anton text-6xl md:text-8xl text-outline-white text-transparent tracking-widest opacity-30 mt-[-10px] md:mt-[-20px] select-none">
                        2026
                    </h2>

                    <p className="font-montserrat font-bold text-xl md:text-3xl text-accent-gold uppercase tracking-[0.2em] mt-8 mb-4">
                        Illuminating Innovations
                    </p>
                </div>

                <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
                    <ArrowRight className="rotate-90 text-white/50 w-8 h-8" />
                </div>
            </section>


            {/* ================= INFO SECTION ================= */}
            <section className="relative w-full py-32 px-6 flex flex-col items-center bg-bg-secondary/50">
                <div className="max-w-3xl text-center space-y-8">
                    <h2 className="font-montserrat font-bold text-4xl md:text-6xl text-white mb-6">
                        Stay Tuned
                    </h2>
                    <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                        We are currently crafting the next iteration of Johns Hopkins University's premier hackathon.
                        More details regarding registration, tracks, and prizes will be revealed as we get closer to the event.
                    </p>

                    <div className="p-8 mt-8 border border-accent-blue/30 bg-accent-blue/5 rounded-2xl backdrop-blur-sm">
                        <h3 className="font-montserrat font-bold text-xl text-accent-blue mb-2">Get Notified</h3>
                        <p className="text-sm text-gray-400 mb-6">Follow our socials for the latest updates.</p>

                        <div className="flex justify-center gap-6">
                            <a href="https://discord.com/invite/8V8wmCWUhH" className="p-3 bg-white/5 rounded-full hover:bg-accent-blue hover:text-white transition-all duration-300 group">
                                <img src="/discord.png" alt="Discord" className="w-6 h-6 text-gray-300 group-hover:text-white" />
                            </a>
                            <a href="https://linktr.ee/hophacks" className="p-3 bg-white/5 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300 group">
                                <img src="/linktree.webp" alt="Linktree" className="w-6 h-6 text-gray-300 group-hover:text-white" />
                            </a>
                            <a href="https://www.linkedin.com/company/hophacks/" className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group">
                                <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6 text-gray-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= STATS PREVIEW SECTION ================= */}
            <section className="w-full py-32 px-6 bg-bg-primary relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-blue/5 to-transparent pointer-events-none"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="font-montserrat font-bold text-3xl md:text-5xl text-white">
                            What to Expect
                        </h2>
                        <div className="w-24 h-1 bg-accent-gold mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-40 h-40 rounded-full border-2 border-accent-blue/30 flex items-center justify-center relative group-hover:border-accent-blue/80 transition-all duration-500 bg-bg-card shadow-lg">
                                <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-spin-slow"></div>
                                <span className="font-anton text-5xl text-white">36</span>
                            </div>
                            <span className="font-montserrat font-bold text-xl text-accent-blue uppercase tracking-widest">Hours</span>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-40 h-40 rounded-full border-2 border-accent-gold/30 flex items-center justify-center relative group-hover:border-accent-gold/80 transition-all duration-500 bg-bg-card shadow-lg">
                                <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                                <span className="font-anton text-5xl text-white">$16k+</span>
                            </div>
                            <span className="font-montserrat font-bold text-xl text-accent-gold uppercase tracking-widest">Prizes</span>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-40 h-40 rounded-full border-2 border-accent-blue/30 flex items-center justify-center relative group-hover:border-accent-blue/80 transition-all duration-500 bg-bg-card shadow-lg">
                                <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-spin-slow"></div>
                                <span className="font-anton text-5xl text-white">200+</span>
                            </div>
                            <span className="font-montserrat font-bold text-xl text-accent-blue uppercase tracking-widest">Hackers</span>
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= FOOTER SECTION ================= */}
            <footer className="w-full bg-bg-card py-16 text-white border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-center md:text-left">

                        {/* Brand & Organization */}
                        <div className="flex flex-col items-center md:items-start gap-6">
                            <div className="flex items-center gap-4">
                                <img src="/logo2023.png" alt="HopHacks Logo" className="w-10 h-10 object-contain" />
                                <span className="font-anton text-2xl tracking-wide">HOPHACKS</span>
                            </div>
                            <p className="text-text-secondary text-sm max-w-xs leading-relaxed">
                                Organized by students at Johns Hopkins University.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col items-center md:items-end gap-4">
                            <h3 className="font-montserrat font-bold text-lg text-white mb-2">Contact Us</h3>

                            <a href="mailto:hophacks@gmail.com" className="flex items-center gap-3 text-sm text-gray-300 hover:text-accent-gold transition-colors">
                                <span>hophacks@gmail.com</span>
                                <Mail className="w-4 h-4" />
                            </a>

                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <span>Malone Hall, Johns Hopkins University</span>
                                <MapPin className="w-4 h-4" />
                            </div>

                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <span>Baltimore, MD</span>
                                <Building className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center text-xs text-white/30 border-t border-white/5 pt-8 font-mono">
                        © 2026 HopHacks. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}
