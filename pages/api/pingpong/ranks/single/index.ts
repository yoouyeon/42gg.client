import type { NextApiRequest, NextApiResponse } from 'next';

type RankUserData = {
  intraId: string;
  rank: number;
  ppp: number;
  tierImageUri: string;
  statusMessage: string;
};

type RankData = {
  myRank: number;
  currentPage: number;
  totalPage: number;
  rankList: RankUserData[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const RankUserData: RankUserData[] = [
    {
      intraId: 'hyungjpa',
      rank: 1,
      ppp: 1000,
      tierImageUri:
        'https://cdn.pixabay.com/photo/2022/07/29/05/52/table-tennis-7351159_1280.png',
      statusMessage: '🏓🏓🏓🏓 42서울 최강 탁구왕 🏓🏓🏓🏓',
    },
    {
      intraId: 'hyungjpa',
      rank: 2,
      ppp: 1000,
      tierImageUri:
        'https://cdn.pixabay.com/photo/2022/07/29/05/52/table-tennis-7351159_1280.png',
      statusMessage: '안녕하세요',
    },
    {
      intraId: 'hyungjpa',
      rank: 3,
      ppp: 1000,
      tierImageUri:
        'https://cdn.pixabay.com/photo/2022/07/29/05/52/table-tennis-7351159_1280.png',
      statusMessage: '안녕하세요',
    },
    {
      intraId: 'hyungjpa',
      rank: 4,
      ppp: 1000,
      tierImageUri:
        'https://cdn.pixabay.com/photo/2022/07/29/05/52/table-tennis-7351159_1280.png',
      statusMessage: '안녕하세요',
    },
    {
      intraId: 'hyungjpa',
      rank: 5,
      ppp: 1000,
      tierImageUri:
        'https://cdn.pixabay.com/photo/2022/07/29/05/52/table-tennis-7351159_1280.png',
      statusMessage: '',
    },
  ];

  const RankData: RankData = {
    myRank: 7,
    currentPage: 1,
    totalPage: 1,
    rankList: RankUserData,
  };

  res.status(200).json(RankData);
}
