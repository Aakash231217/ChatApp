import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = ()=>{
    if(!localStorage.getItem('username'))return <LoginForm/>
    return (
        <ChatEngine
            height = "100vh"
            projectID = "86d99a9d-1fb5-458a-9faa-4298f9987ff5"
            userName = {localStorage.getItem('username')}
            userSecret ={localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps)=><ChatFeed {...chatAppProps}/>}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}
export default App;