import React from 'react';

export default function About() {
    return (
        <>
            <section id="about" className="w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-[200px] pt-12 pb-24">
                <div className="flex flex-col md:w-2/4 mb-12 md:mb-0">
                    <h1 className="font-semibold text-4xl mb-5">🤔 About Me</h1>
                    <p className="text-md leading-[2.4ch] mb-10">
                        Professionally experienced in full stack web development with strong skills in both client-side and server-side programming.
                        Additionally, experienced in using both HTML, CSS, and JavaScript fluently alongside a comprehensive understanding of top-rated modern frameworks like React.
                        Capable of creating responsive UIs that offer seamless navigation experiences while building efficient server-side architectures,
                        I strive to deliver excellent coding results by working well within cross-functional teams and constantly upskilling myself.
                    </p>
                    <h3 className="text-md font-bold">🛠️ Tools I can work with <i className="fa-solid fa-arrow-right"></i></h3>
                </div>
                <div className="flex flex-wrap justify-start md:w-[40%] text-right">
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">HTML</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">CSS</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">Bootstrap</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">JQuery</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">JavaScript</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">Typescript</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">NodeJS</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">ReactJS</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">NextJS</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">TailwindCSS</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">ExpressJS</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">Python</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">Git</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">Visual Studio Code</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">Atom</button>
                    <button className="px-4 py-2 bg-orange-500 text-white mr-2 mb-2">Github</button>
                </div>
            </section>
        </>
    );
}
