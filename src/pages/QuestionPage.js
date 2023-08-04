import React, { useState, useRef, useEffect } from 'react';
import styles from './QuestionPage.module.css';
import { useLocation } from 'react-router-dom';

import httpRequest from '../services/api';
import HomeButton from './HomeButton';
import GoogleLogoutButton from "./GoogleLogoutButton";
import config from '../config';

import { CircularProgress as MuiCircularProgress } from '@mui/material';





const QuestionPage = () => {
  const { apiUrl } = config[process.env.NODE_ENV || 'development'];
  const defaultQuestion = 'Analyse youtube channel'; // Define your default question here
  

  const location = useLocation();
  
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);
  const [channelId, setChannelid] = useState('');
  const [loading, setLoading] = useState(false);
  console.log(location)
  const { accessToken } = location.state;
  const {channel_dict}=location.state
  console.log(accessToken)
  
  // const channel_dict = accessToken.data.channel_dict
  console.log("quetio chanlle id")
  console.log(channel_dict)
  const channelName = channel_dict.title.toUpperCase();
  const subscribers=channel_dict.subscribers
  const videos = channel_dict.videos
  const views = channel_dict.views
  useEffect(() => {
    const sendDefaultQuestion = async () => {
      try {
        const response = await httpRequest(`${apiUrl}/question`, 'POST', { 'retry': false, 'question': defaultQuestion, 'channelId': '', 'accessToken': accessToken }, { 'Content-Type': 'application/json' });
        const answer = response.message;
        setConversation((prevConversation) => [
          ...prevConversation,
          { sender: 'bot', message: answer },
        ]);
      } catch (error) {
        console.error('An error occurred:', error);
        const errorMessage = "System is overloaded, try again later";
        alert(errorMessage);
      }
    };

    // Send the default question when the question page opens
    setConversation((prevConversation) => [
      ...prevConversation,
      { sender: 'user', message: defaultQuestion },
    ]);

    sendDefaultQuestion();
  }, []);
  
  const [conversation, setConversation] = useState([
    // Default conversation messages
    
    { sender: 'user', message: `Greetings, Creator of  \n ${channelName}!` },
    { sender: 'user', message: 'Using our advanced AI technology, we have thoroughly analyzed your data' },
   


  ]);
  // const access_token = accessToken.data.headers
  console.log("my chanel if and access")
  console.log(accessToken)
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
    // setChannelid(channel_id)
    try {
      console.log("userMessageuserMessage")
      console.log(userMessage)
      const e = await httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/question', 'POST', { 'retry':false,'question': userMessage, 'channelId': '', 'accessToken': accessToken }, { 'Content-Type': 'application/json' });
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
      
    }
  
  };

  
  
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
              {/* <div className={styles.chatBubblerecevedreceivedChild} /> */}
              <div className={styles.frameGroup}>
                <div className={styles.iconoutlinelikeParent}>
                  {/* <img className={styles.iconoutlinelike} alt="" src="/iconoutlinelike.svg" /> */}
                  {/* <img className={styles.iconoutlinelike} alt="" src="/iconoutlinedislike.svg" /> */}
                </div>
                <div className={styles.iconfillclipboardParent}>
                  {/* <img className={styles.iconfillclipboard} alt="" src="/iconfillclipboard.svg" /> */}
                  {/* <div className={styles.copy}>Copy</div> */}
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
          <div className={styles.alwaysActive1}>Always active </div>
          
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
