import { useState } from 'react'
import Banner from '../components/Banner'
import ReportTable from '../components/ReportTable'
import ShortAnswerTable from '../components/ShortAnswerTable'

const ProblemManagementPage = () => {
	const [showShortAnswer, setShowShortAnswer] = useState(true)

	return (
		<div>
			<Banner />
			<div className="flex justify-center bg-zinc-50">
				<div className="flex flex-col bg-zinc-50">
					<div className="mt-10 text-xs">
						<button
							className={`px-4 py-2 mx-2 ${showShortAnswer ? 'bg-emerald-400 text-white' : 'bg-gray-200 text-black'} rounded-sm`}
							onClick={() => setShowShortAnswer(true)}
						>
							문자열 문제
						</button>
						<button
							className={`px-4 py-2 mx-2 ${!showShortAnswer ? 'bg-emerald-400 text-white' : 'bg-gray-200 text-black'} rounded-sm`}
							onClick={() => setShowShortAnswer(false)}
						>
							보고서 문제
						</button>
					</div>
					{showShortAnswer ? <ShortAnswerTable /> : <ReportTable />}
				</div>
			</div>
		</div>
	)
}

export default ProblemManagementPage
