import styles from "./Home.module.css";
import GoogleLoginButton from "./GoogleLoginButton";
import { GoogleOAuthProvider, Google ,useAuth} from '@react-oauth/google';
import HomeButton from "./HomeButton";
import GoogleLogoutButton from "./GoogleLogoutButton";


const Home = () => {
  return (
    <GoogleOAuthProvider clientId="890593488111-o10mtf4ka43e97vdnntv1cev714ipo64.apps.googleusercontent.com">
    <div className={styles.home}>
      <div className={styles.yourYoutubeAiAssistantWrapper}>
        <b className={styles.yourYoutubeAiContainer}>
          <p className={styles.yourYoutubeAi}>{`Your Youtube AI`}</p>
          <p className={styles.yourYoutubeAi}> Assistant</p>
        </b>
      </div>
      <img className={styles.homeChild} alt="" src="/frame-33@2x.png" />
      <div className={styles.imHereToHelpYouWithWhatParent}>
        <div className={styles.imHereTo}>
          I'm here to help you with whatever you need, from answering questions
          to providing recommendations. We just need to access your google
          account to get going
        </div>
       
        <GoogleLoginButton />
      </div>
      <HomeButton/>
      {/* <img className={styles.userCirleIcon} alt="" src="/usercirle.svg" />
      <img className={styles.iconfillmenu} alt="" src="/iconfillmenu1.svg" /> */}
      {/* <GoogleLogoutButton/> */}
    </div>
    </GoogleOAuthProvider>
  );
};

export default Home;
