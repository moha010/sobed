import React from 'react'

export default function Login() {
  return (
    <>
      <div className="logins">
        <div className="countiner">
          <div  className="box">
            <div className="text">Login</div>
            <form action="">
              <div className="name inp">
                <label htmlFor="name">user name</label>
                <input type="text" placeholder='enter your name'/>
              </div>
              <div className="email inp">
                <label htmlFor="email">email</label>
                <input type="email" placeholder='enter your email'/>
              </div>
              <div className="pass inp">
                <label htmlFor="pass">password</label>
                <input type="password" name="pas" id="pas" placeholder='enter your password' />
              </div>
              <input type="submit" value="Login" className='submit'/>
            </form>
            <div className="or"></div>
            <div className="other">
              <div className="gogl">
              <i class="fa-brands fa-google"></i>
                Sing in with gogle
              </div>
              <div className="facbook">
              <i class="fa-brands fa-facebook-f"></i>
                Sing in with facbook
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
