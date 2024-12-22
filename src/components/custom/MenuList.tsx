import api from "@/http"
import { useEffect, useState } from "react"
import { Route } from "wouter"
interface IMenu {
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
        <Route path={menu.url}>{menu.name}</Route>
    ))}
</div>
  )
}

export default MenuList