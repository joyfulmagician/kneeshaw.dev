"use client";

import { useRole } from "@/contexts/RoleContext";
import { ROLES } from "@/utils/constants";
import GameView from "./GameView";
import LightServiceCard from "./LightServiceCard";

export default function NewGames() {
  const { role } = useRole();

  const data = [
    {
      image: "/images/home/service01.png",
      description: "Mobile Game Development",
    },
    {
      image: "/images/home/service02.png",
      description: "Unity 2d Game",
    },
    {
      image: "/images/home/service03.png",
      description: "Unity 3d Game",
    },
    {
      image: "/images/home/service04.png",
      description: "Unreal Game Development",
    },
    {
      image: "/images/home/service05.png",
      description: "Godot Game Development",
    },
    {
      image: "/images/home/service06.png",
      description: "HTML5 Game Development",
    },
    {
      image: "/images/home/service07.png",
      description: "Web3 Game Development",
    },
    {
      image: "/images/home/service08.png",
      description: "Daaps Development",
    },
    {
      image: "/images/home/service09.png",
      description: "Blockchain Integration",
    },
    {
      image: "/images/home/service10.png",
      description: "Bug Fixing",
    },
    {
      image: "/images/home/service11.png",
      description: "System Design",
    },
    {
      image: "/images/home/service12.png",
      description: "API Creation",
    },
  ];

  return (
    <>
      {role === ROLES.PLAYER && (
        <>
          <h2 className="mb-[100px] text-center text-[40px] font-light text-[#EDF1F3]">
            Stay up to date with the latest gaming news and updates
          </h2>

          <GameView />
        </>
      )}

      {role === ROLES.CREATOR && (
        <>
          <h2 className="mb-[70px] mt-[-280px] text-center text-[40px] font-bold text-[#211D19]">
            Meet With Our Services
          </h2>

          <div className="my-[20px] flex w-full flex-col px-[40px]">
            <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.map((props) => (
                <LightServiceCard
                  key={props.description}
                  image={props.image}
                  description={props.description}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
