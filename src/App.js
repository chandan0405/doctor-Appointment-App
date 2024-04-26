import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { ChannelContainer, ChannelListContainer, Auth } from './components';

const App = () => {
  const api_key = 'jrnh727wwshs';
  const client = StreamChat.getInstance(api_key);
  const authToken= false;
    if(!authToken)
    {
      return <Auth />
    }
  return (
    <div className='app__wrapper'>
      <Chat client={client} theme='team light'>
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  )
}

export default App