import tw from "tailwind-styled-components"

const typedSentence = ['Hello. Welcome.',`I'm am Adina Henderson`]

export const TypingEffect = () => {

    return (
        <h2 className="flex flex-col lg:block text-center py12 text-5xl">
            <span className="mb-2 lg:mb-0">Hello. Welcome!</span>
            <span className="">I'm Adina Henderson, Web Developer</span>
            <span className="blinking-coursor"></span>
        </h2>
    )
}