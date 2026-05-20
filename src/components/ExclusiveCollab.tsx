"use client";

import React, { useState, useEffect } from "react";

export default function ExclusiveCollab() {
  const [timeLeft, setTimeLeft] = useState({
    days: 19,
    hours: 21,
    minutes: 42,
    seconds: 59,
  });
  const [isRegistered, setIsRegistered] = useState(false);

  // Tick the countdown timer in real-time
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-8 py-16 transition-colors duration-300">
      <div className="bg-veson-dark rounded-[3.5rem] overflow-hidden relative min-h-[500px] flex flex-col lg:flex-row shadow-xl">
        <img
          alt="Exclusive Collection Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMPuTinoV5qWev6_F-rAfVulq3saxVoywFSuT9WLQKSY__TzldAjFVTLkDha8pbvxzDGFv0mYhfrufLmbX1-lXsqbWNJnouIk7UwSiytKTB0cnezcntMIwkVKG6-pejbDqCv63rOtuQ97MyAyUV_iBI29GCSiGsWmQcdY1_yYAwlduUFq0Lsgbr1UgBMnwl7nwbZ9UhLZYDqgDOzI5g9uuYdtUUv0xtcdmM2DXEhI70EmB82sBAYSI33G81Pp922cejzGpwb9cVA5t"
        />
        <div className="lg:w-1/2 p-12 md:p-20 relative z-10 flex flex-col justify-center text-white">
          <div className="flex items-center gap-4 mb-8">
            <img
              alt="James Visual"
              className="w-16 h-16 rounded-full object-cover grayscale border-2 border-primary shadow-lg"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhqb4-3Ma8zdv-54EQtMFZOjZVrXu_R_k1VHuxT2urApQ90jnJu3e03mEj_FuqCZYOUjZ1HPSW4t_6wNOdl61hMKbsGyURl4DjSTHNBYI2DRGNk8fYxy1TztOSZyQC7Q2Hxk6fFz2rsN-gvI68iEmIIVSmQ_llZNfz9tWqYvjiFKQtpbsC9u3Nygzr6o7qfywGzW3PqJs2xgqrQC_2QEgeAXjOO9nZ7BWgk81OcLmOFHhT6p-ZD9yItyl8WxiKTpjuNB2m4341KivO"
            />
            <h2 className="text-4xl md:text-5xl font-display leading-none uppercase font-condensed">
              Exclusive<br />
              <span className="text-primary italic">Collection</span>
            </h2>
          </div>
          <p className="text-xs uppercase font-bold tracking-widest text-gray-400 max-w-sm mb-12 leading-relaxed">
            Elevate your style with our premium collaboration featuring James Visual. Limited pieces, timeless design.
          </p>
          <div className="flex flex-wrap gap-8 items-center">
            {/* Live countdown columns */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="text-primary font-display text-4xl block font-condensed">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">
                  Days
                </span>
              </div>
              <span className="text-gray-700 text-2xl font-display font-condensed">:</span>
              <div className="text-center">
                <span className="text-primary font-display text-4xl block font-condensed">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">
                  Hours
                </span>
              </div>
              <span className="text-gray-700 text-2xl font-display font-condensed">:</span>
              <div className="text-center">
                <span className="text-primary font-display text-4xl block font-condensed">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">
                  Min
                </span>
              </div>
              <span className="text-gray-700 text-2xl font-display font-condensed">:</span>
              <div className="text-center font-mono">
                <span className="text-primary font-display text-4xl block font-condensed">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">
                  Sec
                </span>
              </div>
            </div>

            {/* Dynamic CTA */}
            {isRegistered ? (
              <div className="bg-primary/20 border border-primary text-primary px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                <span className="material-icons-outlined text-sm">check_circle</span>
                Successfully Registered!
              </div>
            ) : (
              <button
                onClick={() => setIsRegistered(true)}
                className="bg-white text-black px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-primary transition-all-custom cursor-pointer hover:scale-102 hover:shadow-lg shadow-white/5"
              >
                Register for early access
              </button>
            )}
          </div>
        </div>

        {/* Preview image grid */}
        <div className="lg:w-1/2 relative bg-black/25">
          <div className="grid grid-cols-2 gap-4 p-8 h-full min-h-[350px]">
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                alt="Soon 1"
                className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4nQ26HAa6z1wkk4WF5r33FY7PAQPSa1VJZpERmpEqLZ9OGOMb4-yRvRV7uSPyYIwXBk5re32noWAZLiOYuQcaq3aVumlt5pZppoMnOw6YscENdUhfotXOnnLuqM6Js-IcqijRFtiZ6rIe31GC0NNTk3GCAQACBW7SDOOCce6Q5UjjGmeBIdl5WDTyIJGA-lk9ab7N74oh_q1wXm2dy8r8LX3nmtTKk4GDdCMkUE221GJAUkd9uKUxENWFX526wAvTltgjiNzwnfQM"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary text-black font-display text-xl font-condensed px-5 py-4 rounded-full rotate-[-10deg] shadow-2xl border-4 border-veson-dark">
                  Soon
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img
                alt="Soon 2"
                className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxsnruRnXIJ1iRHxctgj3T2wQ2TFfwMGD7AtXuOYBYUv4K5fpW1lGxhB1jq9oREou7otmmqwj56ibeoxG18yY8oMxM4QhjIr5HI8sAviWtXgKU1DLz9Z5ymjJ6y1jSv4BcD86LmES0YkSDQDV1co8FhA8907zYNnooeE9Koj_JtlDylJDOETg5cu9J_9GRfhT4Dc0ypNASin_HwlIAIGt0I_DlPFaN1Rc1_vnbFTVs_LyiQlOpcebDRKXmVwB2skRvaU657lbXIEh-"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-primary text-black font-display text-xl font-condensed px-5 py-4 rounded-full rotate-[15deg] shadow-2xl border-4 border-veson-dark">
                  Soon
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full border-t border-r border-white/5 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
