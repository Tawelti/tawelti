const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PlaseDetails from "../../components/ClientComponent/PlaseDetails";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const OnePlace = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  // const [fontsLoaded, error] = useFonts({
  //   "TitilliumWeb-Bold": require("../../assets/fonts/TitilliumWeb-Bold.ttf"),
  //   "Poppins-Light": require("../../assets/fonts/Poppins-Light.ttf"),
  //   "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
  //   "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
  //   "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  //   "Poppins-ExtraBold": require("../../assets/fonts/Poppins-ExtraBold.ttf"),
  //   "Poppins-LightItalic": require("../../assets/fonts/Poppins-LightItalic.ttf"),
  //   "Poppins-MediumItalic": require("../../assets/fonts/Poppins-MediumItalic.ttf"),
  //   "Poppins-BoldItalic": require("../../assets/fonts/Poppins-BoldItalic.ttf"),
  // });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    <Text>knlnlnl</Text>
      {/* <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PlaseDetails"
              component={PlaseDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer> */}
    </>
  );
};
export default OnePlace;
