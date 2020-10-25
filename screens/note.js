import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Button,
  ScrollView,
  Card,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function CreateNote({ navigation, route }) {
  const [items, setItems] = useState([]);
  const [noteText, setNoteText] = React.useState("");
  const [noteDescription, setNoteDescription] = React.useState("");
  const date = route.params?.day;
  const onClick = () => {
    items.push({
      id: new Date().toString(),
      title: noteText,
      description: noteDescription,
      date: date.dateString,
    });
    navigation.navigate("Calendar", {
      items: items,
    });
  };

  return (
    <View>
      <View>
        <Text style={{ marginLeft: 130, marginTop: 50 }}>Add a note here</Text>
        <View style={styles.note}>
          <Text>{date.dateString}</Text>

          <TextInput
            style={styles.title}
            placeholder="Title"
            name="noteText"
            value={noteText}
            onChangeText={(text) => setNoteText(text)}
          />
          <TextInput
            style={styles.title}
            placeholder="Description"
            name="noteDescription"
            value={noteDescription}
            onChangeText={(text) => setNoteDescription(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.save}
          onPress={() => {
            onClick();
          }}
        >
          <Text>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  note: {
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
  },
  title: {
    fontSize: 30,
  },
  save: {
    marginTop: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  wnote: {
    paddingBottom: 100,
  },
});
