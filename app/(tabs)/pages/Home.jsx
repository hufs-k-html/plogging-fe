import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plogging_image = require('../../../assets/image/homePlogging.png');

const Home = () => {
  return (
    <SafeAreaView style={styles.safeAreaView} className="flex-1 items-center">
      <StatusBar style="dark" />
      <View
        style={styles.topContainer}
        className="py-4 w-full border-b border-gray items-center"
      >
        <Text className="text-xl">플로깅 시작하기</Text>
      </View>
      <Image source={plogging_image} className="resize-contain" />
      <View
        style={styles.current}
        className="border rounded-xl w-4/5 p-3 bg-white absolute top-96"
      >
        <Text className="pl-2 mb-3">현재까지</Text>
        <View className="items-center">
          <Text className="text-lg">
            <Text style={styles.green} className="font-bold text-xl">
              10.4 km
            </Text>
            를 걸으면서
          </Text>
          <Text className="text-lg mb-3">
            <Text style={styles.green} className="font-bold text-xl">
              107개
            </Text>
            의 쓰레기를 주웠어요 !
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.startPlogging}
        className="w-40 h-40 rounded-full mt-36 justify-center items-center"
      >
        <Text
          style={styles.startText}
          className="text-white text-2xl font-bold"
        >
          플로깅
        </Text>
        <Text style={styles.startText} className="text-2xl font-bold">
          시작하기
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
  },
  current: {
    backgroundColor: '#fff',
  },
  green: {
    color: '#2DB400',
  },
  startPlogging: {
    backgroundColor: '#2DB400',
  },
  startText: {
    color: '#fff',
  },
  topContainer: {
    backgroundColor: '#fff',
  },
});

export default Home;
