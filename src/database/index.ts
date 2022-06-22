import { IPost } from '../types/post';
import { IStory } from '../types/user';

export const postsData: IPost[] = [
  {
    _id: '1',
    user: {
      _id: '1',
      username: 'shihab',
      fullname: 'Saiful Islam Shihab',
      dp: 'https://picsum.photos/200',
    },
    caption: 'This is post caption',
    image: 'https://picsum.photos/1920/1080',
    likes: 129,
    comments: 5,
    shares: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const storiesData: IStory[] = [];
