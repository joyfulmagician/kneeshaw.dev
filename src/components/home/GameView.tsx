"use client";

import ImageCard from "./ImageCard";

export default function GameView() {
  const cards = [
    {
      image: "/images/home/card01.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/home/card02.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/home/card03.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/home/card04.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/home/card05.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/home/card06.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/home/card07.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
    {
      image: "/images/home/card08.png",
      title: "Content update 0.4.2",
      subtitle: "Patch notes",
      paragraph:
        "Forgotten Shore and the Dauntless Few Please Wishlist Titan Saga on Steam: Titan Saga: Chains of KronosOr purchase and play on VoxPop Games: Titan Saga: Chains of Kronos (ACT 1)...",
    },
  ];

  return (
    // <div className="flex w-full flex-col justify-between px-[40px]">
    //   <div className="grid grid-cols-1 gap-[60px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    //     {cards.map((props) => (
    //       <ImageCard
    //         key={props.title}
    //         image={props.image}
    //         title={props.title}
    //         subtitle={props.subtitle}
    //         paragraph={props.paragraph}
    //       />
    //     ))}
    //   </div>
    // </div>

    <div className="mx-[40px] flex flex-wrap justify-center gap-[60px] lg:gap-[80px]">
      {cards.map((props) => (
        <ImageCard
          key={props.title}
          image={props.image}
          title={props.title}
          subtitle={props.subtitle}
          paragraph={props.paragraph}
        />
      ))}
    </div>
  );
}
