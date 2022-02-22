import './App.css';
import { BackgroundColor } from './components/background-color';
import { PasswordMatch } from './components/passwordmatch';
import { Tweet } from './components/tweet';

function App() {
  return (
    <div className='App'>
      {/* <BackgroundColor /> */}
      {/* <Tweet /> */}
      <PasswordMatch />
    </div>
  );
}

export default App;
