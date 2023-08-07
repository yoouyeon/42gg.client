import { MatchMode } from './mainType';
import { ISeason } from './seasonTypes';
import { Value } from 'react-quill';
import { IFeedback } from 'components/admin/feedback/FeedbackTable';
import { ModifyScoreType } from 'types/admin/gameLogTypes';
import { CoinResult } from 'types/coinTypes';

type EventModal = 'WELCOME' | 'ANNOUNCEMENT';

type MenuModal = 'REPORT' | 'LOGOUT';

type MatchModal = 'ENROLL' | 'REJECT' | 'CANCEL' | 'MANUAL';

type UserModal = 'PROFILE_EDIT' | 'KAKAO_EDIT';

type FixedModal = 'AFTER_GAME' | 'STAT';

type PurchaseModal = 'BUY' | 'GIFT';

type AdminModal =
  | 'PROFILE'
  | 'PENALTY'
  | 'PENALTY_DELETE'
  | 'NOTI_USER'
  | 'CHECK_FEEDBACK'
  | 'DETAIL_CONTENT'
  | 'SEASON_EDIT'
  | 'MODIFY_SCORE';

type ModalName =
  | null
  | `EVENT-${EventModal}`
  | `MENU-${MenuModal}`
  | `MATCH-${MatchModal}`
  | `USER-${UserModal}`
  | `FIXED-${FixedModal}`
  | `ADMIN-${AdminModal}`
  | `COIN-ANIMATION`;
  | `PURCHASE-${PurchaseModal}`;
export interface Cancel {
  startTime: string;
}

export interface Enroll {
  startTime: string;
  endTime: string;
  mode?: MatchMode;
}

export interface Announcement {
  content: Value;
}

export interface Exp {
  gameId?: number;
  mode?: MatchMode | null;
}
export interface Coin {
  //gameId?: number;
  mode?: MatchMode | null;
}

export interface Manual {
  radioMode: MatchMode;
}

export interface manual {
  radioMode: MatchMode;
}

export interface Modal {
  modalName: ModalName;
  manual?: manual;
  cancel?: Cancel;
  enroll?: Enroll;
  announcement?: Announcement;
  exp?: Exp;
  gameId?: number;
  intraId?: string;
  detailContent?: string;
  feedback?: IFeedback;
  penaltyId?: number;
  ISeason?: ISeason;
  ModifyScore?: ModifyScoreType;
  CoinResult?: CoinResult;
}
