const Banner = () => {
	return (
		<div className="relative text-white h-80">
			<img
				src="../../src/assets/main.jpg"
				className="object-cover w-full opacity-85 h-80"
			></img>
			<p className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center h-8 m-auto text-2xl">
				Digital Forensics에서 제공하는 전문적인 교육 콘텐츠를 경험해 보세요
			</p>
		</div>
	)
}

export default Banner
