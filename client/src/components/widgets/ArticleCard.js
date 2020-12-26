import React from 'react';

// libraries
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

// Components
import { ARTICLECARD } from '../../assets/placeholder/widget';

// images
import cover from '../../assets/images/cover.png';

const ArticleCard = () => {
  const props = {
    article: ARTICLECARD,
  };
  const classes = useStyles();
  return (
    <Card className={classes.articleCard}>
      <img className={classes.featuredImage} src={cover} alt='Featured' />
      <CardContent>
        <Grid container spacing={1}>
          {props.article.tags.map((tag) => (
            <Grid item key={tag}>
              <span className={classes.tag}>{tag}</span>
            </Grid>
          ))}
        </Grid>
        <Typography className={classes.title} variant='h2'>
          {props.article.title}
        </Typography>
        <div className={classes.wrapper}>
          <div className={classes.authorList}>
            {props.article.authors.map((author) => (
              <Typography variant='body2' key={author} className={classes.author}>
                {author}
              </Typography>
            ))}
          </div>
          <div className={classes.readTime}>
            <Typography variant='body2'>{props.article.readTime}</Typography>
          </div>
        </div>
        <Typography variant='body2' className={classes.articleDescription}>
          {props.article.summary}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
const useStyles = makeStyles((theme) => ({
  articleCard: {
    boxShadow: theme.shadows[0],
  },
  featuredImage: {
    width: '100%',
  },
  tag: {
    // backgroundColor: 'unset',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '16px',
    color: theme.palette.secondary.neutral60,
    textDecoration: 'underline',
  },
  title: {
    marginTop: '4px',
  },
  wrapper: {
    display: 'flex',
    marginTop: '4px',
    justifyContent: 'space-between',
  },
  readTime: {},
  author: {
    display: 'inline',
    color: theme.palette.secondary.neutral60,
    fontWeight: '400',
    marginRight: '10px',
  },
  articleDescription: {
    marginTop: '12px',
    fontWeight: '400',
    color: theme.palette.common.black,
  },
}));
