import { useState } from "react";
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Clipboard from "expo-clipboard";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { THEME } from "../../theme";
import CheckCircle from "../../assets/CheckCircle.png";
import { Header } from "../Header";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ onClose, discord, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);
  async function handleCopyDiscordToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord copiado!",
      "Usuário copiado com sucesso, Cole no discord e boa jogatina"
    );
    setIsCopping(false);
  }

  return (
    <Modal transparent statusBarTranslucent animationType="fade" {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <Image source={CheckCircle} style={styles.check} />
          <Header
            style={{ alignItems: "center", marginTop: 24 }}
            title="Let's play!"
            subtitle="Agora e so começar a jogar!"
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            disabled={isCopping}
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
          >
            <Text style={styles.discord}>
              {" "}
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
