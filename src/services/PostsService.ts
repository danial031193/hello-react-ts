import { IPost } from '@interfaces/post/i-post';

export class PostsService {
  data?: any[];

  posts?: IPost[];

  constructor(posts: IPost[]) {
    this.posts = posts;
  }

  getPostsIds() {
    return this.posts?.map((el) => el.id);
  }
}
