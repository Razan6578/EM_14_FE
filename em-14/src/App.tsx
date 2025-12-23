
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MessageBlock from './components/MessageBlock'
import { textFix } from './fixtures/messageBlockFix'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {textFix.map((block, index) => (
        <MessageBlock
          key={index}
          id={block.id}
          time={block.time}
          author={block.author}
          text={block.text}
          isOwner={block.isOwner}
        />
      ))}

    </>
  )
}

export default App
