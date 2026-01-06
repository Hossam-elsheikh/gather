'use client';
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowUp, ArrowDown } from "lucide-react";

export type Comment = {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: string;
};

export type PostProps = {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  image?: string; // optional image
  createdAt: string;
  comments?: Comment[];
};

export const dummyPosts: PostProps[] = [
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

export default function Post({
  author,
  content,
  image,
  createdAt,
  comments = [],
}: PostProps) {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [localComments, setLocalComments] = useState<Comment[]>(comments);
  const [votes, setVotes] = useState({ up: 0, down: 0 });

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    setLocalComments((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        author: { name: "You" },
        content: newComment,
        createdAt: new Date().toISOString(),
      },
    ]);
    setNewComment("");
  };

  return (
    <Card className="w-full max-w-2xl mx-auto rounded-2xl shadow-sm">
      <CardHeader className="flex flex-row items-center gap-3">
        <Avatar>
          <AvatarImage src={author.avatar} />
          <AvatarFallback>{author.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{author.name}</span>
          <span className="text-xs text-muted-foreground">
            {new Date(createdAt).toLocaleString()}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed">{content}</p>

        {image && (
          <img
            src={image}
            alt="Post image"
            className="w-full rounded-xl border"
          />
        )}

        <div className="flex items-center gap-4 pt-2">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1"
            onClick={() => setVotes((v) => ({ ...v, up: v.up + 1 }))}
          >
            <ArrowUp className="h-4 w-4" /> {votes.up}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1"
            onClick={() => setVotes((v) => ({ ...v, down: v.down + 1 }))}
          >
            <ArrowDown className="h-4 w-4" /> {votes.down}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="gap-1"
            onClick={() => setShowComments((v) => !v)}
          >
            <MessageCircle className="h-4 w-4" />
            {localComments.length} Comments
          </Button>
        </div>

        {showComments && (
          <div className="space-y-4 pt-4 border-t">
            {localComments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.author.avatar} />
                  <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="bg-muted rounded-xl px-3 py-2 text-sm w-full">
                  <span className="font-medium">
                    {comment.author.name}
                  </span>
                  <p className="text-xs text-muted-foreground">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                  <p className="mt-1">{comment.content}</p>
                </div>
              </div>
            ))}

            <div className="space-y-2 flex gap-2 flex-col">
              <textarea
                placeholder="Write a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full rounded-md border px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              />
              
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
