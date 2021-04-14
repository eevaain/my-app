import me from './img/me.png'


function Images () {
    return(
// <> Fragments wrap export together into one thingy
<>
    <div className = "block3">
        <div className = "Circle"/>
        <img className = "me" src={me} alt="Logo" />

    </div>
</>

    );
}

export default Images;