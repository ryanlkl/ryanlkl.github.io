import './aboutMe.css'
import Portrait from './portrait.jpg'

export default function Resume() {
  return (
    <>
      <div className='resume'>
        <h1>About Me</h1>
        <h2>Hi! I'm Ryan :)</h2>
        <img className='portrait' src={Portrait} alt='portrait'/>
        <p> I am a 3rd year Mechanical Engineering w Year in Computer Science student at the University of Birmingham!</p>
        <p>I am a freelance frontend web developer aiming to move to full-stack.</p>
      </div>
    </>
  )
}
