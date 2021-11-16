import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { useTranslation } from "react-i18next";

export function AppRoot() {
  const { t, i18n } = useTranslation();

  const [number, setNumber] = useState(0);

  return (
    <>
      <View style={{ height: 70, backgroundColor: "#fff" }} />
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Button
          title={t("content:buttons.ptBr", "port")}
          accessibilityLabel={t("accessibleContent:buttons.ptBr-label")}
          onPress={() => {
            i18n.changeLanguage("pt");
          }}
        />
        <Button
          title={t("content:buttons.enUs", "ing")}
          accessibilityLabel={t("accessibleContent:buttons.enUs-label")}
          onPress={() => {
            i18n.changeLanguage("en");
          }}
        />
      </View>
      <Text style={{ textAlign: "center" }}>lng: {i18n.language}</Text>
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>
          {t("countInfo", `Você incrementou ${number} vezes`)}
        </Text>
        <View style={{ alignItems: "center", alignSelf: "stretch" }}>
          <Text>{t("counterTitle", "Contador (0 a 10)")}</Text>
          <View style={{ height: 32 }} />
          <View
            style={{
              flexDirection: "row",
              alignSelf: "stretch",
              justifyContent: "space-evenly",
            }}
          >
            <Button
              title={t("content:buttons.increment", "increm")}
              accessibilityLabel={t(
                "accessibleContent:buttons.increment-label"
              )}
              onPress={() => {
                setNumber((old) => old + 1);
              }}
            />
            <Button
              title={t("content:buttons.reset", "resta")}
              accessibilityLabel={t("accessibleContent:buttons.reset-label")}
              onPress={() => {
                setNumber(0);
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
}
