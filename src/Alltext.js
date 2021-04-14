import me from './img/me.png'
import Point from './img/point.png'
import wave from './img/wave.png'

import Images from './images';
import NewsletterButton from './newsletterButton';
import NavBar from './navBar';

function Alltext() {
    return (
    <div className = "container">
        <div className = "block2">
            <div className = "Header">
            <text>Hey! I’m Evan. Welcome <br/>to my website! </text>
            </div>
            <div><img className = "Wave" src={wave} alt="Logo" /></div>
        </div>



    <div className = "block5">
        <div className = "Header1">
            <text>About Me:</text>
        </div>
        <div className = "subtext1">
            <text>The life I want to avoid for the future is one knowing
             that I haven’t <br/>impacted a community to my greatest efforts. 
             I want to build a legacy<br/> for myself by successfully changing
              the lives of others for the better.</text>
        </div>
    </div>



    <div className = "block6">
        <div className = "Header2">
            <text>Who?</text>
        </div>

        <div className = "subtext2">
            <text>
            I am a Content creator, UI/UX designer, and a Machine learning developer.
            </text>
        </div>
    </div>




    <div className = "block7">
        <div className = "Header3">
            <text>Past Exp.</text>
        </div>
            <div className = "pastExp">
            <ul>
                <li>Invited Speaker at IBM CASCON EVOKE </li>
                <li>Sent a Recommendation Deck to Instacart </li>
                <li>Built a Live Hand-drawn Digit Classifier GUI </li>
                <li>Built a Sentiment Analysis Web App </li>
                <li>DECA International (ICDC) Qualifier </li>
                <li>Completed 15 Datacamp Courses </li>
            </ul>
            </div>
        </div>



    <div className = "block8">
        <div className = "Header4">
            <text>Current Exp.</text>
        </div>
            <div className = "currentExp">
                <ul>
                    <li>Innovator at TKS (The Knowledge Society)</li>
                    <li>NLP Intern at Vocinity Inc.</li>
                    <li>Building Machine Learning Web Apps</li>
                    <li>Writer for multiple publications on Medium</li>
                    <li>Finding a solution with the United Nations to bring more female involvement in 3rd world countries into the digital economy</li>
                </ul>
            </div>
        </div>

    <Images/>
    <NewsletterButton/>
    <NavBar/>
    </div>

    );
}

export default Alltext;