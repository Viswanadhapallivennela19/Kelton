import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './login.jsx';
import Home from './home.jsx';
import Vegan from './vegan.jsx'
import About from './about.jsx'
import Contact from './contact.jsx'
import RegistrationForm from './register.jsx';
import ForgotPasswordForm from './forgot.jsx'
import Nourish from './nourish.jsx'
import Vita from './vita.jsx'
import NutrientsUpdateForm from './admin/nutrientUpload.jsx';
function Project_Routes(){
	return(
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>}></Route>
					<Route path='/home' element={<Home/>}></Route>
					<Route path='/login' element={<LoginForm/>}></Route>
					<Route path='/register' element={<RegistrationForm/>}></Route>
					<Route path='/forgot-password' element={<ForgotPasswordForm/>}></Route>
					<Route path='/contact' element={<Contact/>}></Route>
					<Route path='/about' element={<About/>}></Route>
					<Route path='/vita' element={<Vita/>}></Route>
					<Route path='/nourish' element={<Nourish/>}></Route>
					<Route path='/vegan' element={<Vegan/>}></Route>
					<Route path='/vitalive' element={<Home/>}></Route>
					<Route path='/search' element={<Home/>}></Route>
					<Route path='/nutrients-upload' element={<NutrientsUpdateForm/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}
export default Project_Routes;