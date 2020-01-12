import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
// MUI Stuff
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    position: 'relative',
    display: 'flex',
    marginBottom: 20,
  },
  image: {
    minWidth: 200,
  },
  content: {
    padding: 25,
    objectFit: 'cover',
  },
};

const NewsItem = ({ classes, newsItem: { urlToImage, title, author, description, url } }) => {
  return (
    <Card className={classes.card}>
      <CardMedia image={urlToImage} title="Image" className={classes.image} />
      <CardContent className={classes.content}>
        <Typography variant="h5" color="primary">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {author}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
    </Card>
  );
};

NewsItem.propTypes = {
  classes: PropTypes.object.isRequired,
  newsItem: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewsItem);
