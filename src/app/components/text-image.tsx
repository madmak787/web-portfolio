import Image from "next/image"

const TextImage = ({heading, description, image, type='left'}) => {
    return (
        <div className={`flex justify-center items-center gap-5 my-10 ${type!='left'?'flex-row-reverse':''}`}>
            <div className="text-white basis-1/2">
                <h2 className="font-bold text-4xl">{heading}</h2>
                <p className="text-xl">{description}</p>
            </div>
            <div className="basis-1/2">
                <Image src={image} alt={heading} width={500} height={500} className="block max-w-[450px] object-contain" />
            </div>
        </div>
    )
}
export default TextImage