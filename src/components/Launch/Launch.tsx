import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

type Props = {
  data: any,
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 50,
  },
  media: {
    height: 100,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: "200"
  },
}));

export const Launch: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {!!data && !!data.links && (<img src={data.links.mission_patch_small} alt="No Item Available"/>)}
            </Avatar>
          }
          title={!!data && (data.mission_name)}
          subheader={!!data && (data.launch_year)}
        />
        {!!data && !!data.links && !!data.links.flickr_images && data.links.flickr_images[0] !== undefined ? (
          <CardMedia
            className={classes.media}
            image={data.links.flickr_images[0]}
            title="Paella dish"
          />):"No Image Available"}
        <br /><br />
        {!!data && data.details !== null ? (
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {data.details}
            </Typography>
          </CardContent>
        ):"No Info Avaliable"}
        <CardActions>
          <a href={!!data && !!data.links && (data.links.article_link)} target="_blank" rel="noopener noreferrer">Source Article</a>
          <Link to={`launch/${!!data && (data.flight_number)}`}>Learn More</Link>
        </CardActions>
      </Card>
    </div>
  )
}


