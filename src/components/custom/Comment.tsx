type IComment = {
    avatar: string
    content: string
}

const Comment = (item: IComment) => {
    return (
        <div className='flex  gap-2'>
            <img src={item.avatar} className='size-5' />
            <div className='p-4 rounded-md bg-gray-100 hover:text-blue-600 cursor-pointer'>
                {item.content}
            </div>
        </div>
    )
}

export default Comment