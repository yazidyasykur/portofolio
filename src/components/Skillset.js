import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

function Skillset() {
    return (
        <div className="bg-slate-900 text-white py-10 px-6 text-center">
            <h1 className="mb-5 font-bold">Skillset</h1>
            <div className="flex gap-5 justify-center my-3 text-3xl">
                <FontAwesomeIcon icon={faHtml5} />
                <FontAwesomeIcon icon={faCss3} />
                <FontAwesomeIcon icon={faJsSquare} />
                <FontAwesomeIcon icon={faReact} />
                <FontAwesomeIcon icon={faPython} />
            </div>
        </div>
    )
}

export default Skillset