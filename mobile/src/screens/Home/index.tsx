import { View, Image, FlatList } from "react-native";

import LogoImg from "../../assets/logo-nlw-esports.png";

import { GAMES } from "../../utils/games";
import { GameCard } from "../../components/GameCard";
import { Header } from "../../components/Header";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={LogoImg} style={styles.logo} />

      <Header
        subtitle="Selecione o game que deseja jogar"
        title="Encontre seu duo!"
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}
