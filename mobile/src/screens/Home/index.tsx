import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import LogoImg from "../../assets/logo-nlw-eSports.png";
import { styles } from "./styles";
import { IGame } from "../../interface";

import { GameCard } from "../../components/GameCard";
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";

export function Home() {
  const [games, setGames] = useState<IGame[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: IGame) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    axios
      .get("http://192.168.1.110:3000/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={LogoImg} style={styles.logo} />
        <Header
          subtitle="Selecione o game que deseja jogar"
          title="Encontre seu duo!"
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
