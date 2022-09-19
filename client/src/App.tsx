import { MagnifyingGlassPlus } from "phosphor-react";

import "./styles/main.css";

import { CardGame } from "./components/cardGame";

import logoImg from "./assets/logo-nlw-esports.png";
import game1 from "./assets/games/game-1.png";
import game2 from "./assets/games/game-2.png";
import game3 from "./assets/games/game-3.png";
import game4 from "./assets/games/game-4.png";
import game5 from "./assets/games/game-5.png";
import game6 from "./assets/games/game-6.png";

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20 ">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        esta aqui
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        <CardGame image={game1} link="a" span="a" title="a" />
        <CardGame image={game2} link="a" span="a" title="a" />
        <CardGame image={game3} link="a" span="a" title="a" />
        <CardGame image={game4} link="a" span="a" title="a" />
        <CardGame image={game5} link="a" span="a" title="a" />
        <CardGame image={game6} link="a" span="a" title="a" />
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}
