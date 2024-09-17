import reactLogo from './assets/react.svg'
import TitleQuest from './components/title/title'
import UpperCaseText from './components/text/uppercasetext'
import zenetsu from './img/zenetsu.jpg'
import Buttons from './components/buttons/bottons'

import './App.css'

function App() {

  return (
    <>
      <div className="logo">
        <img src={reactLogo} className="logo React" alt="React logo" />
      </div>
      <div className="main">
        <TitleQuest />
        <UpperCaseText text="Se você só sabe fazer um coisa, seja mestre nela." />
        <img src={zenetsu} className="avatar-zenetsu" alt="Img Zenetsu" />
      </div>
      <Buttons/>
    </>
  )
}


export default App
