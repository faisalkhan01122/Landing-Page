import React from 'react'

const Main = () => {
  return (
  <div className="container">
     <form className='bg-info rounded-2 '>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label ">Email address</label>
    <input type="email" className="form-control bg-bg-info "  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Name '/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1"   className="form-label">Password</label>
    <input type="password" className="form-control bg-bg-info  " id="exampleInputPassword1" placeholder='Enter Password '/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
   
  )
}

export default Main