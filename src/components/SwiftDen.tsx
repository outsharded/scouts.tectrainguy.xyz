import Image from 'next/image'
import { motion } from 'framer-motion'
const SwiftDen = ({ section }) => {
	return (
		<motion.a
		href="https://www.scouts.org.uk/groups/10017649?loc=BR3%203HR&section=Scout&slug=13th-Penge-%26-Beckenham-North"
		target="_blank"
		rel="noreferrer"
			className="col-span-3 md:col-span-2 bg-white dark:bg-slate-900
			 rounded-3xl text-gray-600 dark:text-gray-300 aspect-2/1 pb-4 md:pb-0"
			whileHover="groupHover"
			animate={{ opacity: ['all', 'contact'].includes(section) ? 1 : 0.3 }}
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

				<div>
	
					<div className="text-3xl md:text-4xl 2xl:text-4xl 2xl:mt-16 m-6 md:ml-6 ml-5 md:m-8 font-nunito font-bold">Join Us!</div>
				</div>
				<div className="flex flex-col ml-5 justify-center 2xl:mt-10 sm:-mt-6 sm:ml-8 md:ml-6">
					<div className="flex lg:text-xl xl:text-2xl 2xl:text-2xl font-base dark:text-gray-300 mt-5">
						Come join us, every Wednesday at 8:30PM in the Beckenham Baptist Church.
					</div>
				</div>
			</div>
		</motion.a>
	)
}

export default SwiftDen
