import React ,{useState,useEffect} from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { Appbar } from 'react-native-paper';
// import { Calendar, Agenda } from 'react-native-calendars';
import CalendarStrip from "react-native-calendar-strip";
import * as Calendar from "expo-calendar";
import moment from "moment";

export default function App() {
  const [CurrentDate, setCurrentDate] = useState(new Date());
  const datesWhitelist = [
    {
      start: moment(),
      end: moment().add(365, "days"), // total 4 days enabled
    },
  ];
  return (
    <>
      <CalendarStrip
        calendarAnimation={{ type: "sequence", duration: 30 }}
        daySelectionAnimation={{
          type: "background",
          duration: 200,
        }}
        style={{
          height: 150,
          marginTop: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}
        calendarHeaderStyle={{ color: "#000000" }}
        dateNumberStyle={{ color: "#000000", paddingTop: 10 }}
        dateNameStyle={{ color: "#BBBBBB" }}
        highlightDateNumberStyle={{
          color: "#fff",
          backgroundColor: "#2E66E7",
          marginTop: 10,
          height: 35,
          width: 35,
          textAlign: "center",
          borderRadius: 17.5,
          overflow: "hidden",
          paddingTop: 6,
          fontWeight: "400",
          justifyContent: "center",
          alignItems: "center",
        }}
        highlightDateNameStyle={{ color: "#2E66E7" }}
        disabledDateNameStyle={{ color: "grey" }}
        disabledDateNumberStyle={{ color: "grey", paddingTop: 10 }}
        datesWhitelist={datesWhitelist}
        // iconLeft={require('../../../assets/left-arrow.png')}
        // iconRight={require('../../../assets/right-arrow.png')}
        iconContainer={{ flex: 0.1 }}
        minDate={moment()}
        maxDate={moment().add(10, "days")}
        datesBlacklist={(date) => {
          return date.isoWeekday() === 6 || date.isoWeekday() === 7;
        }}
        // selectedDate={currentDate}
        onDateSelected={(date) => {
          const selectedDate = `${moment(date).format('YYYY')}-${moment(
            date
          ).format('MM')}-${moment(date).format('DD')}`;
          // updateCurrentTask(selectedDate);
          setCurrentDate(selectedDate);
          <text>{selectedDate}</text>
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
