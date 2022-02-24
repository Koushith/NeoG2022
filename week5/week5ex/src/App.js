import './App.css';
import { BackgroundColor } from './components/background-color';
import { PasswordMatch } from './components/passwordmatch';
import { Tweet } from './components/tweet';
import { LogCount } from './components/useEffect/depArr/ex1';
import { ButtonCount } from './components/useEffect/ex1';
import OutPut from './components/useEffect/ex2';
import { WishList } from './components/useEffect/ex3-localstorage';

function App() {
  return (
    <div className='App'>
      {/* <BackgroundColor /> */}
      {/* <Tweet /> */}
      {/* <PasswordMatch /> */}
      {/* <ButtonCount /> */}
      {/* <OutPut /> */}

      {/* <WishList /> */}
      <LogCount />
    </div>
  );
}

export default App;
