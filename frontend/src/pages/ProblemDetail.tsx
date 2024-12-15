import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Problem } from '../mocks/handlers'
import Banner from '../components/Banner'

const ProblemDetail = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [problem, setProblem] = useState<Problem>({
		id: 0,
		type: '',
		name: '',
		author: '',
		content: '',
		answer: '',
		file: '',
		solution: { code: '', image: '', description: '' },
		isSolved: false,
	})
	const [inputValue, setInputValue] = useState<string>('')
	const [result, setResult] = useState<string>('')
	const [isCorrect, setIsCorrect] = useState<boolean>(false)

	const fetchProblem = async () => {
		const res = await fetch(`/problem/${id}`)
		const data = await res.json()
		setProblem(data.data)
	}

	console.log(problem)

	if (!problem) {
		return (
			<div className="mt-10 text-center text-red-500">
				문제를 찾을 수 없습니다.
			</div>
		)
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (inputValue === problem.answer) {
			setResult('정답입니다!')
			setIsCorrect(true)

			// 배열의 값을 새로 업데이트
			await fetch(`/problem/${id}`, {
				method: 'PUT',
			})
		} else {
			setResult('오답입니다. 다시 시도하세요.')
			setIsCorrect(false)
		}
	}

	const handleNavigate = () => {
		navigate('/main')
	}

	// 파일 경로에서 파일 이름만 추출하는 함수
	const getFileName = (filePath: string) => {
		return filePath.split('/').pop()
	}

	useEffect(() => {
		fetchProblem()
	}, [])

	return (
		<>
			<Banner />
			<div className="flex flex-col gap-12 mx-auto my-16 w-180">
				<h1 className="text-2xl font-bold">{problem.name}</h1>
				<pre>
					<p className="text-gray-700 text-wrap">{problem.content}</p>
				</pre>

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="정답을 입력하세요"
						className="w-full p-3 border rounded outline-none focus:border-teal-200"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<p
						className={`h-4 mt-2 text-md ${isCorrect ? 'text-green-500' : 'text-red-500'}`}
					>
						{result}
					</p>
					<div className="flex self-end mt-8 space-x-4">
						<a
							href={problem.file}
							download={getFileName(problem.file)}
							className="px-4 py-2 text-white rounded bg-zinc-400 hover:bg-zinc-500"
						>
							문제 파일 내려받기
						</a>
						{!isCorrect && (
							<button
								type="submit"
								className="px-4 py-2 text-white bg-teal-400 rounded hover:bg-teal-500"
							>
								제출
							</button>
						)}
						{isCorrect && (
							<button
								type="button"
								onClick={handleNavigate}
								className="px-4 py-2 text-white bg-teal-400 rounded hover:bg-teal-500"
							>
								문제 목록으로 돌아가기
							</button>
						)}
					</div>
				</form>
			</div>
			{isCorrect && (
				<div className="flex flex-col gap-12 mx-auto my-16 mt-12 border-t rounded w-180">
					<h3 className="mt-16 text-xl font-bold text">풀이 과정</h3>
					{problem.solution.code && (
						<pre className="p-4 overflow-x-auto text-sm bg-gray-200 rounded">
							<code>{problem.solution.code}</code>
						</pre>
					)}
					{problem.solution.image && (
						<img
							src={problem.solution.image}
							alt="solution"
							className="mx-auto"
						/>
					)}
					<pre>
						<p className="text-gray-700 text-wrap">
							{problem.solution.description}
						</p>
					</pre>
					<div className="p-4 mt-4 bg-teal-100 border border-teal-200 rounded">
						<p className="text-lg font-bold text-teal-700">정답:</p>
						<p className="text-teal-700">{problem.answer}</p>
					</div>
				</div>
			)}
		</>
	)
}

export default ProblemDetail
