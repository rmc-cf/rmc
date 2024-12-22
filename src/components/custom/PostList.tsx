import api from "@/http"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"
import { IPost } from "./PostArea"

const PostList = ({postList}:{postList:IPost[]}) => {
    
    return (
        <div className='flex flex-col gap-2'>
          {postList.map((post,index)=>(
              <div className="flex items-center gap-2">
              <div className={twMerge("size-1 rounded-full bg-green-600",index==0&&"w-1 rounded-none h-6 ")}></div>
              <div>{post.content}</div>
          </div>
          ))}
            
        </div>
    )
}

export default PostList