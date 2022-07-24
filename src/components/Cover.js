import background from "../assets/cover-bg.png"

function Cover() {
    return (
        <div className="flex items-center">
            <h1 className="absolute -z-[0] text-white max-w-[50%] ml-7 sm:text-xl lg:text-3xl">A Passionful Frontend Developer </h1>
            <div className="flex bg-slate-900 justify-end">
                <img src={background} alt="cover" className="min-h-[50%] max-w-[70%] object-cover right-0" />
            </div>
            
        </div>
    )
}

export default Cover