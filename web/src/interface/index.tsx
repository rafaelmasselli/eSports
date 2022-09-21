interface TypeGames {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface ICardGame {
  id?: string;
  image?: string;
  title?: string;
  adsCounts?: number;
  link?: string;
}

export type { TypeGames, ICardGame };
