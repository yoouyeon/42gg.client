export type TableName =
  | 'notification'
  | 'userInfo'
  | 'feedback'
  | 'games'
  | 'announcement'
  | 'season'
  | 'penalty'
  | 'receiptList'
  | 'megaphoneList'
  | 'profileList'
  | 'itemList'
  | 'itemHistory'
  | 'coinPolicyHistory';

export type EtcType = 'button' | 'toggle';

export type TableFormat = {
  [key in TableName]: {
    name: string;
    columns: string[];
    etc?: {
      type: EtcType;
      value: string[];
    };
  };
};
