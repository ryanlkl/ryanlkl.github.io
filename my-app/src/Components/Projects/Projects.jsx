import './Projects.css'
import DaysofCode from './DaysofCode.jpeg'

export default function Projects() {
    return (
        <section className='projects'>
            <h1>Projects</h1>
            <div>
                <h2>100 Days of Code: Python</h2>
                <img className="images" src={DaysofCode} alt="100 Days of Code"/>
                <p>Follow me on my 100 Days of Code journey with the amazing Angela Yu!</p>
                <a href="https://twitter.com/rynlkl" target="_blank" rel="noreferrer">Twitter</a><br />
                <a href="https://github.com/ryanlkl/100-Days-Of-Code" target="_blank" rel="noreferrer">Github repo</a>
            </div>
            <div className="commandgames">
                <h2>Command Line Games</h2>
                <p>*Here I will insert buttons that allow the user to play python games using flask</p>
            </div>
        </section>
    )
}
