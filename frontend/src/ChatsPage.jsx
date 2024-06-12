import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '4345cee0-6c37-4965-a937-59aa75b68e4a',
        props.user.username,
         props.user.secret
        );
    return (
    <div style={{ height: '100vh' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        
    </div>
    )
}

export default ChatsPage;