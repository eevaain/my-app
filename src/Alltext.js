import wave from './img/wave.png'

function Alltext() {
    return (
        <div>
        <div className = "Header">
            <text>
            Hey! I’m Evan. Welcome <br/>to my website! 
            </text>
            <img className = "wave" src={wave} alt="Logo" />
        </div>

        <div className = "subtext1">
            <text>
            The life I want to avoid for the future is one knowing
             that I haven’t <br/>impacted a community to my greatest efforts. 
             I want to build a legacy<br/> for myself by successfully changing
              the lives of others for the better.
            </text>
        </div>

        <div className = "Header2">
            <text>
                Who?
            </text>
        </div>

        <div className = "subtext2">
            <text>
            I am a Content creator, UI/UX designer, and a Machine learning developer.
            </text>
        </div>

        <div className = "Header3">
            <text>
                Past Exp.
            </text>
        </div>

        <div className = "Header4">
            <text>
                Current Exp.
            </text>
        </div>

        <div className = "pastExp">
                <ul>- Invited Speaker at IBM CASCON EVOKE </ul>
                <ul>- Sent a Recommendation Deck to Instacart </ul>
                <ul>- Built a Live Hand-drawn Digit Classifier GUI </ul>
                <ul>- Built a Sentiment Analysis Web App </ul>
                <ul>- DECA International (ICDC) Qualifier </ul>
                <ul>- Completed 15 Datacamp Courses </ul>
        </div>

        <div className = "currentExp">
                <text>- Innovator at TKS (The Knowledge Society)
                    <br/>
                - Intern at Vocinity Inc.
                    <br/>
                - Building Machine Learning Web Apps
                    <br/>
                - Writer for multiple publications on Medium
                    <br/>
                - Finding a solution with the United Nations to bring more female involvement in 3rd world countries into the digital economy</text>
        </div>

        </div>
    );
}

export default Alltext;