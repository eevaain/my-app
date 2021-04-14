import self from './img/logo.png'
import me from './img/me.png'
import Point from './img/point.png'
import wave from './img/wave.png'

function Images () {
    return(

    <div>
        <div><img className = "Wave" src={wave} alt="Logo" /></div>
        <div><img className = "self" src={self} alt="Logo" /></div>
        <div><img className = "me" src={me} alt="Logo" /></div>
        <div><img src = {Point} className = "Pointer"/></div>
        <div><div className = "Circle"/></div>
    </div>

    );
}

export default Images;