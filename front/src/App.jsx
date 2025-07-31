import Login from "./pages/login/login"
import Cadastro from "./pages/cadastro/cadastro"
import Home from "./pages/home/home"
import { Routes, Route, Navigate } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';
import { useAuthContext } from "./context/AuthContext";


function App() {
	const {user} = useAuthContext()

	return (
		<div className="p-4 h-screen flex items-center justify-center">
			<Routes>
				<Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
				<Route path="/cadastro" element={user ? <Navigate to="/home" /> : <Cadastro />} />
				<Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Toaster />
		
		</div>
		
	)
}

export default App
