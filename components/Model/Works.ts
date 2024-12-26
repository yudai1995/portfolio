import { technologyList } from './Technology';

export const works: {
    id: number;
    name: string;
    imgSrc: string;
    imgWidth: number;
    imgHeight: number;
    imgLayout: 'responsive' | 'fixed' | 'fill' | 'intrinsic';
    tecNum: number[];
    link?: {
      pagename: string;
      url: string;
      imgSrc: string;
      linkIcon: string;
      linkWidth: number;
      linkHeight: number;
    }[];
    comment: string[];
  }[] = [
    {
      id: 0,
      name: '家計簿管理ツール',
      imgSrc: '/images/works/budget-management-tool-img01.png',
      imgWidth: 1284,
      imgHeight: 963,
      imgLayout: 'responsive',
      tecNum: [6, 8, 4, 9, 10, 11, 2],
      link: [
        {
          pagename: 'GitHub',
          url: 'https://github.com/YUDAI1995/budget-management-tool',
          imgSrc: '/images/github-icon01.png',
          linkIcon: '',
          linkWidth: 64,
          linkHeight: 64,
        },
      ],
      comment: [
        '現金支出を、より管理しやすいようにしたいという思いがあり、作成したサイトです。',
        '目的、仕様の考案やAdobe XDを用いてのワイヤーフレームも作成をしました。',
      ],
    },
    {
      id: 1,
      name: '天候検索ツール',
      imgSrc: '/images/works/weather-search-tool-img01.png',
      imgWidth: 2048,
      imgHeight: 1666,
      imgLayout: 'responsive',
      tecNum: [7, 8, 4, 13, 14],
      link: [
        {
          pagename: 'GitHub',
          url: 'https://github.com/YUDAI1995/weather-search-tool',
          imgSrc: '/images/github-icon01.png',
          linkIcon: '',
          linkWidth: 64,
          linkHeight: 64,
        },
      ],
      comment: [
        '地図検索と検索地域の天候が確認できるツールです。',
        '地図と天候の情報はGoogle MapsとOpen WeatherのAPIを使用させていただいております。',
      ],
    },
    {
      id: 2,
      name: 'チャットツール (React)',
      imgSrc: '/images/works/chatapp-img01.png',
      imgWidth: 1690,
      imgHeight: 1404,
      imgLayout: 'responsive',
      tecNum: [6, 8, 4, 9, 10, 12, 2],
      link: [
        {
          pagename: 'GitHub',
          url: 'https://github.com/YUDAI1995/react-chatapp',
          imgSrc: '/images/github-icon01.png',
          linkIcon: '',
          linkWidth: 64,
          linkHeight: 64,
        },
      ],
      comment: [
        'ReactとSocket.IOを用いてリアルタイムでチャットできるツールを作成しました。',
      ],
    },
    {
      id: 3,
      name: 'チャットツール (Vue.js)',
      imgSrc: '/images/works/chatapp-img01.png',
      imgWidth: 1690,
      imgHeight: 1404,
      imgLayout: 'responsive',
      tecNum: [15, 3, 9, 10, 12, 2],
      link: [
        {
          pagename: 'GitHub',
          url: 'https://github.com/YUDAI1995/vue-chatapp',
          imgSrc: '/images/github-icon01.png',
          linkIcon: '',
          linkWidth: 64,
          linkHeight: 64,
        },
      ],
      comment: [
        'Vue.jsとSocket.IOを用いたチャットツールです。',
        'Reactで作成したものをVue.jsを用いて置きかえたものです。',
      ],
    },
    {
      id: 4,
      name: '舞台照明シミュレーションツール',
      imgSrc: '/images/works/stage-lighting-simulation-img01.png',
      imgWidth: 1920,
      imgHeight: 967,
      imgLayout: 'responsive',
      tecNum: [3, 5, 9, 10, 1],
      comment: [
        '舞台機構設営前の照明シミュレーションを目的に、学生時に作成したものです。',
        'Three.jsを用いて3Dモデリングを行いました。',
      ],
    },
  ];

export const getTechnologyListText = (tecNum: number[]): string => {
    let text = '';
    tecNum.forEach((num) => {
      if (text === '') {
        text += technologyList[num].name;
      } else text += ', ' + technologyList[num].name;
    });
    return text;
  };