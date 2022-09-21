import { ColorValue } from "react-native";

interface IGame {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

interface IAd {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: number;
  weekDays: string[];
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: boolean;
}

interface IDuoInfo {
  label: string;
  value: string;
  colorValue?: ColorValue;
}



export { IAd, IGame, IDuoInfo };
