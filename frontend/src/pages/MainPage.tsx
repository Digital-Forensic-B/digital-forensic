import Banner from '../components/Banner'
import { problems } from '../mocks/problem'

const MainPage = () => {
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
						</tr>
					</thead>
					<tbody className="bg-white divide-y-[1px] divide-gray-100">
						{problems.map((problem) => (
							<tr key={problem.id}>
								<td className="px-6 py-3 whitespace-nowrap">{problem.id}</td>
								<td className="px-12 py-3 whitespace-nowrap">{problem.type}</td>
								<td className="px-12 py-3 whitespace-nowrap">{problem.name}</td>
								<td className="px-12 py-3 whitespace-nowrap">
									{problem.author}
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
