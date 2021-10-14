import React from 'react';


export default function About2() {
    return (

<div className="w-full h-screen flex items-center justify-center bg-gray-200">
    <div className="relative w-96 h-auto bg-gray-400 rounded-md pt-24 pb-8 px-4 shadow-md hover:shadow-lg transition flex flex-col items-center">
        <div className="absolute rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition">
            <div className="rounded-full bg-black w-full h-full overflow-auto">
                <img src="src/assets/images/adina-portfolio.JPG" alt="" />
            </div>
        </div>
        <label className="font-bold text-gray-100 text-lg">
            Adina Henderson
        </label>
        <p className="text-center text-gray-200 mt-2 leading-relaxed">
                Full stack web developer educated at Tec de Monterrey. Well
                versed with HTML, CSS, JavaScript, among other technologies.
                Proven staff management, as well as project management and
                development abilities, excellent interpersonal and communication
                skills. Passionate about database design. Highly successful in
                collaborative environments, while independently working,
                adaptable to change, problem solver, highly motivated,
                organized, and passionate about software design and development,
                data analysis, quality assurance, etc. Fluent in English and
                Spanish. Recently worked in diverse projects including different
                technologies: MERN, React, Databases (SQL and NoSQL), node.js,
                JavaScript, among others.
                <br/>
                Coming from a Business, Accounting & Auditing, Finance and
                Consulting background, I am eager to leap into the Technology field.
                I love challenge, languages, music, and dance.
        </p>
        
    </div>
</div>
    );
}