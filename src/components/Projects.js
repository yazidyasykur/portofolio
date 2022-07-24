import projects from "../assets/project-list.json"
import React from 'react'



function Box(props) {
    const [isHover, setIsHover] = React.useState(false)

    function mouseIn() {
        setIsHover(true)
    }

    function mouseOut() {
        setIsHover(false)
    }

    return (
        <a className="flex items-center justify-center" onMouseOver={mouseIn} onMouseOut={mouseOut} href={props.url} target="_blank">
            <img className={`max-h-[10rem] max-w-[10rem] bg-slate-500 rounded shadow-md flex items-center justify-center ${isHover ? "brightness-50" : "brightness-100"}`} src={props.imgUrl} />
            <div className={`absolute font-bold ${isHover ? "visible" : "hidden"}`}>{props.name}</div>
        </a>
    )
}

function Projects() {

    const myProject = projects.map(item => <Box name={item.name} url={item.url} imgUrl={item.imgUrl} />)

    return (
        <div className="bg-slate-800 px-6 py-10 text-white text-center ">
            <h1 className="font-bold mb-5">My Projects</h1>
            <div className="flex gap-3 justify-center overflow-x-auto my-2">
                {myProject}
            </div>
        </div>
    )
}

export default Projects