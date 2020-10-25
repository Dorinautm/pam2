import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CreateNote from "./screens/note";
import CalendarScreen from "./screens/calendar";
import { TouchableOpacity } from "react-native";

function Notite({ navigation,route}) {
  return (
    <View>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.tbutton} onPress={() => navigation.navigate("Note")}>
        Add
      </Text>
    </TouchableOpacity>
     <TouchableOpacity style={styles.button2}>
     <Text style={styles.tbutton2} onPress={() => navigation.navigate("Calendar")}>
       Calendar
     </Text>
   </TouchableOpacity>
   </View>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#539489",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" component={Notite} />
        <Stack.Screen name="Note" component={CreateNote} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#474844",
    marginTop: 230,
    marginLeft: 160,
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#950618",
    marginTop: 10,
    marginLeft: 220,
    borderRadius: 40,
    width: 80,
    height: 80,
  },
  tbutton: {
    paddingTop: 18,
    color: "#ffff",
  },
  tbutton2: {
    paddingTop: 28,
    color: "#ffff",
  },
});
