import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./chatSlice";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F0F0F",
  },

  componentWrapper: {
    width: "600px",
    height: "600px",
    display: "flex",
    flexDirection: "column",
  },
}));

const sendMessageWithThunk = (message) => (dispatch, getState) => {
  const { chat } = getState();
  console.log('CHAT',chat.messages[3])
  const myId = chat.myId;
  dispatch(addMessage(message));
  if (message.authorId === myId) {
    const botMessage = {
      chatId: message.chatId,
      messageText: "Hello, I'm Ivan Kozhan!!!!",
      authorId: message.chatId,
    };
    setTimeout(() => dispatch(addMessage(botMessage)), 1500);
  }
};

function Chat() {
  const urlParams = useParams();
  // console.log(urlParams)
  const chatId = Number.parseInt(urlParams.id);
  // console.log(chatId)

  const messages = useSelector((state) => state.chat.messages[chatId]);
  const myId = useSelector((state) => state.chat.myId);
  console.log(myId)
  const dispatch = useDispatch();

  const classes = useStyles();

  const onSendMessage = (messageText) => {
    dispatch(sendMessageWithThunk({ chatId, messageText, authorId: myId }));
  };

  return (
    <div className={classes.chatWrapper}>
      <div className={classes.componentWrapper}>
        <MessageList messagesArray={messages} />
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    </div>
  );
}

export default Chat;
