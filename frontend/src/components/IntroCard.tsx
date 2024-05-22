type IntroCardProps = {
	img: string
	content: string
}

const IntroCard = ({ img, content }: IntroCardProps) => {
	return (
		<div className="flex flex-col items-center justify-center h-56 bg-gray-100 rounded-md shadow-sm w-88">
			<img src={img} alt={img} className="w-24 mb-8" />
			<p className="text-center text-[#333]">{content}</p>
		</div>
	)
}

export default IntroCard
