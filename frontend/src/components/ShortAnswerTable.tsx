import { useEffect, useState } from 'react'
import { Problem } from '../mocks/handlers'
import { Link } from 'react-router-dom'

const ShortAnswerTable = () => {
	const [problems, setProblems] = useState<Problem[]>([])

	const fetchProblems = async () => {
		const res = await fetch('/problem')
		const data = await res.json()
		setProblems(data.data)
	}

	useEffect(() => {
		fetchProblems()
	}, [])

	return (
		<table className="my-10 overflow-hidden text-xs divide-y divide-gray-100 rounded-md shadow-sm text-[#333] w-full">
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
						className="px-10 py-3 font-medium tracking-wider text-left text-gray-500"
					>
						문제 유형
					</th>
					<th
						scope="col"
						className="px-10 py-3 font-medium tracking-wider text-left text-gray-500"
					>
						문제 이름
					</th>
					<th
						scope="col"
						className="px-6 py-3 font-medium tracking-wider text-left text-gray-500"
					>
						현황/수정/삭제
					</th>
				</tr>
			</thead>
			<tbody className="bg-white divide-y-[1px] divide-gray-100">
				{problems.map((problem) => (
					<tr key={problem.id}>
						<td className="px-6 py-3 whitespace-nowrap">{problem.id}</td>
						<td className="px-10 py-3 whitespace-nowrap">{problem.type}</td>

						<td className="px-10 py-3 whitespace-nowrap">
							<Link to={`/problem/${problem.id}`}>{problem.name}</Link>
						</td>

						<td className="px-6 py-3 whitespace-nowrap">
							<div className="flex space-x-2">
								<button className="px-2 py-1 text-white rounded-sm bg-emerald-400">
									현황
								</button>
								<button className="px-2 py-1 text-white bg-gray-500 rounded-sm">
									수정
								</button>
								<button className="px-2 py-1 text-white bg-red-400 rounded-sm">
									삭제
								</button>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default ShortAnswerTable
