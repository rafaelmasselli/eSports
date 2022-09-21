import React from "react";
import { View, Text } from "react-native";
import { IDuoInfo } from "../../interface";

import { styles } from "./styles";
import { THEME } from "../../theme";

export function DuoInfo({
  label,
  value,
  colorValue = THEME.COLORS.TEXT,
}: IDuoInfo) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, { color: colorValue }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
