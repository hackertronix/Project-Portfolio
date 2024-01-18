import Image from 'next/image';

type SkillIconProps = {
  path: string;
  width?: number;
  height?: number;
};

export default function SkillIcon({
  path,
  width = 50,
  height = 50,
}: SkillIconProps) {
  return <Image src={path} width={width} height={height} alt="Skill Icon" />;
}
