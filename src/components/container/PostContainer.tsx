import React, { useState, useEffect } from 'react';
import { postsData } from '../../database';
import { TPostView } from '../../types/post';
import Post from '../limb/post';

import api from '../../utils/api';

interface IProps {
  postsView?: TPostView;
}

const PostContainer: React.FC<IProps> = (props) => {
  const { postsView } = props;

  const [postdata, setdata] = useState([]);

  const fetchdata = async () => {
    try {
      const response: any = await api.get('/board/list/all', {});
      setdata(response.result);
    } catch (e) {}
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (postdata == []) return null;
  return (
    <div className="mt-4 w-full h-full">
      <div
        className={`grid ${
          postsView === 'gridView' ? 'grid-cols-2' : 'grid-cols-1'
        } gap-2`}
      >
        {postdata.length ? (
          postdata.map((post: any, idx: any) => <Post key={idx} post={post} />)
        ) : (
          <p>No posts yet!</p>
        )}
      </div>
    </div>
  );
};

export default PostContainer;
