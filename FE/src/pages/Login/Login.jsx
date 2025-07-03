import './style.css'

function Login() {
  return (
    <>
    <title>Login</title>

    <div className='login'>
        <div className='login-card'>
            <div className='login-text'>Login</div>
            <div className='login-input'>
                <input type="text" placeholder='Username'/>
                <input type="number" placeholder='Password'/>
            </div>
            <div className='login-btn'>
                <button>Submit</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Login