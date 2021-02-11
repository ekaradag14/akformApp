import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  Animated,
  Image,
  SafeAreaView,
} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {
  colors,
  carouselData,
  SCREEN_WIDTH,
  CAROUSEL_ITEM_WIDTH,
  USERS,
} from './constants';

const Instructions = ({setIsInstructionsFinished, isBackFromCompare}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    activeSlide === 2
      ? setIsInstructionsFinished(true)
      : setIsInstructionsFinished(false);
  }, [activeSlide]);

  const renderItem = ({item}) => (
    <View style={styles.snapCarouselItem}>
      <View style={styles.carouselItemTitle}>
        <Text style={styles.carouselItemTitleText}>{item.title}</Text>
      </View>
      <Text style={styles.descriptionText}>{item.description}</Text>
    </View>
  );
  const renderPagination = () => (
    <Pagination
      dotsLength={carouselData.length}
      activeDotIndex={activeSlide}
      dotStyle={styles.dotStyle}
      containerStyle={styles.paginationContainer}
    />
  );
  const renderListItem = ({item}) => (
    <View key={item.id} style={styles.card}>
      <Image style={styles.avatar} source={{uri: item.avatar}} />
      <Text style={styles.fullNameText}>{item.fullName}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Animated.View style={styles.snapCarousel}>
        <View style={styles.carouselWrapper}>
          <Carousel
            data={carouselData}
            renderItem={renderItem}
            onSnapToItem={(index) => {
              setActiveSlide(index);
            }}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={CAROUSEL_ITEM_WIDTH}
            firstItem={isBackFromCompare && 2}
          />
        </View>
        {renderPagination()}
      </Animated.View>
      <FlatList
        data={USERS}
        keyExtractor={(user) => String(user.id)}
        renderItem={renderListItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  flatList: {
    height: '100%',
  },
  screen: {
    flex: 1,
    marginBottom: 28,
  },
  snapCarousel: {
    paddingBottom: 16,
    paddingTop: 8 + getStatusBarHeight(),
  },
  descriptionText: {
    color: colors.biscay,
    fontSize: 16,
    paddingVertical: 16,
  },
  titleText: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    color: colors.white,
    fontWeight: '900',
    fontSize: 15,
  },
  snapCarouselItem: {
    height: 450,

    borderRadius: 30,
    backgroundColor: colors.white,
    padding: 16,
  },
  carouselItemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  carouselItemTitleText: {
    fontSize: 18,
    color: colors.sapphire,
    fontWeight: '600',
    marginLeft: 12,
  },
  paginationContainer: {
    paddingVertical: 4,
  },
  dotStyle: {
    backgroundColor: 'transparent',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#402583',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 1,
    borderRadius: 10,
    marginHorizontal: 12,
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  avatar: {
    height: 54,
    width: 54,
    resizeMode: 'contain',
    borderRadius: 54 / 2,
  },
  fullNameText: {
    fontSize: 16,
    marginLeft: 24,
  },
});

export default Instructions;
