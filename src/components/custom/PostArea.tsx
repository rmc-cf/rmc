import { useEffect, useState } from "react"
import Line from "./Line"
import Comment from "./Comment"
import PostList from "./PostList"
import api from "@/http"
export interface IPost {
    user_id:string
    content: string

    // Add other properties you expect in the response
}
function splitArray<T>(arr: T[], chunkSize: number): T[][] {
    return arr.reduce((result: T[][], item: T, index: number) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!result[chunkIndex]) {
            result[chunkIndex] = []; // 创建新的子数组
        }
        result[chunkIndex].push(item);
        return result;
    }, []);
}
const PostArea = () => {
    //默认分列数
    const maxNum = 14
    const [comments] = useState([
        {avatar:'/vite.svg',content:'123123'}
    ])
    const [postData,setPostData] = useState<IPost[] >([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await api.get('/api/post')
            setPostData(res.data)    
            
        }
        fetchData()
    },[])
    return (
        <div className='flex justify-between gap-14 px-6 py-4 shadow'>
            <div className='flex flex-col flex-1 h-full gap-6'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div className="group flex items-center cursor-pointer gap-2 hover:bg-gray-300 rounded-sm p-3 font-bold text-md">
                            <img src="/rmc/vite.svg" className="size-6"/>
                            <div  className="group-hover:text-blue-700">ais jaklsjd</div>
                        </div>
                        <div className="group flex items-center cursor-pointer gap-2 hover:bg-gray-300 rounded-sm p-3 font-bold text-md">
                            <img src="/rmc/vite.svg" className="size-6"/>
                                 <div className="group-hover:text-blue-700">ais jaklsjd</div>
                        </div>
                        <div className="group flex items-center cursor-pointer gap-2 hover:bg-gray-300 rounded-sm p-3 font-bold text-md">
                            <img src="/rmc/vite.svg" className="size-6"/>
                                 <div className="group-hover:text-blue-700">ais jaklsjd</div>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className="flex items-center gap-2">
                            {
                                Array.from({ length: 5 }).map(_ => (
                                    <div className="cursor-pointer size-3 bg-gray-500 hover:bg-green-500"></div>
                                ))
                            }
                        </div>
                        <div className="text-gray-400">更多</div>
                    </div>
                </div>
                <Line/>
                <div className='grid grid-cols-3'>
                 {
                    splitArray(postData,maxNum)?.map((postList:IPost[])=>(
                        <PostList postList={postList}/>
                    ))
                 }
                </div>
            </div>
            <div className='flex flex-col w-[288px] gap-4'>
                <div className='flex justify-between'>
                    <div>精彩评论</div>
                    <div>精彩评论</div>

                </div>
                <Line/>
                <div className='flex flex-col'>
                    {/* 评论 */}
                    {
                        comments.map(item=>(
                            <Comment {...item}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PostArea