import React, { useEffect, useState } from "react";
import { View, Text, Button, Platform, FlatList } from "react-native";

import { Calendar } from "react-native-calendars";

export default function CalendarScreen({ navigation, route }) {
  const title = route.params?.title;
  const description = route.params?.description;
  const items = route.params?.items || [];
  console.log(items);

  const [date, setDate] = useState();

  console.log(items);
  const handleDayPress = (day) => {
    setDate(day.dateString);
    console.log(day);
    navigation.navigate("Note", { day: day });
  };

  return (
    <View>
      <Calendar items={items} onDayPress={(day) => handleDayPress(day)} />
      <View>
        {items.length ? (
          <FlatList
            style={{ padding: 10 }}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <View key={Date.now()}>
                <Text>{itemData.item.title}</Text>
                <Text>{itemData.item.description}</Text>
                <Text>{itemData.item.date}</Text>
              </View>
            )}
          />
        ) : (
          <Text>No items</Text>
        )}
      </View>
    </View>
  );
}
