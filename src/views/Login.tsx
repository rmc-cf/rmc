
import LoginForm from "@/components/custom/LoginForm"

const Login = () => {
  return (
    <div className='container flex justify-center items-center  min-h-[100vh] '>
      <div className="w-[600px] flex flex-col items-center justify-center  p-10 shadow-xl rounded-md ">

      <div className=""><img src='./logo.svg'></img></div>
      <div className=" p-5 rounded-sm flex flex-col w-full">
        <LoginForm/>
      </div>
      </div>
    </div>
  )
}

export default Login