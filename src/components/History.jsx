import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './../styles/components/History.style';

export const History = () => {
  const historyData = [
    {
      title: 'Carrefour',
      date: '15-12-2021',
      amount: 250,
    },
    {
      title: 'Amazon',
      date: '2-12-2021',
      amount: 3000.21,
    },
    {
      title: 'Jumia',
      date: '1-12-2021',
      amount: 1500.21,
    },
    {
      title: 'IKEA',
      date: '28-11-2021',
      amount: 500.21,
    },
    {
      title: "McDonald's",
      date: '25-11-2021',
      amount: 50.21,
    },
    {
      title: 'Carrefour',
      date: '15-11-2021',
      amount: 420.24,
    },
    {
      title: 'Hala Slimen',
      date: '12-11-2021',
      amount: 5140.0,
    },
  ];
  return (
    <View style={styles.history}>
      <View style={styles.topHistory}>
        <Text style={[styles.black, styles.title]}>History</Text>
        <Text style={[styles.ViewAll]}>View All</Text>
      </View>
      <ScrollView>
        {historyData.map((item, index) => (
          <View>
            <View style={styles.historyBody} key={index}>
              <View>
                <Text style={[styles.black, styles.itemTitle]}>
                  {item.title}
                </Text>
                <Text style={[styles.black, styles.itemDate]}>{item.date}</Text>
              </View>
              <Text style={[styles.black, styles.itemAmount]}>
                ${item.amount}
              </Text>
            </View>
            <View style={styles.hrLine}></View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default History;
