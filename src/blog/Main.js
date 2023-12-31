import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ReactMarkdown from 'react-markdown';

function Main(props) {
  const { posts, title } = props;

  return (
    <Grid item xs={12} md={8} sx={{ '& .markdown': { py: 3 } }}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <ReactMarkdown key={index}>{post.toString()}</ReactMarkdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
