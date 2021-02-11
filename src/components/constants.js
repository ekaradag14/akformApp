import React from 'react';
import {Dimensions} from 'react-native';
import faker from 'faker';

export const carouselData = [
  {
    title: 'Facebook',
    description: 'Connect with friends and the world around you on Facebook.',
    bgColor: '#3B5998',
  },
  {
    title: 'WhatsApp',
    description:
      'With WhatsApp, you will get fast, simple, secure messaging and calling for free*, available on phones all over the world.',
    bgColor: '#43d854',
  },
  {
    title: 'Instagram',
    description: 'Bringing you closer to the people and things you love.',
    bgColor: '#C13584',
  },
];

export const colors = {
  kellyGreen: '#6BCD28',
  shipCove: '#7A8EB1',
  white: '#FFFFFF',
  biscay: '#2B3857',
};

export const USERS = Array(10)
  .fill(null)
  .map((_, idx) => ({
    id: idx,
    avatar: faker.image.avatar(),
    fullName: `${faker.name.firstName()} ${faker.name.lastName()}`,
  }));

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const CAROUSEL_VERTICAL_OUTPUT = 56;
export const CAROUSEL_ITEM_WIDTH = SCREEN_WIDTH - CAROUSEL_VERTICAL_OUTPUT;
