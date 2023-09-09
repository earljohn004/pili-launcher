import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export interface PropsGameTitle {

  title: string;
}

const GameCardIcon = (props: PropsGameTitle) => {
  return (
    <Card sx={{ width: 150 , height: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image="src-tauri/icons/128x128.png"
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default GameCardIcon