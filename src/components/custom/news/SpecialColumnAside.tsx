import { Link } from "wouter"
import Line from "../Line"

const SpecialColumnAside = () => {
  return (
    <div className="flex flex-col gap-4 w-[120px]">
        <img src="./news_logo.svg"/>
        <Line/>
        <div className="flex flex-col gap-4">
            <Link href="/" className='p-3 hover:bg-green-600 hover:text-white font-bold  rounded-sm text-xl'>最新资讯</Link>
        </div>
    </div>
  )
}

export default SpecialColumnAside