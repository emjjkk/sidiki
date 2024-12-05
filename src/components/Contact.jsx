export default function Contact() {
    return (
        <>
            <section id="contact" className="w-full flex flex-col justify-center items-center px-4 md:px-[200px] py-32">
                <h1 className="font-semibold text-4xl mb-5 text-center">🗣️ Contact</h1>
                <p className="text-md mb-5 text-center md:text-left">
                    Let's work together! Feel free to drop me an email. Soliciting will be ignored.
                </p>
                <a href="mailto:dansidiki@live.com" className="w-full md:w-auto">
                    <button className="px-6 py-3 bg-orange-500 text-white rounded-full w-full md:w-auto">
                        ✉️ Drop me an email
                    </button>
                </a>
            </section>
        </>
    );
}
