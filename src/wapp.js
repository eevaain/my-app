import Alltext from './Alltext';
import Images from './images';
import wapp from './wapp.css';
import NavBar from './navBar';
import NewsletterButton from './newsletterButton';

function App() {
  return (
    <div className="App">
      <Alltext/>
      <Images/>
      <NavBar/>
      <NewsletterButton/>
    </div>

  );
}

export default App;
