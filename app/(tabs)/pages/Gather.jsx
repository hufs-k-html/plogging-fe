import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const ploggingGather = require('../../../assets/image/ploggingGather.png');

const sampleData = [
  {
    area: '수지구',
    title: '탄천에서 같이 플로깅 해요 !',
    maxPeople: 20,
    currentPeople: 4,
    date: '2024-08-07',
  },
  {
    area: '처인구',
    title: '모현에서 같이 플로깅 해요 !',
    maxPeople: 15,
    currentPeople: 12,
    date: '2024-08-11',
  },
  {
    area: '기흥구',
    title: '기흥역 근처에서 같이 플로깅 해요 !',
    maxPeople: 25,
    currentPeople: 13,
    date: '2024-08-20',
  },
];

const getBackgroundColor = (area) => {
  switch (area) {
    case '수지구':
      return '#2DB400';
    case '기흥구':
      return '#F85B56';
    case '처인구':
      return '#FFDE33';
  }
};

const Gather = () => {
  return (
    <SafeAreaView className="flex-1" style={styles.safeAreaView}>
      <StatusBar style="dark" />
      <View className="border-b border-gray py-4 items-center">
        <Text className="text-xl">플로깅 함께해요</Text>
      </View>
      <ScrollView>
        <Image source={ploggingGather} className="resize-contain" />
        <View className="flex-1 px-4">
          <Text
            style={styles.currentText}
            className="text-base text-gray-500 pl-2 mb-2"
          >
            현재 모집 중인 플로깅
          </Text>
          <Text
            style={styles.currentText}
            className="text-base text-gray-500 pl-2 mb-4"
          >
            총 {sampleData.length}개
          </Text>
          {sampleData.map((item, index) => (
            <View
              key={index}
              className="flex-row border rounded-xl mb-4 p-3 bg-white shadow-md"
            >
              <View
                style={{ backgroundColor: getBackgroundColor(item.area) }}
                className="w-16 h-16 rounded-full justify-center items-center"
              >
                <Text className="font-bold">{item.area}</Text>
              </View>
              <View className="ml-4 flex-1">
                <Text className="text-lg font-bold">{item.title}</Text>
                <Text className="text-gray mt-2">
                  인원: {item.currentPeople}/{item.maxPeople} 명
                </Text>
                <Text className="mt-2" style={styles.dateText}>
                  일정: {item.date}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  safeAreaView: {
    backgroundColor: '#fff',
  },
  currentText: {
    color: '#97A5A4',
  },
  area: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  dateText: {
    color: '#3182F7',
  },
};

export default Gather;
