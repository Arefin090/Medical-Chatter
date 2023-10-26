import React from 'react'
import {StreamChat} from 'stream-chat';
import {Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { ChanelListContainer, ChanelContainer } from './components';
import './App.css';

const apiKey = 'b246gwqqdwtd';
const client = StreamChat.getInstance(apiKey);
const App = () => {
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChanelListContainer

        />
        <ChanelContainer

        />
      </Chat>
    </div>
  )
}

export default App

