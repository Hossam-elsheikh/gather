"use client";

import React from "react";
import {
  ArrowBigUp,
  ArrowBigDown,
  MessageSquare,
  MoreHorizontal,
  Share2,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

export interface PostProps {
  id: string;
  community: {
    name: string;
    icon?: string;
  };
  author: {
    name: string;
    avatar?: string;
  };
  title: string;
  content?: string;
  image?: string | string[];
  createdAt: string | Date;
  upvotes: number;
  commentsCount: number;
  isSuggested?: boolean;
}

const Post = ({
  community,
  author,
  title,
  content,
  image,
  createdAt,
  upvotes,
  commentsCount,
  isSuggested = false,
}: PostProps) => {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  return (
    <article className="group flex flex-col gap-3 rounded-[20px] bg-white p-4 transition-all hover:bg-gray-50 border border-transparent hover:border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          <Avatar className="h-6 w-6">
            <AvatarImage src={community.icon} alt={community.name} />
            <AvatarFallback className="bg-orange-500 text-[10px] text-white font-bold">
              {community.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-foreground hover:underline cursor-pointer">
              {community.name}
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{timeAgo}</span>
            {isSuggested && (
              <>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">Suggested for you</span>
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            className="h-8 rounded-full bg-[#0045AC] px-4 font-bold hover:bg-[#003d97] text-white"
          >
            Join
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </Button>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold leading-tight text-foreground cursor-pointer hover:text-primary transition-colors">
        {title}
      </h2>

      {/* Media Content */}
      {image && (
        <div className="relative mt-1 overflow-hidden rounded-xl bg-gray-100 ring-1 ring-inset ring-black/5">
          {Array.isArray(image) ? (
            // Basic support for the first image if array
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={image[0]}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ) : (
            <div className="relative aspect-auto w-full min-h-[300px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          )}
        </div>
      )}

      {/* Text Content */}
      {content && !image && (
        <p className="line-clamp-6 text-sm leading-relaxed text-muted-foreground">
          {content}
        </p>
      )}

      {/* Footer / Actions */}
      <div className="flex items-center gap-2 mt-1">
        {/* Voting */}
        <div className="flex items-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors h-9">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-l-full hover:bg-orange-100 hover:text-orange-600 transition-colors focus-visible:ring-0"
          >
            <ArrowBigUp className="h-6 w-6" />
          </Button>
          <span className="px-1 text-sm font-bold min-w-[20px] text-center">
            {upvotes}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-r-full hover:bg-indigo-100 hover:text-indigo-600 transition-colors focus-visible:ring-0"
          >
            <ArrowBigDown className="h-6 w-6" />
          </Button>
        </div>

        {/* Comments */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full bg-gray-100 h-9 px-4 hover:bg-gray-200 focus-visible:ring-0"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="text-sm font-bold">{commentsCount}</span>
        </Button>

       

        {/* Share */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 rounded-full bg-gray-100 h-9 px-4 hover:bg-gray-200 focus-visible:ring-0"
        >
          <Share2 className="h-5 w-5" />
          <span className="text-sm font-bold">Share</span>
        </Button>
      </div>
      <hr />
    </article>
  );
};

export default Post;
