import styles from "./First.module.css";
import {Box} from '@mui/material';
const First = () => {
  return (
    <Box className={styles.first}>
      <Box>
      <img
        className={styles.welcomeShadowIcon}
        alt=""
        src="/welcome-shadow@2x.png"
      />
      </Box>
      <Box className={styles.partyConfettis}>
        <img className={styles.ball1Icon} alt="" src="/ball-1@2x.png" />
        <img className={styles.ball1Copy} alt="" src="/ball-1-copy@2x.png" />
        <img className={styles.ball2Icon} alt="" src="/ball-2@2x.png" />
        <img
          className={styles.partyConfettisChild}
          alt=""
          src="/star-3@2x.png"
        />
        <img className={styles.square7Icon} alt="" src="/square-7@2x.png" />
        <img className={styles.square6Icon} alt="" src="/square-6@2x.png" />
        <img className={styles.confetti4Icon} alt="" src="/confetti-4@2x.png" />
        <img className={styles.confetti3Icon} alt="" src="/confetti-3@2x.png" />
        <img className={styles.confetti2Icon} alt="" src="/confetti-2@2x.png" />
        <img className={styles.square5Icon} alt="" src="/square-5@2x.png" />
        <img className={styles.square4Icon} alt="" src="/square-4@2x.png" />
        <img className={styles.square3Icon} alt="" src="/square-3@2x.png" />
        <img className={styles.square2Icon} alt="" src="/square-2@2x.png" />
        <img className={styles.square1Icon} alt="" src="/square-1@2x.png" />
        <img className={styles.confetti1Icon} alt="" src="/confetti-1@2x.png" />
        <img
          className={styles.partyConfettisItem}
          alt=""
          src="/star-1@2x.png"
        />
      </Box>
      <Box className={styles.youtilityParent} id="title">
        <Box className={styles.youtility}>YOUTILITY</Box>
        <b className={styles.unleashYourYoutubeContainer}>
          <p className={styles.unleashYourYoutube}>UNLEASH YOUR YOUTUBE</p>
          <p className={styles.unleashYourYoutube}> POTENTIAL WITH REAL</p>
          <p className={styles.unleashYourYoutube}>{`TIME ANALYTICS CHAT `}</p>
        </b>
        <Box className={styles.superchargeYourChannelContainer}>
          <p className={styles.superchargeYourChannel}>
            SUPERCHARGE YOUR CHANNEL WITH REAL
          </p>
          <p className={styles.superchargeYourChannel}>TIME ANALYTICS CHAT</p>
          <p className={styles.superchargeYourChannel}>
            GAIN NEW AND INTERESTING INSIGHTS
          </p>
          <p className={styles.unleashYourYoutube}>ASK QUESTIONS AND GROWW</p>
        </Box>
        <a href="/home">
        <Box className={styles.greenRectangle}>
          <img
            className={styles.greenRectangleIcon}
            alt=""
            src="/green-rectangle.svg"
          />
          <button className={styles.getStarted}>Get Started</button>
        </Box>
        </a>
      </Box>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
    </Box>
  );
};

export default First;
