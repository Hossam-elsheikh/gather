"use client";

import React from "react";
import PostsFilter from "@/components/filters/PostsFilter";
import Post, { PostProps } from "@/components/post/Post";
import { Button } from "@/components/ui/button";

const FeedPage = () => {
  const dummyPosts: PostProps[] = [
    {
      id: "1",
      community: {
        name: "r/projects",
        icon: "https://api.dicebear.com/7.x/identicon/svg?seed=projects",
      },
      author: {
        name: "hossam",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=hossam",
      },
      title: "LEVEL UP SAGA - Inspired by Solo Levelling",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
      upvotes: 642,
      commentsCount: 128,
      image: "https://picsum.photos/seed/post1/800/500",
      isSuggested: true,
    },
    {
      id: "2",
      community: {
        name: "r/nextjs",
        icon: "https://api.dicebear.com/7.x/identicon/svg?seed=nextjs",
      },
      author: {
        name: "dev_guy",
      },
      title: "Next.js 15 is actually insane. Here is why...",
      content:
        "I've been playing around with the new features and the performance improvements are just mind-blowing. The way Server Actions now handle hydration is a game changer for complex forms.",
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      upvotes: 1250,
      commentsCount: 89,
    },
    {
      id: "3",
      community: {
        name: "r/design",
        icon: "https://api.dicebear.com/7.x/identicon/svg?seed=design",
      },
      author: {
        name: "art_lover",
      },
      title: "What do you think of this minimalist landing page design?",
      createdAt: new Date(Date.now() - 1000 * 60 * 45), // 45 mins ago
      upvotes: 45,
      commentsCount: 12,
      image: [
        "https://picsum.photos/seed/post3/800/600",
        "https://picsum.photos/seed/post3b/800/600",
      ],
    },
  ];

  const onSelect = (value: string) => {
    console.log("Selected filter:", value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 w-full max-w-7xl mx-auto">
      {/* Main Feed */}
      <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b">
          <div className="flex items-center gap-2">
            <PostsFilter
              onSelect={onSelect}
              defaultValue="all"
              options={[
                { label: "All", value: "all" },
                { label: "My Posts", value: "my-posts" },
                { label: "Hot", value: "hot" },
                { label: "New", value: "new" },
                { label: "Top", value: "top" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {dummyPosts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>

      {/* Sidebar Suggestions / Info */}
      <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
        <div className="rounded-[20px] bg-white p-4 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wider">
            Popular Communities
          </h3>
          <div className="flex flex-col gap-3">
            {["r/javascript", "r/reactjs", "r/tailwindcss"].map((name) => (
              <div
                key={name}
                className="flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-100" />
                  <span className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {name}
                  </span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 rounded-full px-3 text-xs font-bold"
                >
                  Join
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[20px] bg-white p-4 border border-gray-100 shadow-sm text-xs text-muted-foreground leading-relaxed">
          <p>© 2026 Gather. Built with ❤️ for the community.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;
