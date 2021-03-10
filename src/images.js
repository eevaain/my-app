import self from './img/logo.png'
import me from './img/me.png'
import circle from './img/circle.png'
import Point from './img/point.png'
import wave from './img/wave.png'

function Images () {
    return(

    <div>

    <img className = "Wave" src={wave} alt="Logo" />
    <img className = "self" src={self} alt="Logo" />
    <img className = "me" src={me} alt="Logo" />
    <img src = {Point} className = "Pointer"/>
    <div className = "Circle"/>

    </div>

    );
}

export default Images;