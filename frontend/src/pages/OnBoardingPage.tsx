import Banner from '../components/Banner'
import IntroCard from '../components/IntroCard'
import expert from '../../src/assets/expert.svg'
import cloud from '../../src/assets/cloud.svg'
import online from '../../src/assets/online.svg'

const OnBoardingPage = () => {
	return (
		<>
			<Banner />
			<section className="flex flex-col items-center justify-center p-8 text-xl font-medium text-[#333]">
				<p>
					<span className="text-teal-400">Digital Forensics</span>는
				</p>
				<p>
					전문적인 디지털 포렌식 전문가 양성을 목적으로 양질의 교육 콘텐츠를
					제공합니다
				</p>
			</section>
			<section className="flex justify-center gap-12">
				<IntroCard
					img={expert}
					content="전문가가 직접 출제한
문제를 제공합니다"
				/>
				<IntroCard
					img={cloud}
					content="클라우드 서비스를 통해
					 실습을 할 수 있습니다"
				/>
				<IntroCard
					img={online}
					content="온라인으로 자유롭게
					어디서나 학습이 가능합니다"
				/>
			</section>
		</>
	)
}

export default OnBoardingPage
