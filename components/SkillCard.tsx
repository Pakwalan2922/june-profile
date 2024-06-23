import Image from 'next/image';

interface Props {
  title: string;
  image: string;
  percent: string;
}

const SkillCard = ({ title, image, percent }: Props) => {
  return (
    <div className="p-6 hover:bg-yellow-300 transition-all duration-300 cursor-pointer text-center rounded-lg bg-gray-900 h-[220px]">
      {/* Image */}
      <Image
        className="mx-auto object-cover"
        src={image}
        width={80}
        height={80}
        alt="skill"
      />
      {/* Title */}
      <h1 className="text-[16px] md:text-[18px] lg:text-[18px] xl:text-[18px] mt-[1rem] text-white font-bold">{title}</h1>
      {/* Percent */}
      <div className="bg-black mt-[1rem] rounded-lg p-2 text-white opacity-40 font-bold">
        {percent}%
      </div>
    </div>
  )
}

export default SkillCard