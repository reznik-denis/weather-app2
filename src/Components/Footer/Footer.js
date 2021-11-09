import s from "./footer.module.css";
import GitHub from "../../static/image/github.png";
import Linkedin from "../../static/image/linkedin.png";

export default function Footer() {
    return <div className={s.title}>
        <div >
            <p>Made by Reznik Denis</p>
        </div>
        <div>
            <a href="https://github.com/reznik-denis">
                <img src={GitHub} alt="GitHub" width="40"/>
            </a>
            <a href="https://www.linkedin.com/in/reznik-do/">
                <img src={Linkedin} alt="Linkedin" width="40"/>
            </a>
        </div>
    </div>
}