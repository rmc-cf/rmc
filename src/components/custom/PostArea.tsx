import React from 'react'

const PostArea = () => {
    return (
        <div className='flex items-center justify-between gap-14 px-6 py-4 shadow'>
            <div className='flex flex-col flex-1'>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <div>123</div>
                        <div>123</div>
                        <div>123</div>
                    </div>
                    <div className='flex items-center'>
                        <div>123</div>
                        <div>更多</div>
                    </div>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='flex flex-col'>
                        <div>123123</div>
                        <div>123123</div>
                        <div>123123</div>
                        <div>123123</div>
                    </div>
                    <div className='flex flex-col'>
                        <div>123123</div>
                        <div>123123</div>
                        <div>123123</div>
                        <div>123123</div>
                    </div>
                    <div className='flex flex-col'>
                        <div>123123</div>
                        <div>123123</div>
                        <div>123123</div>
                        <div>123123</div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[288px]'>
            <div className='flex justify-between'>
            <div>精彩评论</div>
            <div>精彩评论</div>

            </div>
            <div className='flex flex-col'>
                {/* 评论 */}
                <div className='flex'>
                    <img src='/vite.svg' className='size-5'/>
                    <div className='p-4'>
                        123123
                    </div>
                </div>
                <div className='flex'>
                    <img src='/vite.svg' className='size-5'/>
                    <div className='p-4'>
                        123123
                    </div>
                </div>
                <div className='flex'>
                    <img src='/vite.svg' className='size-5'/>
                    <div className='p-4'>
                        123123
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default PostArea