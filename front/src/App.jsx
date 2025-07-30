import Login from "./pages/login/login"
import Cadastro from "./pages/cadastro/cadastro"
import Home from "./pages/home/home"
import { Routes, Route } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';

function App() {

	return (
		<div className="p-4 h-screen flex items-center justify-center">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/cadastro" element={<Cadastro />} />
				<Route path="/home" element={<Home />} />
			</Routes>
			<Toaster />
		
		</div>
		
	)
}

export default App
