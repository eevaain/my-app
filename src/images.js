import self from './img/logo.png'
import me from './img/me.png'
import circle from './img/circle.png'
import Point from './img/point.png'

function Images () {
    return(

    <div>
    <img className = "self" src={self} alt="Logo" />
    <img className = "me" src={me} alt="Logo" />
    <img className = "circle" src={circle} alt="Logo" />
    <img src = {Point} className = "Pointer"/>
    </div>

    );
}

export default Images;