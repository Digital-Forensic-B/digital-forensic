import { http, HttpResponse } from 'msw'

export type Solution = {
	code?: string
	description: string
	image?: string
}

export type Problem = {
	id: number
	type: string
	name: string
	author: string
	content: string
	answer: string
	file: string
	solution: Solution
	isSolved: boolean
}

export const handlers = [
	http.get('/problem', () => {
		console.log(problems)
		return HttpResponse.json({
			data: problems,
		})
	}),

	http.get('/problem/:id', ({ params }) => {
		const { id } = params
		const problem = problems.find((p) => p.id === Number(id))
		console.log(id)
		console.log(problem)
		return HttpResponse.json({ data: problem })
	}),

	http.put('/problem/:id', ({ params }) => {
		const { id } = params
		problems = problems.map((p) =>
			p.id === Number(id) ? { ...p, isSolved: true } : p,
		)
		return HttpResponse.json({ data: problems })
	}),
]

let problems: Problem[] = [
	{
		id: 1,
		type: '멀티미디어 포렌식',
		name: '보안 키 해석',
		author: 'Cyber Security Lab',
		content:
			'중요한 보안 키를 안전하게 전달하기 위해 이미지로 인코딩하였다. 보안 사항을 확인하기 위해 이미지를 해석하고 키를 입력하세요. (Hint : ASCII CODE)',
		answer: 'DF{nv59728k8m3adsfjjgy02jnkq2h6}',
		file: '/file/Security_Key_Interpretation.png',
		solution: {
			code: `from PIL import Image

pic = Image.open("generated_image.png")
data = pic.load()
white = (255, 255, 255)

binary_lists = []
w, h = pic.size

for y in range(h):
    binary_line = []
    for x in range(w):
      	pixel = data[x, y]

        if pixel == white:
            binary_line.append('1')
        else:
            binary_line.append('0')

    binary_lists.append(binary_line)

key = ''.join([chr(int(''.join(text), 2)) for text in binary_lists])
# 주어진 코드는 이진 문자열의 리스트를 받아서 각 이진 문자열을 10진수로 변환한 다음, 해당 숫자를 ASCII 문자로 변환하여 하나의 문자열로 합치는 역할

print(key)
`,
			description: `힌트가 ASCII CODE이므로, 위 이미지를 ASCII CODE 로 변환해야 한다.

흰 부분을 1, 검은 부분을 0으로 해석하여 한 줄씩 변환한 뒤 리스트에 저장한다. binary_lists에는 한 줄씩 이진수 문자열로 변환한 리스트가 담긴 2차원 배열이 저장된다.

key를 찾기 위해, 한 줄씩 10진수로 변환 후 다시 ASCII CODE로 변환하여 key에 이어 붙인다. key를 출력하면 변환된 문자열을 얻을 수 있다.`,
		},
		isSolved: false,
	},
	{
		id: 2,
		type: '네트워크 포렌식',
		name: 'Port Scanning 공격 확인하기',
		author: 'Cyber Research Group',
		content: `내 pc가 port Scanning을 통해서 공격을 당했다. 다음 패킷은 공격자의 Port Scanning 공격이 들어있는 패킷이다. 이 패킷을 분석하여 내 pc의 어느 포트가 열려있는지 확인하고 해당 port에 적절한 보안 조치를 취해야한다. 다음 패킷에서 열린 포트의 번호를 다 더하여 DF에 적는 방법이다.

답 ex) [1,2,3,4,8080] → DF{1+2+3+4+8080} = DF{8090}`,
		answer: 'DF{4350}',
		file: '/file/Port_Scanning.pcapng',
		solution: {
			description: `
해당 문제를 해결하려면 port Scanning과 열린 포트 닫힌 포트에 대한 개념을 알아야한다.

TCP 연결 설정은 3-way handshake 절차를 따르는데 이때 해당 TCP연결을 위해 클라이언트가 서버에 SYN 패킷을 보내고 서버가 SYN 패킷을 받으면, 해당 포트가 열려 있고 클라이언트의 연결 요청을 수락할 준비가 되면 이를 알리기 위해 SYN-ACK 패킷을 보내게 된다.
			
그러므로 이때 syn flag가 1 ack flag가 1일경우 해당 패킷이 열렸다는 사실을 알 수가 있으므로 위 사진에 있는 필터와 같이 입력하면 열린 포트들을 알 수가 있다.`,
			image: '/file/Port_Scanning.png',
		},
		isSolved: false,
	},
	{
		id: 3,
		type: '메모리 포렌식',
		name: '메모리 덤프 분석',
		author: 'Forensics Team',
		content:
			'메모리 덤프 파일을 분석하여 악성 프로세스나 민감한 데이터를 추출하는 문제입니다.',
		answer: 'someCorrectAnswer3',
		file: 'file/something3.zip',
		solution: {
			description: `
메모리 덤프 분석 방법:
1. 메모리 덤프 파일을 분석 도구로 엽니다.
2. 악성 프로세스나 민감한 데이터를 스캔합니다.
3. 발견된 증거를 분석합니다.`,
		},
		isSolved: false,
	},
	{
		id: 4,
		type: '파일 복구',
		name: '손상된 파일 복구',
		author: 'Malware Analysis Lab',
		content: '주어진 파일 속 플래그를 찾아라 (힌트 : PNG 파일)',
		answer: 'vfdiusrj',
		file: '/file/findKey.zip',
		solution: {
			description: `
악성코드 분석 방법:
1. 악성코드 샘플을 안전한 환경에서 실행합니다.
2. 악성코드의 동작을 모니터링합니다.
3. 분석된 결과를 문서화합니다.`,
		},
		isSolved: false,
	},
	{
		id: 5,
		type: '네트워크 포렌식',
		name: '네트워크 트래픽 분석',
		author: 'Network Security Team',
		content:
			'네트워크 트래픽 데이터를 분석하여 이상 징후를 찾아내고, 관련된 증거를 추출하는 문제입니다.',
		answer: 'someCorrectAnswer5',
		file: 'file/something5.zip',
		solution: {
			description: `
네트워크 트래픽 분석 방법:
1. 네트워크 트래픽 데이터를 캡처합니다.
2. 트래픽을 분석하여 이상 징후를 찾아냅니다.
3. 발견된 증거를 문서화합니다.`,
		},
		isSolved: false,
	},
	{
		id: 6,
		type: '디지털 증거 분석',
		name: '휴대폰 데이터 복구',
		author: 'Digital Evidence Group',
		content:
			'휴대폰 데이터 이미지를 분석하여 삭제된 데이터를 복구하고, 관련된 증거를 찾아내는 문제입니다.',
		answer: 'someCorrectAnswer6',
		file: 'file/something6.zip',
		solution: {
			description: `
휴대폰 데이터 복구 방법:
1. 휴대폰 데이터 이미지를 분석 도구로 엽니다.
2. 삭제된 데이터를 복구합니다.
3. 복구된 데이터를 분석합니다.`,
		},
		isSolved: false,
	},
	{
		id: 7,
		type: '이메일 포렌식',
		name: '피싱 이메일 분석',
		author: 'Email Security Unit',
		content:
			'제공된 이메일 데이터를 분석하여 피싱 시도를 찾아내고, 관련된 증거를 추출하는 문제입니다.',
		answer: 'someCorrectAnswer7',
		file: 'file/something7.zip',
		solution: {
			description: `
피싱 이메일 분석 방법:
1. 제공된 이메일 데이터를 분석합니다.
2. 피싱 시도를 찾아냅니다.
3. 발견된 증거를 문서화합니다.`,
		},
		isSolved: false,
	},
	{
		id: 8,
		type: '로그 분석',
		name: '서버 로그 분석',
		author: 'System Admins',
		content:
			'서버 로그 파일을 분석하여 이상 징후를 찾아내고, 관련된 증거를 추출하는 문제입니다.',
		answer: 'someCorrectAnswer8',
		file: 'file/something8.zip',
		solution: {
			description: `
서버 로그 분석 방법:
1. 서버 로그 파일을 분석 도구로 엽니다.
2. 이상 징후를 찾아냅니다.
3. 발견된 증거를 문서화합니다.`,
		},
		isSolved: false,
	},
	{
		id: 9,
		type: '네트워크 포렌식',
		name: 'Wireshark를 사용한 패킷 캡처',
		author: 'Cyber Security Lab',
		content:
			'Wireshark를 사용하여 캡처한 패킷 데이터를 분석하여 관련된 증거를 찾아내는 문제입니다.',
		answer: 'someCorrectAnswer9',
		file: 'file/something9.zip',
		solution: {
			description: `
패킷 캡처 및 분석 방법:
1. Wireshark를 사용하여 패킷을 캡처합니다.
2. 캡처한 패킷 데이터를 분석합니다.
3. 분석된 결과를 문서화합니다.`,
		},
		isSolved: false,
	},
	{
		id: 10,
		type: '디스크 포렌식',
		name: '파일 시스템 분석',
		author: 'Cyber Research Group',
		content:
			'파일 시스템을 분석하여 중요한 파일이나 삭제된 데이터를 복구하고, 관련된 증거를 찾아내는 문제입니다.',
		answer: 'someCorrectAnswer10',
		file: 'file/something10.zip',
		solution: {
			description: `
파일 시스템 분석 방법:
1. 파일 시스템을 마운트합니다.
2. 중요한 파일이나 삭제된 데이터를 복구합니다.
3. 발견된 증거를 분석합니다.`,
		},
		isSolved: false,
	},
	{
		id: 11,
		type: '메모리 포렌식',
		name: '프로세스 메모리 덤프 분석',
		author: 'Forensics Team',
		content:
			'프로세스 메모리 덤프 파일을 분석하여 악성 프로세스나 민감한 데이터를 추출하는 문제입니다.',
		answer: 'someCorrectAnswer11',
		file: 'file/something11.zip',
		solution: {
			description: `
프로세스 메모리 덤프 분석 방법:
1. 메모리 덤프 파일을 분석 도구로 엽니다.
2. 악성 프로세스나 민감한 데이터를 스캔합니다.
3. 발견된 증거를 분석합니다.`,
		},
		isSolved: false,
	},
	{
		id: 12,
		type: '악성코드 분석',
		name: '악성코드 샘플 분석',
		author: 'Malware Analysis Lab',
		content:
			'제공된 악성코드 샘플을 분석하여 그 동작과 목적을 파악하고, 관련된 증거를 찾아내는 문제입니다.',
		answer: 'someCorrectAnswer12',
		file: 'file/something12.zip',
		solution: {
			description: `
악성코드 샘플 분석 방법:
1. 악성코드 샘플을 안전한 환경에서 실행합니다.
2. 악성코드의 동작을 모니터링합니다.
3. 분석된 결과를 문서화합니다.`,
		},
		isSolved: false,
	},
	{
		id: 13,
		type: '네트워크 포렌식',
		name: 'DNS 트래픽 분석',
		author: 'Network Security Team',
		content:
			'DNS 트래픽 데이터를 분석하여 이상 징후를 찾아내고, 관련된 증거를 추출하는 문제입니다.',
		answer: 'someCorrectAnswer13',
		file: 'file/something13.zip',
		solution: {
			description: `
DNS 트래픽 분석 방법:
1. DNS 트래픽 데이터를 캡처합니다.
2. 트래픽을 분석하여 이상 징후를 찾아냅니다.
3. 발견된 증거를 문서화합니다.`,
		},
		isSolved: false,
	},
	{
		id: 14,
		type: '디지털 증거 분석',
		name: 'USB 드라이브 복구',
		author: 'Digital Evidence Group',
		content:
			'USB 드라이브 데이터를 분석하여 삭제된 데이터를 복구하고, 관련된 증거를 찾아내는 문제입니다.',
		answer: 'someCorrectAnswer14',
		file: 'file/something14.zip',
		solution: {
			description: `
USB 드라이브 복구 방법:
1. USB 드라이브 데이터를 분석 도구로 엽니다.
2. 삭제된 데이터를 복구합니다.
3. 복구된 데이터를 분석합니다.`,
		},
		isSolved: false,
	},
	{
		id: 15,
		type: '이메일 포렌식',
		name: '스팸 이메일 식별',
		author: 'Email Security Unit',
		content:
			'제공된 이메일 데이터를 분석하여 스팸 이메일을 식별하고, 관련된 증거를 추출하는 문제입니다.',
		answer: 'someCorrectAnswer15',
		file: 'file/something15.zip',
		solution: {
			description: `
스팸 이메일 식별 방법:
1. 제공된 이메일 데이터를 분석합니다.
2. 스팸 이메일을 식별합니다.
3. 발견된 증거를 문서화합니다.`,
		},
		isSolved: false,
	},
]
