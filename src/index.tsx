import React from "react";
import { Button, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

export function AppRoot() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button
          title="ptBr"
          onPress={() => {
            i18n.changeLanguage("pt");
          }}
        />
        <Button
          title="enUs"
          onPress={() => {
            i18n.changeLanguage("en");
          }}
        />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>{t("welcome")}</Text>
      </View>
    </>
  );
}
