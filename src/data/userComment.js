import { Images } from 'config';

export const userComment = [
  {
    user: {
      avatar: Images.avatar1,
      name: 'Imam Farrhouk',
      time: '4 min ago',
    },
    reactions: [],
    comment:
      'Sed affert delenit ea. Ban at ferru facete ubernus. @Roscoes Eum dicta fuisset phaedrum ei, et amet iuvaret vituperatoribus vix.',
    commentImages: [Images.city1, Images.city3],
    replies: [
      {
        user: Images.avatar2,
        reply: 'Hi',
      },
    ],
  },
  {
    user: {
      avatar: Images.avatar1,
      name: 'Imam Farrhouk',
      time: '4 hour ago',
    },
    reactions: [
      {
        type: 'thumbup',
        count: 2214,
      },
      {
        type: 'thumbdown',
        count: 1700,
      },
    ],
    businessList: ['blackowned', 'LA'],
    comment:
      'Sed affert delenit ea. Ban at ferru facete ubernus. @Roscoes Eum dicta fuisset phaedrum ei, et amet iuvaret vituperatoribus vix.',
    commentImages: [Images.city2, Images.city3],
    replies: [
      {
        user: Images.avatar3,
        reply: 'Hi',
      },
      {
        user: Images.avatar2,
        reply: 'Hi',
      },
    ],
  },
  {
    user: {
      avatar: Images.avatar1,
      name: 'Imam Farrhouk',
      time: '1 day ago',
    },
    reactions: [
      {
        type: 'thumbup',
        count: 2214,
      },
      {
        type: 'thumbdown',
        count: 1700,
      },
    ],
    businessList: ['blackowned', 'LA'],
    comment:
      'Sed affert delenit ea. Ban at ferru facete ubernus. @Roscoes Eum dicta fuisset phaedrum ei, et amet iuvaret vituperatoribus vix.',
    commentImages: [Images.city2, Images.city3],
    replies: [
      {
        user: Images.avatar2,
        reply: 'Hi',
      },
      {
        user: Images.avatar3,
        reply: 'Hi',
      },
      {
        user: Images.avatar2,
        reply: 'Hi',
      },
      {
        user: Images.avatar3,
        reply: 'Hi',
      },
      {
        user: Images.avatar3,
        reply: 'Hi',
      },
    ],
  },
];
