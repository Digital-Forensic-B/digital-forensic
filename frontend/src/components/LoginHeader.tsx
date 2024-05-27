import { Link } from 'react-router-dom'

const LoginHeader = () => {
	return (
		<header className="flex items-center p-4 text-teal-400 border-b border-gray-100">
			<Link to="/">
				<p className="text-xl font-semibold">Digital Forensics</p>
			</Link>
			<div className="flex gap-4 ml-auto text-[#777] text-[13px] font-normal">
				<Link to="/problem">
					<p>문제 관리</p>
				</Link>
				<Link to="/problem/register">
					<p>문제 등록</p>
				</Link>
			</div>
		</header>
	)
}

export default LoginHeader
