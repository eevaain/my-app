import self from './img/logo.png'

const redirectMe = (url) => {
    // Opens new tab 
    window.open(url);
}

function NewsletterButton () {
    return (
    <>
        <div className = "block1">
            <img className = "self" src={self} alt="Logo" />
        </div>
            <div className = "block9">
                <button onClick = {() => redirectMe('https://tks.life/profile/evan.lin#about')} className = "NewsletterButton">
                    Follow my Newsletter!
                </button>
            </div>
 
    </>

    );
}

export default NewsletterButton;
