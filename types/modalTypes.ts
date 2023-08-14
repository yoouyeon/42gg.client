import { MatchMode } from './mainType';
import { ISeason } from './seasonTypes';
import { Value } from 'react-quill';
import { IFeedback } from 'components/admin/feedback/FeedbackTable';
import { ModifyScoreType } from 'types/admin/gameLogTypes';
import { CoinResult } from 'types/coinTypes';
import { Imegaphone, Iprofile } from './admin/adminReceiptType';
import { IcoinPolicy } from './admin/adminCoinTypes';
import { UseItemRequest } from './inventoryTypes';
import { StoreManualMode } from './storeTypes';
import { Item } from './itemTypes';

type EventModal = 'WELCOME' | 'ANNOUNCEMENT';

type MenuModal = 'REPORT' | 'LOGOUT';

type MatchModal = 'ENROLL' | 'REJECT' | 'CANCEL' | 'MANUAL';

type UserModal = 'PROFILE_EDIT' | 'KAKAO_EDIT';

type FixedModal = 'AFTER_GAME' | 'STAT';

type PurchaseModal = 'BUY' | 'GIFT' | 'NO_COIN';

type UseItemModal = 'MEGAPHONE';

type EditItemModal = 'MEGAPHONE';
type StoreModal = 'MANUAL' | 'COIN_HISTORY';

type AdminModal =
  | 'PROFILE'
  | 'PENALTY'
  | 'PENALTY_DELETE'
  | 'NOTI_USER'
  | 'CHECK_FEEDBACK'
  | 'DETAIL_CONTENT'
  | 'SEASON_EDIT'
  | 'MODIFY_SCORE'
  | 'MEGAPHONE_DELETE'
  | 'PROFILE_DELETE'
  | 'ITEM_EDIT'
  | 'ITEM_DELETE'
  | 'COINPOLICY_EDIT'
  | 'CHECK_SEND_NOTI';

type ModalName =
  | null
  | `EVENT-${EventModal}`
  | `MENU-${MenuModal}`
  | `MATCH-${MatchModal}`
  | `USER-${UserModal}`
  | `FIXED-${FixedModal}`
  | `ADMIN-${AdminModal}`
  | `COIN-ANIMATION`
  | `PURCHASE-${PurchaseModal}`
  | `USE-ITEM-${UseItemModal}`
  | `EDIT-ITEM-${EditItemModal}`
  | `STORE-${StoreModal}`
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

export interface PriceTag {
  itemId: number;
  product: string;
  price: number;
}

export interface StoreManual {
  radioMode: StoreManualMode;
}

export interface Modal {
  modalName: ModalName;
  manual?: Manual;
  cancel?: Cancel;
  enroll?: Enroll;
  announcement?: Announcement;
  exp?: Exp;
  gameId?: number;
  intraId?: string;
  detailTitle?: string;
  detailContent?: string;
  feedback?: IFeedback;
  penaltyId?: number;
  ISeason?: ISeason;
  ModifyScore?: ModifyScoreType;
  CoinResult?: CoinResult;
  priceTag?: PriceTag;
  megaphone?: Imegaphone;
  profile?: Iprofile;
  item?: Item;
  coinPolicy?: IcoinPolicy;
  useItemInfo?: UseItemRequest;
  storeManual?: StoreManual;
  isAttended?: boolean;
}
