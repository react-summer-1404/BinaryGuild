import { useNavigate } from 'react-router-dom'

const Button = () => {
    const navigate = useNavigate()

    const nav = ()=>{
        navigate("/RegistrationAndLogin")
    }

  return (
    <div class="bg-blue-600 w-60px">
      <button onClick={nav}>ثبت نام یا ورود</button>
    </div>
  )
}

export default Button
