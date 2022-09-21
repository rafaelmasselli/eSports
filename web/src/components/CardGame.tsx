import { ICardGame } from "../interface";

export function CardGame({ image, adsCounts, title, link }: ICardGame) {
  return (
    <a href={link} className="relative rounded-lg overflow-hidden ">
      <img src={image} alt={"image " + title} />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 tex-sm block">{adsCounts} anúncios</span>
      </div>
    </a>
  );
}
