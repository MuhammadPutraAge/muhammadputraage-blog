export interface PostData {
  title: string;
  description: string;
  date: string;
  heroImage: string;
}

export interface Post extends PostData {
  content: string;
  slug: string;
}
