import profile from "../assets/profile.jpg"

function About() {
    return (
        <div className="text-white flex flex-col gap-5 px-6 py-8 bg-slate-800 items-center justify-center">
            <div className="font-bold whitespace-nowrap">About Me</div>
            <img src={profile} alt="profile" className="max-w-[150px] rounded-full" />
            <div className="text-white text-center">
                <div>Yazid Yasykur</div>
                <div className="text-sm">Frontend Developer</div>
                <p className="text-xs mt-2 max-w-xs">A Self-taught Frontend Developer working with ReactJS environment. Have
built numerous projects through online courses. Have strong interest
in learning to be able to master other environment</p>
            </div>
        </div>
    )
}

export default About