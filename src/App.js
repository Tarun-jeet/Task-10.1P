import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ArticleArray from './components/ArticleArray';
import TutorialArray from './components/TutorialArray';
import Subscription from './components/Subscription';
import Bottom from './components/Bottom';

function App() {
  return (
    <>
      <Navbar title="DEV@Deakin" two="POST" one="LOG IN" place="Search..." />
      <Header />
      <ArticleArray />
      <TutorialArray />
      <Subscription />
      <Bottom />
    </>
  );
}

export default App;
