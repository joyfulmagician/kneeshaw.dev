"use client";

interface Props {
  image: string;
  description: string;
}

export default function LightServiceCard({ image, description }: Props) {
  return (
    <div className="mx-auto flex h-[185px] w-[185px] flex-col items-center justify-center gap-[15px] rounded-[41px] bg-[#EDF1F3] shadow-lg">
      <img src={image} />
      <div className="text-center">{description}</div>
    </div>
  );
}
