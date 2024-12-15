import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className="flex items-center p-4 text-teal-400 border-b border-gray-100">
			<Link to="/">
				<p className="text-xl font-semibold">Digital Forensics</p>
			</Link>
			<div className="flex gap-4 ml-auto text-[#777] text-[13px] font-normal">
				<Link to="/login">
					<p>로그인</p>
				</Link>
				<Link to="/signup">
					<p>회원가입</p>
				</Link>
			</div>
		</header>
	)
}

export default Header
