const ProblemRegistrationPage = () => {
	return (
		<div className="max-w-4xl p-6 mx-auto mt-20 border rounded-md shadow-sm">
			<h1 className="mb-6 text-2xl font-bold text-center">문제 등록</h1>
			<form>
				<div className="mb-4">
					<label
						htmlFor="title"
						className="block text-sm font-medium text-gray-700"
					>
						제목
					</label>
					<input
						type="text"
						id="title"
						name="title"
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="content"
						className="block text-sm font-medium text-gray-700"
					>
						내용
					</label>
					<textarea
						id="content"
						name="content"
						className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="file-upload"
						className="block mb-1 text-sm font-medium text-gray-700"
					>
						첨부파일
					</label>
					<div className="flex items-center">
						<div className="relative inline-block">
							<input
								type="file"
								id="file-input"
								className="hidden"
								onChange={(e) => {
									const file = e.target.files[0]
									if (file) {
										console.log('첨부된 파일:', file.name)
									}
								}}
							/>

							{/* 파일 첨부 버튼 */}
							<button
								type="button"
								className="px-4 py-2 text-white bg-teal-500 rounded-md"
								onClick={() => document.getElementById('file-input').click()}
							>
								파일첨부
							</button>
						</div>
						<span className="ml-2 text-sm text-gray-500">
							* 모든 문제 파일은 압축파일(ZIP)로 첨부해 주세요.
						</span>
					</div>
				</div>
				<div className="mb-4">
					<label
						htmlFor="environment"
						className="block text-sm font-medium text-gray-700"
					>
						라이브 환경
					</label>
					<div className="flex items-center">
						<select
							id="environment"
							name="environment"
							className="block w-40 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							<option value="" disabled selected>
								유형
							</option>
							<option value="type1">유형 1</option>
							<option value="type2">유형 2</option>
						</select>
						<div className="relative inline-block">
							<input
								type="file"
								id="file-input"
								className="hidden"
								onChange={(e) => {
									const file = e.target.files[0]
									if (file) {
										console.log('첨부된 파일:', file.name)
									}
								}}
							/>

							{/* 파일 첨부 버튼 */}
							<button
								type="button"
								className="px-4 py-2 ml-2 text-white bg-teal-500 rounded-md"
								onClick={() => document.getElementById('file-input').click()}
							>
								파일첨부
							</button>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<label
						htmlFor="answer"
						className="block text-sm font-medium text-gray-700"
					>
						답안
					</label>
					<div className="flex items-center">
						<select
							id="answer"
							name="answer"
							className="block w-40 px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							<option value="" disabled selected>
								유형
							</option>
							<option value="text">문자열</option>
							<option value="file">파일</option>
						</select>
						<input
							type="text"
							id="answer-input"
							name="answer-input"
							placeholder="답안 입력(문자열 유형일 때만)"
							className="block w-full px-3 py-2 mt-1 ml-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
				</div>
				<button
					type="button"
					onClick={(e) => {
						e.preventDefault() // 기본 폼 제출 동작 방지
						alert('올바른 형식의 문제 파일을 첨부해주세요.')
					}}
					className="w-full px-4 py-3 text-white bg-teal-500 rounded-md"
				>
					문제등록하기
				</button>
			</form>
		</div>
	)
}

export default ProblemRegistrationPage
