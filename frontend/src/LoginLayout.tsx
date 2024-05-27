import { Outlet } from 'react-router-dom'
import LoginHeader from './components/LoginHeader'

const Layout = () => {
	return (
		<>
			<LoginHeader />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
