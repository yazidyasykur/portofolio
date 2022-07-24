import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function SocialMedia (){
    return(
        <div className="flex flex-col gap-5 items-center px-2 py-8 bg-slate-900 text-white">
            <h1 className="mb-5 font-bold">Social Media</h1>
            <p className="text-xs">Find me in:</p>
            <div className="text-3xl flex gap-5">
                <a href="https://twitter.com/yjdyskr" target="_blank"><FontAwesomeIcon icon={faTwitter} className="hover:text-lime-400"/></a>
                <a href="https://web.facebook.com/yazidyasykur52" target="_blank"><FontAwesomeIcon icon={faFacebook} className="hover:text-lime-400"/></a>
                <a href="https://github.com/yazidyasykur" target="_blank"><FontAwesomeIcon icon={faGithub} className="hover:text-lime-400"/></a>
                <a href="https://www.linkedin.com/in/yazid-yasykur/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="hover:text-lime-400"/></a>
            </div>
        </div>
    )
}

export default SocialMedia