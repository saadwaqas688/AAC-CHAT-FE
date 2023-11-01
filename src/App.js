import { useEffect, useState } from 'react';
import './App.css';
import ChatApp from './ChatApp';
import { chatData, exampleChat, exampleMessage, exampleReactionOnMessage } from './chatData';
import io from "socket.io-client";
import MessageForm from './MessageForm';


function App() {

  const [socket,setSocket]=useState()
  const [userId,setUserId]=useState()

  const [state, setState] = useState({});

  const [isTyping, setIsTyping] = useState(false);

  const handleTypingStart = () => {
    socket.emit("start-typing", {receiverId: parseInt(state.receiverId)});
    setIsTyping(true)
  };

  const handleTypingStop = () => {
    socket.emit("stop-typing",{receiverId: parseInt(state.receiverId)});
    setIsTyping(false)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const exampleDeleteMessage = {
    chatId:'653a2557c55c6c862e6431be',
    userId: userId,
    receiverId:parseInt(state.receiverId),
    _id: '653a25f5c55c6c862e6431c2',
    isRead: true,
    text: state.text,
    media: ['mediaUrl1', 'mediaUrl2'],
    reaction: 'thumbsUp',
    parentMessage: {},
  }

  // Replace with the actual user ID
  useEffect(() => {

    if(!socket){



      const res = io.connect("http://localhost:8080",{
        auth: {
          userId: Math.floor(Math.random() * 10 ) // Replace with the actual user I

        }
      });

      setSocket(res)

      res.on("onStatusChange", (payload) => {
      console.log('called',payload)
      setUserId(payload.id)
      });

    }
      }, []);

      const sendMessage=()=>{
        socket.emit("add-message", exampleMessage(userId,state));
      }

      const createNewChat=()=>{
        socket.emit("create-new-chat", exampleChat(userId,state));
      }


      const deleteMessage=()=>{
        socket.emit("delete-message", exampleDeleteMessage);
      }
      const reactionOnMessage=()=>{
        socket.emit("reaction-on-message", exampleReactionOnMessage(userId,state));
      }
      const joinGroup=()=>{
        socket.emit("user-group-join", state.receiverId);
      }
      if(socket){
        socket.on("on-message-received", (payload) => {
          console.log('message received',payload)
          });
      }

      if(socket){
        socket.on("on-new-chat", (payload) => {
          console.log('new chat created',payload)
          });
      
        socket.on("on-message-delete", (payload) => {
          console.log('message deleted',payload)
          });

        socket.on("on-typing-start", (payload) => {
          console.log('user is typing',payload)
          });

        socket.on("on-typing-stop", (payload) => {
              console.log('user is stoped typing',payload)
            });
        socket.on("on-status-change", (payload) => {
              console.log('user is online ',payload)
              });
        socket.on("on-typing-stop", (payload) => {
              console.log('user is stoped typing',payload)
                });
        socket.on("on-message-reaction", (payload) => {
              console.log('get reaction on message',payload)
                  });

        socket.on("on-group-join", (payload) => {
                    console.log('user Group Join',payload)
                        });        
      }


      console.log(state)

  return (
    <div className="App">
    <div className="App">
      {/* <ChatApp chatData={chatData} /> */}
      {/* <MessageForm/> */}
      <button type="button" onClick={sendMessage}>Send Message</button>
      <button type="button" onClick={createNewChat}>Create New Chat</button>
      <button type="button" onClick={deleteMessage}>delete message</button>
      <button type="button" onClick={reactionOnMessage}>reaction on message</button>
      <button type="button" onClick={joinGroup}>join group</button>




      <div>
      <div>
        <label htmlFor="receiverId">receiver id:</label>
        <input
          type="text"
          id="receiverId"
          name="receiverId"
          value={state.receiverId}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          name="text"
          value={state.text}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="text">chatId:</label>
        <input
          type="text"
          id="chatId"
          name="chatId"
          value={state.chatId}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="messageId">messageId:</label>
        <input
          type="text"
          id="messageId"
          name="messageId"
          value={state.messageId}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="groupId">groupId:</label>
        <input
          type="text"
          id="groupId"
          name="groupId"
          value={state.groupId}
          onChange={handleInputChange}
        />
      </div>
      <div>
  <label htmlFor="reaction">reaction:</label>
  <select
    id="reaction"
    name="reaction"
    value={state.reaction}
    onChange={handleInputChange}
  >
    <option value="thumbsup">thumbs up</option>
    <option value="heart">heart</option>
    <option value="sadimojy">sad imojy</option>
  </select>
</div>
    </div>
    <h1>senderId :{userId}</h1>
    <h1>receiverId :{state.receiverId}</h1>


    </div>
    <div>
      {/* Chat messages display */}
      {isTyping && <div>User is typing...</div>}
      {/* Chat input */}
      <input
        type="text"
        placeholder="Type a message..."
        onInput={() => handleTypingStart()}
        onBlur={() => handleTypingStop()}
      />
    </div>
    </div>
  );
}

export default App;
