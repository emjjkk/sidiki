import React from 'react';

export default function Hero() {
    return (
        <>
            <section className="w-full min-h-screen flex flex-col md:flex-row justify-between items-center px-4 md:px-[200px] py-32">
                <div className="w-full md:w-2/4 pr-0 md:pr-2 flex flex-col h-full justify-between md:text-left">
                    <h1 className="text-3xl md:text-5xl leading-[1.6ch] font-semibold">
                        Hi 👋 I'm a <span className="text-orange-500 underline font-bold">passionate</span> full-stack developer based in <span className="text-green-500">🦅 Texas.</span>
                    </h1>
                    <div>
                        <p className="text-md mb-5">I'm currently open to work and collaborations! Feel free to check out my work or contact me below with any questions or ideas.</p>
                        <div className="md:flex md:justify-start gap-4">
                            <a href="mailto:dansidiki@live.com">
                                <button className="px-4 py-2 bg-orange-500 text-white rounded-full mr-1 mb-2">✉️ Drop me an email</button>
                            </a>
                            <a href="#portfolio">
                                <button className="px-4 py-2 bg-orange-500 text-white rounded-full">👀 See my work</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/4 flex items-center justify-center md:justify-end mt-8 md:mt-0">
                    <img src="https://github.com/asiangolfer87/asiangolfer87/raw/main/PP.png" className='relative bottom-5 md:bottom-0' alt="Profile" />
                </div>
            </section>
        </>
    );
}
