import { ProfileBasic } from 'types/userTypes';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileBasic>
) {
  const ProfileBasicData: ProfileBasic = {
    intraId: 'sangmipa1',
    userImageUri: '/image/fallBackSrc.jpeg',
    racketType: 'PENHOLDER',
    statusMessage: '1231231313',
    level: 40,
    currentExp: 123,
    maxExp: 123,
    tierImageUri: '/image/fallBackSrc.jpeg',
    tierName: '노랑 탁구채',
    expRate: 123,
    edge: 'COLOR1',
    // BASIC, BACKGROUND1~16 사이 테스트 가능
    backgroundType: 'COLOR1',
    snsNotiOpt: 'EMAIL',
  };

  res.status(200).json(ProfileBasicData);
}
