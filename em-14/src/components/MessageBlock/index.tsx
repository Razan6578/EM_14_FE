import './style.css'
import type { MessageBlockProps } from '../../types/messageBlockTypes';

const MessageBlock = (props:MessageBlockProps) =>{


  return (
    <div className={`message-block ${props.isOwner ? 'owner' : 'guest'}`}>
      <div className='message-block-nickname'>
        <h2>{props.author}</h2>
      </div>
      <div className='message-block-content'>
        <p>{props.text}</p>
      </div>
      <div className='message-block-bottom'>
        <p> {props.time} </p>
      </div>


    </div>
  )
}


export default MessageBlock