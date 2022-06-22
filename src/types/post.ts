export type TPostView = 'gridView' | 'listView';

export interface IPost {
  _id: string;
  user: {
    _id: string;
    fullname: string;
    username: string;
    dp?: string;
  };
  caption?: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPost2 {
  comment_cnt: number;
  content: string;
  created_at: string;
  created_by: number;
  first_name: string;
  id: number;
  image: string;
  last_name: string;
  profile_image: string;
  reaction_cnt: number;
  security: string;
  updated_at: string;
  updated_by: number;
  writer: number;
}
