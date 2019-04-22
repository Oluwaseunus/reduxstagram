import React from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';
import { increment } from '../actions';

const PhotoGrid = props => {
  return (
    <div>
      <div className='photo-grid'>
        {props.posts.map((post, index) => (
          <Photo {...props} key={index} index={index} post={post} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(
  mapStateToProps,
  { increment }
)(PhotoGrid);
