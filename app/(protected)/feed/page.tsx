import Post, { PostProps } from '@/components/post/Post'
import React from 'react'

const FeedPage = () => {
   const dummyPosts: PostProps[] = [
{
id: "1",
author: { name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=1" },
content: "Had a great day exploring the city!",
image: "https://picsum.photos/500/300?random=1",
createdAt: new Date().toISOString(),
comments: [
{ id: "c1", author: { name: "Bob Smith", avatar: "https://i.pravatar.cc/150?img=2" }, content: "Looks amazing!", createdAt: new Date().toISOString() },
{ id: "c2", author: { name: "Carol Lee" }, content: "Wish I was there!", createdAt: new Date().toISOString() }
]
},
{
id: "2",
author: { name: "David Kim" },
content: "Check out this cool sunset photo.",
image: "https://picsum.photos/500/300?random=2",
createdAt: new Date().toISOString(),
comments: []
},
{
id: "3",
author: { name: "Eva Green", avatar: "https://i.pravatar.cc/150?img=3" },
content: "Learning React is so much fun!",
createdAt: new Date().toISOString(),
comments: [
{ id: "c3", author: { name: "Frank" }, content: "Totally agree!", createdAt: new Date().toISOString() }
]
}
];
  return (
    <div className='grid grid-cols-6 gap-4 w-full'>
      <div className='col-span-3 flex flex-col gap-6 '>

      {dummyPosts.map((post) => (
        <Post
        key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          createdAt={post.createdAt}
          comments={post.comments}
          />
        ))}
        </div>
        <div className='col-span-2'></div>
        <div className='col-span-1'></div>

    </div>
  )
}

export default FeedPage