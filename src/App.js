import logo from './logo.svg';
import './App.css';
import ImageGallery from './ImageGallery';


function App() {
  //links array to access the images from URLs
  const links = ["https://www.testdome.com/files/resources/12362/aff5c408-79f8-4220-9769-8b4cde774c98.jpg", "https://bit.ly/3flyaMj"];

  return (
    <div className="App">
      <ImageGallery links={links}/>
    </div>
  );
}

export default App;
