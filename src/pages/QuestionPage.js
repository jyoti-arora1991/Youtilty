import React, { useState, useRef } from 'react';
import styles from './QuestionPage.module.css';
import { useLocation } from 'react-router-dom';

import httpRequest from '../services/api';
import HomeButton from './HomeButton';
import GoogleLogoutButton from "./GoogleLogoutButton";
import { Typography,InputAdornment, IconButton, TextField,ListItemText,ListItem, Divider, Box, createTheme, CircularProgress } from '@mui/material';

import Autocomplete from '@mui/material/Autocomplete';
import { Send } from '@mui/icons-material';
import { CircularProgress as MuiCircularProgress } from '@mui/material';





const QuestionPage = () => {
  const location = useLocation();
  const [conversation, setConversation] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const [channelId, setChannelid] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(location)
  const { accessToken } = location.state;
  console.log(accessToken)
  
  const channel_id = accessToken.data.channelId
  const access_token = accessToken.data.headers
  console.log("my chanel if and access")
  console.log(access_token)
  console.log(channel_id)
  console.log("my chanel if and access1")


  const handleAskMeAnythingClick = () => {
    setIsTyping(true);
    inputRef.current.focus();
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };
  const handleInputKeyPress = async (event) => {
    let userMessage='';
    if (event.key === 'Enter' || event.type === 'click' ){
      userMessage = inputRef.current.value.trim();
      console.log("userMessage")
      console.log(userMessage)
      if (userMessage !== '') {
        setConversation((prevConversation) => [
          ...prevConversation,
          { sender: 'user', message: userMessage },
        ]);
        inputRef.current.value = ''; 
      }
      setIsTyping(false);
      setLoading(true);

    }
    // let accessToken='ya29.a0AWY7CkmrQ3nWhGC6G7N-px0a95H78T-ELzndBwC0jD6k0ZFm5Uvqd3JDWM9OufpogPquVXTm6QfolTxsZB90hIxBNx-5gIa4Wo5yRbGsh5GGoH9FMXGoHl3YgE1upoJ2pQsR8wsDhMk0afnmHZFwjUJeJID6-QaCgYKAT0SARMSFQG1tDrpM8-_O_zm4_Wh7mskzYHKlA0165';
    // let channel_id='UCcA80NqKraq7phtzMMgP4nw';
    setChannelid(channel_id)
    // const e = await httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question', 'POST', { 'retry':false,'question': userMessage, 'channelId': channel_id, 'accessToken': access_token }, { 'Content-Type': 'application/json' });
    try {
      console.log("userMessageuserMessage")
      console.log(userMessage)
      const e = await httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question', 'POST', { 'retry':false,'question': userMessage, 'channelId': channel_id, 'accessToken': access_token }, { 'Content-Type': 'application/json' });
      // Handle the response here if the request is successful
      console.log("answer")
    console.log(e.message)
    const ans=e.message
    setLoading(false)
    setConversation((prevConversation) => [
                  ...prevConversation,
                  { sender: 'bot', message: ans },
                ]);
    } catch (error) {
      setLoading(false)
      console.error('An error occurred:', error);
      const err1="System is overloaded, try again later"
      alert(err1)
      // setConversation((prevConversation) => [
      //   ...prevConversation,
      //   { sender: 'bot', message: err1 },
      // ]);
      // Handle the error here
    }
  //   console.log("answer")
  //   console.log(e.message)
  //   const ans=e.message
  //   setLoading(false)
  //   setConversation((prevConversation) => [
  //                 ...prevConversation,
  //                 { sender: 'bot', message: ans },
  //               ]);

  //   // await fetchAns();
  };

  // const fetchAns = async () => {
  //   const timeout =  120000; 
  //   const retryInterval = 10000; // 10 seconds (modified value)
  //   const startTime = Date.now();
  
  //   while (Date.now() - startTime < timeout) {
  //     try {
  //       const requestPromise = httpRequest(
  //         'https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/get_ans',
  //         'POST',
  //         { 'channelId':'UCcA80NqKraq7phtzMMgP4nw' },
  //         { 'Content-Type': 'application/json' },
  //         retryInterval
  //       );
  
  //       const response = await requestPromise;
  //       console.log("response.data")
  //       console.log(response.data)
  
  //       if (response && response.data) {
  //         const ans = response.data;
          
  //         console.log("issub1")
  //         console.log(response.data)
  //         console.log("issub2")
  //         // setPT(Date.now() - startTime)

  //         console.log("and")
  //         console.log(ans)
  //           setConversation((prevConversation) => [
  //             ...prevConversation,
  //             { sender: 'bot', message: ans },
  //           ]);
  //         console.log("Received ans:", ans);
  //         setLoading(false);

  //         return; // Exit the function since we received the answer
          
  //       }
  //       else if (response.status === 500) {
  //           console.log("AI not able to process the request right now")
  //       } 
  //       else {
  //         console.log("Request submitted");
  //         // Handle the case when the request is submitted but no answer is received
  //       }
  //     } catch (error) {
  //       console.log("Error occurred:", error.message);
  //       // Handle the case when the request times out
  //     }
  
  //     await new Promise(resolve => setTimeout(resolve, retryInterval)); // Wait for the specified retry interval before the next iteration
  //   }
  //   setLoading(false)
    
  //   console.log("Errir while processing your request")
  //   throw new Error("Request timeout"); // Throw an error if no response received within one minute
  // };
  
  const Suggestions = [
    "Help me identify any issues in my channel and provide suggestions for improvement?",
    "Determine the demographic of people who are enjoying my videos?",
    "Why some of my videos aren't very popular. Any insights or suggestions?",
    "What strategies do you recommend that would be effective for my channel?",
    "Which days would be the best for me to upload my videos considering the analysis of engagement and views?",
    "Aanalyze my videos and let me know which types are receiving the most views.",
    "Based on the comparative analysis, what successful strategies or areas for improvement can you identify for my channel?",
    "Can you provide insights on the traffic sources that are driving viewers to my channel and suggest strategies to optimize promotion?",
    "What actions can I take to improve viewer retention and keep my audience engaged throughout my videos?",
    "Could you elaborate on the types of videos that are receiving more views and provide further insights on what makes them successful?",
    "What is the ideal video length that I should aim for to maximize viewer engagement?",
    "How can I optimize my video thumbnails to increase click-through rates and attract more viewers?",
    "Are there any specific trends or emerging topics that you recommend I explore in my content creation?",
    "Can you suggest any tools or resources that would be helpful for implementing the recommended strategies?"
  ];
  const handleInputChange = (event, value) => {
    console.log("getting clled now")
    setInputValue(value || event.target.value);
  };

  return (
    <div className={styles.questionPage}>
  <div className={styles.frameParent}>
    <div className={styles.conversationContainer}>
      {conversation.map((message, index) => (
        <div
          key={index}
          className={
            message.sender === 'user' ? styles.chatBubblesenddefaultParent : styles.chatBubblerecevedreceived
          }
        >
          {message.sender === 'user' ? (
            <div className={styles.chatBubblesenddefault}>
              <div className={styles.howAreYou}>{message.message}</div>
            </div>
          ) : (
            <>
              <div className={styles.asAnAi}>{message.message}</div>
              <div className={styles.chatBubblerecevedreceivedChild} />
              <div className={styles.frameGroup}>
                <div className={styles.iconoutlinelikeParent}>
                  <img className={styles.iconoutlinelike} alt="" src="/iconoutlinelike.svg" />
                  <img className={styles.iconoutlinelike} alt="" src="/iconoutlinedislike.svg" />
                </div>
                <div className={styles.iconfillclipboardParent}>
                  <img className={styles.iconfillclipboard} alt="" src="/iconfillclipboard.svg" />
                  <div className={styles.copy}>Copy</div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
  <div className={styles.iconfillmenuParent}>
    {/* <img className={styles.iconfillmenu} alt="" src="/iconfillmenu.svg" /> */}
    <HomeButton />
    <div className={styles.fitbot}>
      <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
      <div className={styles.nameActivity}>
        <b className={styles.youtility}>Youtility</b>
        <div className={styles.alwaysActive}>
          <div className={styles.alwaysActiveChild} />
          <div className={styles.alwaysActive1}>Always active</div>
        </div>
      </div>
      {/* <GoogleLogoutButton/> */}
    </div>
    <GoogleLogoutButton className={styles.hugeIconusersoliduserCirc}/>
    {/* <img className={styles.hugeIconusersoliduserCirc} alt=""  /> */}
  </div>
  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
  <div className={styles.frameContainer}>
    <input
      ref={inputRef}
      className={`${styles.askMeAnythingParent} ${isTyping ? styles.typing : ''}`}
      onClick={handleAskMeAnythingClick}
      contentEditable={isTyping}
      placeholder={isTyping ? null : 'Ask me anything...'}
    />
      {loading && !isTyping ? (
  <div className={styles.loadingIndicator}>
    <MuiCircularProgress size={24} />
  </div>
) : (
  <img className={styles.sendIcon} alt="" src="/send.svg" onClick={handleInputKeyPress} />
)}
     
  </div>
</div>

  );
};

 export default QuestionPage;
