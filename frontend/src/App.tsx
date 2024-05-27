import { Route, Routes } from 'react-router-dom'
import OnBoardingPage from './pages/OnBoardingPage'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import ProblemManagementPage from './pages/ProblemManagementPage'
import SignUpPage from './pages/SignUpPage'
import ProblemRegistrationPage from './pages/ProblemRegistrationPage'
import Layout from './Layout'
import ProblemDetail from './pages/ProblemDetail'
import LoginLayout from './LoginLayout'

function App() {
	return (
		<Routes>
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route element={<Layout />}>
				<Route path="/" element={<OnBoardingPage />} />
				<Route path="/main" element={<MainPage />} />
				<Route path="/problem/:id" element={<ProblemDetail />} />
			</Route>
			<Route element={<LoginLayout />}>
				<Route path="/problem" element={<ProblemManagementPage />} />
				<Route path="/problem/register" element={<ProblemRegistrationPage />} />
			</Route>
		</Routes>
	)
}

export default App
