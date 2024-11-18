'use client'

import Image from "next/image";
import { Book, Users, FileText, GraduationCap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="grid grid-rows-[60px_1fr_60px] min-h-screen bg-gradient-to-br from-[#E6E9FF] via-[#F8F9FF] to-[#DDE1FF]">
      <header className="flex items-center justify-between px-8 sm:px-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#5B4DFF]"></div>
          <h1 className="text-2xl font-bold text-[#5B4DFF]">KNOWlio</h1>
        </div>
        <nav className="hidden sm:flex gap-6">
          <a href="#features" className="hover:text-[#5B4DFF] transition-colors">Features</a>
          <a href="#about" className="hover:text-[#5B4DFF] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#5B4DFF] transition-colors">Contact</a>
        </nav>
      </header>

      <main className="flex flex-col gap-8 items-center px-8 sm:px-20 py-12">
        <div className={`text-center max-w-3xl mx-auto space-y-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#5B4DFF] uppercase tracking-wider">
            Valuing Students
          </h2>
          <p className="text-xl text-gray-600">
            Digital Book Rental & Academic Resource Platform
          </p>
          <button className="bg-[#5B4DFF] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#4B3DFF] transition-all flex items-center gap-2 mx-auto">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-16">
          {[
            { icon: Book, title: "Digital Library", desc: "70% cheaper than hardcopies" },
            { icon: GraduationCap, title: "Professor Connect", desc: "Direct guidance" },
            { icon: FileText, title: "Verified Content", desc: "Quality checked" },
            { icon: Users, title: "Community", desc: "Peer support" }
          ].map(({ icon: Icon, title, desc }, index) => (
            <div 
              key={index} 
              className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Icon className="w-12 h-12 text-[#5B4DFF] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className={`bg-[#5B4DFF] text-white rounded-2xl p-8 w-full mt-16 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold mb-2">92.2M+</h4>
              <p>Current Students</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">70%</h4>
              <p>Cost Savings</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold mb-2">24/7</h4>
              <p>Resource Access</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="flex justify-center items-center gap-6 text-sm text-gray-600">
        <a href="#" className="hover:text-[#5B4DFF] transition-colors">Terms</a>
        <a href="#" className="hover:text-[#5B4DFF] transition-colors">Privacy</a>
        <a href="#" className="hover:text-[#5B4DFF] transition-colors">Contact</a>
      </footer>
    </div>
  );
}