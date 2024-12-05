import React from 'react';

export default function Portfolio() {
    return (
        <>
            <section id="portfolio" className="w-full bg-orange-500 text-white px-4 md:px-[200px] py-24">
                <h1 className="font-semibold text-4xl mb-6 md:text-left">📁 My Projects</h1>
                
                <div className="flex flex-col md:flex-row md:space-x-6 mb-10">
                    <div className="w-full md:w-2/4 mb-6 md:mb-0">
                        <img src="https://via.placeholder.com/500" alt="Project 1" className="w-full" />
                        <h1 className="text-xl font-bold mt-5 mb-3">Project #001</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum aspernatur fugiat at temporibus ad dolorem labore sit, id beatae? Assumenda, quibusdam. Soluta cumque doloremque maxime dolore nemo corporis repudiandae?</p>
                    </div>
                    <div className="w-full md:w-2/4 mb-6 md:mb-0">
                        <img src="https://via.placeholder.com/500" alt="Project 2" className="w-full" />
                        <h1 className="text-xl font-bold mt-5 mb-3">Project #002</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum aspernatur fugiat at temporibus ad dolorem labore sit, id beatae? Assumenda, quibusdam. Soluta cumque doloremque maxime dolore nemo corporis repudiandae?</p>
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="w-full md:w-2/4 mb-6 md:mb-0">
                        <img src="https://via.placeholder.com/500" alt="Project 3" className="w-full" />
                        <h1 className="text-xl font-bold mt-5 mb-3">Project #003</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum aspernatur fugiat at temporibus ad dolorem labore sit, id beatae? Assumenda, quibusdam. Soluta cumque doloremque maxime dolore nemo corporis repudiandae?</p>
                    </div>
                    <div className="w-full md:w-2/4 mb-6 md:mb-0">
                        <img src="https://via.placeholder.com/500" alt="Project 4" className="w-full" />
                        <h1 className="text-xl font-bold mt-5 mb-3">Project #004</h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae earum aspernatur fugiat at temporibus ad dolorem labore sit, id beatae? Assumenda, quibusdam. Soluta cumque doloremque maxime dolore nemo corporis repudiandae?</p>
                    </div>
                </div>
            </section>
        </>
    );
}
