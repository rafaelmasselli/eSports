import { FormEvent, useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import "./styles/main.css";

import { CardGame } from "./components/CardGame";
import { Input } from "./components/Form/Input";

import logoImg from "./assets/logo-nlw-esports.png";
import { CreateAdBanner } from "./components/CreateAdBanner";
import axios from "axios";
import { CreateAdModal } from "./components/CreateAdModal";
import { TypeGames } from "./interface";

export function App() {
  const [games, setGames] = useState<TypeGames[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <CardGame
              key={game.id}
              title={game.title}
              image={game.bannerUrl}
              adsCounts={game._count.ads}
              link={""}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <CreateAdBanner
          title={"Não encontrou seu duo?"}
          subtitle={"Publique sum anuncio para encontrar novos players"}
          titleButton={"Publicar anuncio"}
        />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}
