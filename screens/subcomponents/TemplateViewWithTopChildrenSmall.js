import { StyleSheet, View, Image, Text } from "react-native";
import ButtonKvImage from "./buttons/ButtonKvImage";
import BackArrow from "../../assets/images/navigationAndSmall/btnTemplateViewBackArrow.svg";
import { useNavigation } from "@react-navigation/native";
import KyberVisionLogoCrystal from "../../assets/images/KyberVisionLogoCrystal.svg";

export default function TemplateViewWithTopChildrenSmall({
  children,
  navigation,
  topChildren,
}) {
  const handleBackPress = async () => {
    // await ScreenOrientation.lockAsync(
    //   ScreenOrientation.OrientationLock.PORTRAIT_UP
    // ); // Force back to portrait
    // setOrientation("portrait");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Image
          source={require("../../assets/images/imgBackgroundBottomFade.png")}
        />

        {navigation && (
          <View style={styles.btnBack}>
            <ButtonKvImage
              onPress={() => {
                handleBackPress();
              }}
            >
              <BackArrow style={styles.svgBackArrow} />
            </ButtonKvImage>
          </View>
        )}
        <View style={styles.vwLogoAndTopChildren}>
          <KyberVisionLogoCrystal width={20} height={20} />
          {topChildren}
        </View>
      </View>
      <View style={styles.containerBottom}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "dashed",
    height: "15%",
  },
  btnBack: {
    position: "absolute",
    top: 50,
    left: 20,
  },

  vwLogoAndTopChildren: {
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 20,
  },
  containerBottom: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
