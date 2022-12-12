import { FaPlay } from 'react-icons/fa';
import "./Hero.css"
import Poster from "../../../assets/Poster.png" 

function Hero() {
  return (
    <div className="hero">
        {/*Up div*/}
         <div className="hero_text_cont">
          <h1 className="hero_text_h1">John Wick 3 : Parabellum</h1>
          <div></div>
          <p className="hero_text_p">John Wick is on th run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
          <button className="hero_text_btn"><FaPlay />WATCH TRAILER</button>
         </div>
        {/*down div*/}
         <div className="hero_image">
           <img src={Poster} alt="poster" />
         </div>
    </div>
  );
}

export default Hero;
