function Login(){
	function SwitchContent(){
		const content=document.getElementById('content');
		const registerBtn=document.getElementById('register');
		const loginBtn=document.getElementById('login');
		registerBtn.addEventListener('click',()=>{
			content.classList.add('active')
		})
		loginBtn.addEventListener('click',()=>{
			content.classList.remove('active')
		})
	}
	return(
		<>
			<section className='login-section content justify-content-center align-items-center d-flex shadow-lg' id='content'>
			{/* Registration section */}
				<div className='col-md-6 d-flex justify-content-center'>
					<form>
						<div className='header-text mb-4'>
							<h1>Create Account</h1>
						</div>
						<div className='input-group mb-3'>
							<input type='text' placeholder='Name' className='form-control form-control-lg bg-lignt fs-6' />
						</div>
						<div className='input-group mb-3'>
							<input type='email' placeholder='Email' className='form-control form-control-lg bg-lignt fs-6' />
						</div>
						<div className='input-group mb-3'>
							<input type='password' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6' />
						</div>
						<div className='input-group mb-3'>
							<input type='password' placeholder='confirm-password' className='form-control form-control-lg bg-lignt fs-6' />
						</div>
						<div className='input-group mb-3 justify-content-center'>
							<button type='submit' className='btn border-white text-white w-50 fs-6'>Sign Up</button>
						</div>
					</form>
				</div>

				{/* Login section */}
				<div className='col-md-6 right-box'>
					<form>
						<div className='header-text mb-4'>
							<h1>Sign In</h1>
						</div>
						<div className='input-group mb-3'>
							<input type='email' placeholder='Email' className='form-control form-control-lg bg-lignt fs-6' />
						</div>
						<div className='input-group mb-3'>
							<input type='password' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6' />
						</div>
						<div className='input-group mb-5 d-flex justify-content-between'>
							<div className='form-check'>
								<input type='checkbox' className='form-check-input' />
								<label htmlFor='formcheck' className='form-check-label text-secondary'><small>Remember me</small></label>
							</div>
							<div className='forgot'>
								<small><a href='#'>Forgot Password?</a></small>
							</div>
						</div>
						<div className='input-group mb-3 justify-content-center'> 
							<button type='submit' className='btn border-white text-white w-50 fs-6'>Sign In</button>
						</div>
					</form>
				</div>
				 
				{/* Switch section */}
				<div className='switch-content'>
					<div className='switch'>
						<div className='switch-panel switch-left'>
							<h1>Welcome</h1>
							<p>We are happy to see you back</p>
							<button className='hidden btn text-white w-50 fs-6' id='login' onClick={SwitchContent}>Login</button>
						</div>

						<div className='switch-panel switch-right'>
							<h1>Welcome</h1>
							<p>Join our Unique platform,Explore a new Experience</p>
							<button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={SwitchContent}>Sign Up</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Login;