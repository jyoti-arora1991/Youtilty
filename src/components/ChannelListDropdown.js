import React, { useRef, useState , useEffect} from 'react';
import { Box, Checkbox, Typography,useMediaQuery, useTheme } from '@mui/material';
import httpRequest from '../services/api';

import CardMedia from '@mui/material/CardMedia';
import img from '../img/img2.jpeg'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useNavigate } from 'react-router-dom';


import { styled } from '@mui/material/styles';

const GradientCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: theme.palette.primary.contrastText,
}));


const videos = [
  'VIDEO_ID_1',
  'VIDEO_ID_2',
  'VIDEO_ID_3',
  'VIDEO_ID_4',
  'VIDEO_ID_5',
];

const channels1 = ['VIDEO_ID_1'];



function ChannelListDropdown(props) {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);



  const containerRef = useRef(null);
  const { accessToken, channelList, selectedVid } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = useState('');

  console.log("my channel list")
  
  
  console.log(channelList)
  const channels = Array.from(channelList)
  
  
  const [selectedVideos, setSelectedVideos] = useState([]);
  const [show ,setShow] = useState('');

  const handleToggleVideo = (video) => {
    setShow()
    
    if (selectedVideos.includes(video)) {
      console.log("under if ocnf")
      console.log(video)
      console.log(selectedVideos)
      setSelectedVideos([]);
      props.selectedChannel([]);
      setShow()
      console.log("show th channel")
      console.log(show)
      
    } else {
      console.log("outside if ocnf")
      console.log(video)
      console.log(selectedVideos)
      setSelectedVideos([video]);
      props.selectedChannel([video]);
      console.log("show th channel 1")
      // setShow('true')
      console.log(show)
    }
    console.log("my selected channel")
    console.log(selectedVideos)


  };


  
  
  
     
  
  const [response, setResponse] = useState('');
  const [isOpen, setIsOpen] = useState(false);


  const handleSend = (channel_id) => {
    setSelectedVideos([channel_id]);
    props.selectedChannel([channel_id]);
    console.log("selectedVideosselectedVideos")
    console.log(selectedVideos)
      setResponse('')
    setValue('')
    httpRequest('https://cdeopcczr2.execute-api.ap-southeast-2.amazonaws.com/dev/analytics', 'POST', { 'channelId': channel_id, headers: accessToken }, { 'Content-Type': 'application/json' })

    navigate('/chatApp')
    
    
  };
   
 

  const responseContainerStyle = {
    maxHeight: '200px', // Set a fixed height to allow scroll
    overflow: 'scroll', // Enable scroll when the content exceeds the container height
  };
  const [anchorEl, setAnchorEl] = useState(null);

  
 
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    channelList.map((channel) => {
      console.log("ihhjbj")
      console.log(channel[Object.keys(channel)[0]].image_url);
    });
    console.log("location fi out")
    
    const [card1Visible, setCard1Visible] = useState(true);
    const [card2Visible, setCard2Visible] = useState(false);
    const [card3Visible, setCard3Visible] = useState(false);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (card1Visible) {
          setCard1Visible(false);
          setCard2Visible(true);
        } else if (card2Visible) {
          setCard2Visible(false);
          setCard3Visible(true);
        } else if (card3Visible) {
          setCard3Visible(false);
          setCard1Visible(true);
        }
      }, 10000);
    
      return () => clearInterval(interval);
    }, [card1Visible, card2Visible, card3Visible]);
    
    const handleClose = () => {
      setIsOpen(false);
    };
    
  return (
    
      <Box sx={{backgroundColor: '#fff', height:'1000px'}}>
      <Box >
      <Typography variant="h4" sx={{ color:'#736689',mb:'40px',mt:'10px',ml:'20px',mr:'20px',textAlign:'center', fontWeight:'bold', fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji' }}> 
      Gain insights into your YouTube channel.
            </Typography> 
    <Box sx={{ display: 'flex',transition: 'transform 1s'}} >
    {card1Visible && (<Card sx={{
  display: 'flex',
  maxWidth: '100%',
  margin: 'auto',
  boxShadow: 3,
  margin: 2,
  background: 'linear-gradient(to right, #ca6363, #f7ad6f)',
  borderRadius: '10px',
}}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold', maxWidth:'auto'}}>
    Uncover Hidden Insights
    </Typography>
    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'20px', maxWidth:'40%', textAlign:'left'}}>
    Discover the untapped potential of your YouTube channel with powerful analytics.
    </Typography>
  </CardContent>
   
  
  <CardMedia
    component="img"
    sx={{ width: '100px', height: 'auto', borderRadius: '50%'}}
    src={img}
  />
</Card>)}
{card2Visible && (<Card sx={{
  display: 'flex',
  maxWidth: '100%',
  margin: 'auto',
  boxShadow: 3,
  margin: 2,
  background: 'linear-gradient(to right, #000000, #F5F5F5)',


  borderRadius: '10px',
}}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold', maxWidth:'auto', color:'#F5F5F5'}}>
    Know Your Audience    </Typography>
    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'20px', maxWidth:'40%', textAlign:'left', color:'#F5F5F5'}}>
    Get a deep understanding of your viewers, their demographics, and preferences    </Typography>
  </CardContent>
   
  
  <CardMedia
    component="img"
    sx={{ width: '100px', height: 'auto', borderRadius: '50%'}}
    src={img}
  />
</Card>)}
{card3Visible && (<Card sx={{
  display: 'flex',
  maxWidth: '100%',
  margin: 'auto',
  boxShadow: 3,
  margin: 2,
  background: 'linear-gradient(to right, #E0E0E0, #FFFFFF)'
  ,

  borderRadius: '10px',
}}>
  <CardContent sx={{ flex: '1 0 auto' }}>
    <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold', maxWidth:'auto'}}>
    Stay Ahead of the Game
      </Typography>
    <Typography gutterBottom variant="body1" component="div" sx={{fontWeight:'20px', maxWidth:'40%', textAlign:'left'}}>
    Gain valuable insights to optimize your content strategy and stay ahead of the competition    </Typography>
  </CardContent>
   
  
  <CardMedia
    component="img"
    sx={{ width: '100px', height: 'auto', borderRadius: '50%'}}
    src={img}
  />
</Card>)}
   



   
    </Box>
  <Box >
    <Typography variant='h5'  sx={{
    fontFamily: 'auto',
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign:'left',
    mt:3
    
  }}>Choose An Account</Typography>
  </Box>
        
    <Box>
      <ImageList
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        overflowY: 'auto',
        gap: 5,
        gridAutoFlow: "column",
        
      }}
    >
      {channelList.map((channel) => (
        <ImageListItem key={channel[Object.keys(channel)[0]]}>
         <Card sx={{ align:'center', margin:'20px',background: 'linear-gradient(to right, #4B6CB7, #8CC2E3)',display: 'flex', alignItems: 'center', width: '100%', height: 'auto', backgroundColor: '#f4f4f4', borderRadius: '10px' }} onClick={() => handleSend(channel[Object.keys(channel)[0]].id)}>
  
  <CardMedia
    component="img"
    sx={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
    src={channel[Object.keys(channel)[0]].image_url}
    title={channel[Object.keys(channel)[0]].title}
  />
  <CardContent >
    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', fontFamily: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"' }}>
      {channel[Object.keys(channel)[0]].title}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'medium' }}>
      Videos: {channel[Object.keys(channel)[0]].videos}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'medium' }}>
      Subscribers: {channel[Object.keys(channel)[0]].subscribers}
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'medium' }}>
      Views: {channel[Object.keys(channel)[0]].views}
    </Typography>
  </CardContent>
</Card>

        </ImageListItem>
        
      ))}
    </ImageList>
    {  show
 && (
  <ImageList
  sx={{
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    // gap: 100,
    gridAutoFlow: "column",
    
  }}
>
  {videos.map((video) => (
    <ImageListItem key={video}>
      <Card sx={{ mr:'20px',width: '100%',height:'auto', padding:'10px', alignContent:'center', display:'flex', flexDirection:'column' }}>
      <Checkbox
          checked={selectedVideos.includes(video)}

          onChange={() => handleToggleVideo(video)}
        />
        <CardMedia
          component="iframe"
          sx={{ width: "50px", height: "50px",borderRadius: "100%" }}

          width="auto"
          height="auto"
          marginLeft='20px'
          src={`https://www.youtube.com/embed/${video}`}
          title={`YouTube video ${video}`}
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="div" sx={{fontWeight:'strong', fontFamily:'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji'}}>
        video
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <strong>Videos:</strong> 1
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <strong>Subscribers:</strong> 2
    </Typography>
    <Typography variant="body2" color="text.secondary">
      <strong>Views:</strong> 3
    </Typography>
        </CardContent>
      </Card>
    </ImageListItem>
    
  ))}
</ImageList>
)}
    
    
    <Box >
      <Typography variant="h5" align="center" sx={{  mb: 2,fontFamily: 'cursive' }}>Ready to Boost Your Channel's Performance?</Typography>
      
  
</Box>

        </Box>
      </Box>

    </Box>
  );
}

export default ChannelListDropdown;

