import React, { useState } from 'react';

const ChatApp = ({ chatData }) => {
  const userColorMapping = {
    user1: 'user1-message',
    user2: 'user2-message',
    // Add more users and corresponding classes here
  };

  const [selectedChat, setSelectedChat] = useState(null);

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Center content vertically in the viewport
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>Chat IDs</h1>
        <ul>
          {chatData.map((chat) => (
            <li key={chat.chatId}>
              <button onClick={() => handleChatClick(chat.chatId)}>
                {chat.chatId}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedChat && (
        <div>
          <h2>Selected Chat ID: {selectedChat}</h2>
          <div>
            {chatData
              .find((chat) => chat.chatId === selectedChat)
              .conversation.map((message, index) => (
                <div
                  key={index}
                  className={`message ${userColorMapping[message.userId]}`}
                  style={{ height: '100px', width: '300px'}} // Set the desired height and widt
                >
                  <p>User ID: {message.userId}</p>
                  <span className="message-text">{message.text}</span>
                  {message.media && (
                    <img
                      src={message.media.imageUrl}
                      alt="Media"
                      style={{ maxWidth: '50%', maxHeight: '50%', display: 'flex',
                      alignItems: 'flex-end'}}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatApp;
