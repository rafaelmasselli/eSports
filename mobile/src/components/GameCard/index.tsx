import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
} from "react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

import { IGame } from "../../interface";

interface Props extends TouchableOpacityProps {
  data: IGame;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: data.bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} Anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
