import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import { useEffect, useState } from 'react'
import { Problem } from '../mocks/handlers'

const MainPage = () => {
	const [problems, setProblems] = useState<Problem[]>([])

	const fetchProblems = async () => {
		const res = await fetch('/problem')
		const data = await res.json()
		setProblems(data.data)
	}

	useEffect(() => {
		fetchProblems()
	}, [])

	console.log(problems)
	return (
		<div>
			<Banner />
			<div className="flex justify-center bg-zinc-50">
				<table className="my-10 overflow-hidden text-xs divide-y divide-gray-100 rounded-md shadow-sm text-[#333]">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 font-medium tracking-wider text-left text-gray-500"
							>
								문제 번호
							</th>
							<th
								scope="col"
								className="px-12 py-3 font-medium tracking-wider text-left text-gray-500"
							>
								문제 유형
							</th>
							<th
								scope="col"
								className="px-12 py-3 font-medium tracking-wider text-left text-gray-500"
							>
								문제 이름
							</th>
							<th
								scope="col"
								className="px-12 py-3 font-medium tracking-wider text-left text-gray-500"
							>
								출제자
							</th>
							<th
								scope="col"
								className="px-12 py-3 font-medium tracking-wider text-left text-gray-500"
							>
								풀이 여부
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y-[1px] divide-gray-100">
						{problems.map((problem) => (
							<tr key={problem.id}>
								<td className="px-6 py-3 whitespace-nowrap">{problem.id}</td>
								<td className="px-12 py-3 whitespace-nowrap">{problem.type}</td>

								<td className="px-12 py-3 whitespace-nowrap">
									<Link to={`/problem/${problem.id}`}>{problem.name}</Link>
								</td>
								<td className="px-12 py-3 whitespace-nowrap">
									{problem.author}
								</td>
								<td className="px-12 py-3 whitespace-nowrap">
									<span
										className={
											problem.isSolved ? 'text-green-400' : 'text-red-400'
										}
									>
										{problem.isSolved ? '풀이 완료' : '풀이 안 됨'}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default MainPage
