import api from "@/http"
import { getUrl } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Link } from "wouter"
interface IMenu {
    id:string
    name:string
    url:string
}
const MenuList = () => {
    const [menuList,setMenuList] = useState<IMenu[]>([])
    useEffect(()=>{
        const fetchData = async()=>{
            const res = await api.get('/api/menu')
            setMenuList(res.data)
        }
        fetchData()
    },[])
  return (
    <div className='flex gap-6 items-center p-4'>
    {menuList.map(menu=>(
        <Link href={getUrl(menu.url)} key={menu.id}>{menu.name}</Link>
    ))}
</div>
  )
}

export default MenuList