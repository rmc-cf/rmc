import { getUrl } from "@/lib/utils";
import { Link } from "wouter";

const Header = () => {
    // const [data,setData] = useState<SettingData | null>(null)
    // useEffect(()=>{
    //     const fetchData = async()=>{
    //         const res = await api.get('/api/setting')
    //         setData(res.data)    
    //         console.log(res.data);
            
    //     }
    //     fetchData()
    // },[])
    return (
        <div className="flex justify-between items-center shadow px-10">
            <div className='flex items-center gap-8 '>
                    <img src='./logo.svg' className="logo" alt="Logo" />
                <div className='flex gap-6 items-center p-4'>
                    <div>咨询</div>
                    <div>软件</div>
                    <div>博客</div>
                    <div>专区</div>
                    <div>问答</div>
                    <div>活动</div>
                </div>
            </div>
            <div className='hidden md:flex items-center gap-4'>
                <div className="flex border rounded-xl  items-center p-4 h-8">
                    <input  className="flex-1 outline-none w-full text-md text-gray-400" />
                    <img src='./search.svg' className="w-5 h-5 cursor-pointer"/>
                </div>
                <div className='flex items-center gap-4'>
                <Link href={getUrl('login')}>登录</Link>
                <Link href={getUrl('register')}>注册</Link>
                   
                </div>
            </div>
        </div>
    )
}

export default Header