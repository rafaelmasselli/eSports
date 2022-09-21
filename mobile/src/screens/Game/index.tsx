import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { TouchableOpacity, View, Image, FlatList, Text } from "react-native";
import axios from "axios";

import { Entypo } from "@expo/vector-icons";
import { styles } from "./styles";

import logoImg from "../../assets/logo-nlw-eSports.png";
import { Background } from "../../components/Background";
import { THEME } from "../../theme";

import { Header } from "../../components/Header";
import { DuoCard } from "../../components/DuoCard";
import { IAd } from "../../interface";
import { DuoMatch } from "../../components/DuoMatch";

export function Game() {
  const [discordSelect, setDiscordSelect] = useState("");
  const [duos, setDuos] = useState<IAd[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBlack() {
    navigation.goBack();
  }
  async function getDiscordUser(adsId: string) {
    axios
      .get(`http://192.168.1.110:3000/ads/${adsId}/discord`)
      .then((response) => {
        setDiscordSelect(response.data.discord);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    axios
      .get(`http://192.168.1.110:3000/games/${game.id}/ads`)
      .then((response) => {
        setDuos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBlack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Header subtitle="conecte-se e comece a jogar!" title={game.title} />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContent,
          ]}
          style={styles.containerList}
          data={duos}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Nao há anúncios publicados ainda
            </Text>
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard
              key={item.id}
              data={item}
              onConnect={() => getDiscordUser(item.id)}
            />
          )}
        />
        <DuoMatch
          onClose={() => setDiscordSelect("")}
          visible={discordSelect.length > 0}
          discord={discordSelect}
        />
      </SafeAreaView>
    </Background>
  );
}
