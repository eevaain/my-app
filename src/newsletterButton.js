const redirectMe = (url) => {
        
    // Opens new tab 
    window.open(url);
    
}

function NewsletterButton () {
    return (
        <button onClick = {() => redirectMe('https://tks.life/profile/evan.lin#about')}
        className = "NewsletterButton">
            Follow my Newsletter!
        </button>
    );
}

export default NewsletterButton
