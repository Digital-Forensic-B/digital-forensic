import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type User = {
	username: string
	password: string
}

const LoginPage = () => {
	const navigate = useNavigate()

	const [inputs, setInputs] = useState<User>({
		username: '',
		password: '',
	})

	const [errorMessages, setErrorMessages] = useState<string>('')

	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value, name } = e.currentTarget
		setInputs({
			...inputs,
			[name]: value,
		})
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { username, password } = inputs
		if (username === 'student' && password === '1234') {
			alert('로그인 성공')
			setErrorMessages('')
			navigate('/main')
		} else if (username === 'expert' && password === '5678') {
			alert('로그인 성공')
			setErrorMessages('')
			navigate('/problem')
		} else {
			setErrorMessages('아이디 또는 비밀번호가 일치하지 않습니다.')
		}
	}

	return (
		<div className="flex justify-center text-[#333]">
			<div className="absolute top-0 bottom-0 flex flex-col items-center px-14 py-6 m-auto border-[1px] border-gray-100 rounded-md shadow-sm justify-evenly h-152">
				<section className="self-start text-[22px]">
					<p>안녕하세요.</p>
					<p>디지털 포렌식 교육 플랫폼</p>
					<p>
						<span className="text-emerald-400">Digital Forensics</span> 입니다.
					</p>
					<p className="mt-4 text-sm text-gray-400">
						서비스 이용을 위해 로그인 해주세요.
					</p>
				</section>
				<form
					action="submit"
					className="flex flex-col items-center text-sm h-60 justify-evenly"
					onSubmit={onSubmit}
				>
					<input
						name="username"
						type="text"
						placeholder="아이디"
						className="h-12 pl-2 border-b-[1px] outline-none w-80 focus:border-emerald-200"
						onChange={onChange}
					></input>
					<input
						name="password"
						type="password"
						placeholder="비밀번호"
						className="h-12 pl-2 border-b outline-none w-80 focus:border-emerald-200"
						onChange={onChange}
					></input>
					<p className="flex items-center self-start h-4 pl-1 text-xs font-medium text-red-400">
						{errorMessages}
					</p>
					<button className="h-12 mt-8 text-white rounded-md w-80 bg-emerald-400">
						로그인
					</button>
				</form>
				<section className="flex gap-4 text-xs">
					<Link to="/login">
						<span>아이디 찾기</span>
					</Link>
					<span>|</span>
					<Link to="/signup">
						<span>비밀번호 찾기</span>
					</Link>
					<span>|</span>
					<Link to="/signup">
						<span>회원가입</span>
					</Link>
				</section>
			</div>
		</div>
	)
}

export default LoginPage
