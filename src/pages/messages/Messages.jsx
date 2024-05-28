import React from 'react'
import { Link } from 'react-router-dom';
import "./Messages.scss"

const Messages = () => {
  return (
    <div className='messages'>
      <div className='container'>
        <span className='breadcrumbs'>
          <Link to="/messages">Messages</Link> JOHN DOE 
        </span>
        <div className='message'>
          <div className='item'>
            <img src='https://i.pinimg.com/564x/8b/1f/9f/8b1f9f145889835124f968a6aa82b79f.jpg' alt=''/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut gravida lorem. Cras posuere leo mauris, a accumsan enim dignissim a. Suspendisse pharetra semper faucibus. Quisque tincidunt nisl sit amet massa tristique convallis. </p>
          </div>
          <div className='item owner'>
            <img src='https://i.pinimg.com/564x/8b/1f/9f/8b1f9f145889835124f968a6aa82b79f.jpg' alt=''/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut gravida lorem. Cras posuere leo mauris, a accumsan enim dignissim a. Suspendisse pharetra semper faucibus. Quisque tincidunt nisl sit amet massa tristique convallis. </p>
          </div>
          <div className='item'>
            <img src='https://i.pinimg.com/564x/8b/1f/9f/8b1f9f145889835124f968a6aa82b79f.jpg' alt=''/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut gravida lorem. Cras posuere leo mauris, a accumsan enim dignissim a. Suspendisse pharetra semper faucibus. Quisque tincidunt nisl sit amet massa tristique convallis. </p>
          </div>
          <div className='item owner'>
            <img src='https://i.pinimg.com/564x/8b/1f/9f/8b1f9f145889835124f968a6aa82b79f.jpg' alt=''/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut gravida lorem. Cras posuere leo mauris, a accumsan enim dignissim a. Suspendisse pharetra semper faucibus. Quisque tincidunt nisl sit amet massa tristique convallis. </p>
          </div>
          <div className='item'>
            <img src='https://i.pinimg.com/564x/8b/1f/9f/8b1f9f145889835124f968a6aa82b79f.jpg' alt=''/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut gravida lorem. Cras posuere leo mauris, a accumsan enim dignissim a. Suspendisse pharetra semper faucibus. Quisque tincidunt nisl sit amet massa tristique convallis. </p>
          </div>
          <div className='item owner'>
            <img src='https://i.pinimg.com/564x/8b/1f/9f/8b1f9f145889835124f968a6aa82b79f.jpg' alt=''/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut gravida lorem. Cras posuere leo mauris, a accumsan enim dignissim a. Suspendisse pharetra semper faucibus. Quisque tincidunt nisl sit amet massa tristique convallis. </p>
          </div>
        </div>
        <hr/>
        <div className='write'>
          <textarea name='' placeholder='write a message' id='' cols={30} rows={10}></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Messages