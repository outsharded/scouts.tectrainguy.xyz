import Image from 'next/image'
import { motion } from 'framer-motion'
import Transparentpfp from '@images/in_mac.png'
const IntroCard = ({ section }) => {
	return (
		<motion.div
			className="col-span-3 md:col-span-2 bg-white dark:bg-slate-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
			whileHover="groupHover"
			animate={{ opacity: ['all', "about"].includes(section) ? 1 : 0.3 }}
			variants={{
				groupHover: {
					scale: 1.01,
					transition: {
						duration: 0.1,
						ease: 'easeInOut',
					},
				},
			}}
		>
			<div className="relative overflow-hidden">

				<div className=''>
					<motion.div
						variants={{ groupHover: { y: 220 } }}
						style={{ rotate: 180, zIndex: 20 }}
						className="hidden 2xl:block absolute -top-32 2xl:-top-52 right-10 rotate-180
						-mt-10 w-32 2xl:w-60"
					>
						<Image className="dark:brightness-90" src={Transparentpfp} alt='icon'/>{' '}
					</motion.div>
				</div>
				<div>
					<motion.div
						variants={{ groupHover: { y: 150 } }}
						style={{ rotate: 180, zIndex: 20 }}
						className="2xl:hidden absolute -top-32 2xl:-top-52 right-10 rotate-180 -mt-10 w-32 2xl:w-60"
					>
						<Image className="dark:brightness-90" src={Transparentpfp} alt='icon'/>{' '}
					</motion.div>
					<div className="text-3xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-6 md:ml-6 ml-5 md:m-8 font-nunito font-bold">13th Beckenham and North Penge Scouts</div>
				</div>
				<div className="flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
					<div className="flex lg:text-xl xl:text-2xl 2xl:text-2xl font-base dark:text-gray-300 mt-5">
					For young people aged 10½ to 14 years. Week in and week out, they gather in groups called Scout Troops to conquer the small task of changing the world.
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default IntroCard