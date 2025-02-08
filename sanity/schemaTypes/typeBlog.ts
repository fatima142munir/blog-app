export interface Iblog {
  name: string,
  catName: string,
  content: string,
  _id: string,
  summrey: string,
  slug:{
    source: string
  }
}

const blogPost: Iblog = {
  name: 'blogPost',
  catName: 'category',
  content: 'blogContent',
  _id: "_id",
  summrey: 'blogSummrey',
  slug: {
      source: '_id',
  }
};

export default blogPost;