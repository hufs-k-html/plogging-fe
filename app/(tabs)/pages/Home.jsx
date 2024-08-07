import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const plogging_image = require('../../../assets/image/homePlogging.png');

const Home = () => {
  return (
    <View className="flex-1 bg-white items-center">
      <StatusBar style="dark" />
      <Image source={plogging_image} className="resize-contain" />
      <View className="border border-black rounded-xl w-4/5 p-3 bg-white absolute top-64">
        <Text className="pl-2 mb-3">현재까지</Text>
        <View className="items-center">
          <Text className="text-lg">
            <Text className="text-green-500 font-bold">10.4 km</Text>를 걸으면서
          </Text>
          <Text className="text-lg">
            <Text className="text-green-500 font-bold">107개</Text>의 쓰레기를
            주웠어요 !
          </Text>
        </View>
      </View>
      <TouchableOpacity className="bg-green-500 w-40 h-40 rounded-full mt-36 justify-center items-center">
        <Text className="text-white text-2xl font-bold">플로깅</Text>
        <Text className="text-white text-2xl font-bold">시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
