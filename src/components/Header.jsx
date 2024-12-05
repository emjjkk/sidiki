import React from 'react';

export default function Header() {
    return (
        <>
            <header className="w-full px-4 md:px-[200px] py-6 flex items-center justify-between absolute flex-wrap">
                <div className="flex items-center">
                    <h1 className="text-lg font-bold">*Daniel Sidiki.</h1>
                </div>
                <div className="flex flex-wrap items-center justify-between w-full md:w-auto">
                    <a href="#about" className="text-md mx-2 hover:text-orange-500">About</a>
                    <a href="#portfolio" className="text-md mx-2 hover:text-orange-500">Portfolio</a>
                    <a href="#contact" className="text-md mx-2 hover:text-orange-500">Contact</a>
                    <a href="https://github.com/asiangolfer87" className="text-md mx-2 hover:text-orange-500"><i className="fa-brands fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/daniel-sidiki-22a326220/" className="text-md mx-2 hover:text-red-500"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://twitter.com/dansidiki1" className="text-md mx-2 hover:text-red-500"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="https://instagram.com/dansidiki" className="text-md mx-2 hover:text-red-500"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </header>
        </>
    );
}
