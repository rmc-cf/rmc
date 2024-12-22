import { getUrl } from "@/lib/utils"
import { IPost } from "@/types/post"
import { twMerge } from "tailwind-merge"
import { Link } from "wouter"

const PostList = ({postList}:{postList:IPost[]}) => {
    
    return (
        <div className='flex flex-col gap-2'>
          {postList.map((post,index)=>(
              <Link href={getUrl(`news/${post._id}`)} className="flex items-center gap-2">
              <div className={twMerge("size-1 rounded-full bg-green-600",index==0&&"w-1 rounded-none h-6 ")}></div>
              <div>{post.content}</div>
          </Link>
          ))}
            
        </div>
    )
}

export default PostList