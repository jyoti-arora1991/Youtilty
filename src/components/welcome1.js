import React ,{useState} from 'react';
import img from '../img/image2.png'
import { ListItem, List, ListItemText, CardHeader,Checkbox,ThemeProvider, Typography, createTheme, Grid, CardMedia, CardActions } from '@mui/material';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import { FlightTakeoff } from '@mui/icons-material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GoogleLoginButton from './GoogleLoginButton';
import ImageList from "@mui/material/ImageList";
const videos = [
    'VIDEO_ID_1',
    'VIDEO_ID_2',
    'VIDEO_ID_3',
    'VIDEO_ID_4',
    'VIDEO_ID_5',
  ];

function Welcome1(props) {
    const [checked, setChecked] = useState(false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

    return  (
        <>
        <Box style={{ backgroundColor: '#f2f2f2', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '150px', paddingRight: '150px', height: '100px' }}>
        <FlightTakeoff fontSize="large" color="primary" style={{ marginRight: '10px' }} />
        <Typography variant="h6" style={{ fontFamily: 'Raleway', color: '#ff6885' }}>
          Youtility.com
        </Typography>
        <Box style={{ marginLeft: 'auto' }}>
          <GoogleLoginButton  {...props} />

        </Box>
      </Box> 

        <Box sx={{ display: 'flex', flexDirection:"column" }}>


        <Box sx={{ height: '100%',width:'100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: '#f2f2f2' }}>
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
        title="Title"
        subheader="Subtitle"
        action={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
      />
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          channel stast
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
       
      </Box>
      
      <ImageList sx={{
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr)) !important",
          gridAutoColumns: "minmax(160px, 1fr)"
        }}>
      {videos.map((video) => (
    <Card key={video} sx={{ width: '160px', height: '160px', margin: '8px' }}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${video}`}
        title={`YouTube video ${video}`}
        sx={{ height: '100%' }}
        frameBorder="0"
      />
      <CardContent>
        <Typography variant="subtitle1">{video.title}</Typography>
      </CardContent>
    </Card>
  ))}
      
      </ImageList>
      </Box>
      </>
      );
}

export default Welcome1;