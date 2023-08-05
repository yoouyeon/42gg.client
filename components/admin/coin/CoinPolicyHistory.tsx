import { useEffect, useState } from 'react';
import PageNation from 'components/Pagination';
import { useMockAxiosGet } from 'hooks/useAxiosGet';
import { getFormattedDateToString } from 'utils/handleTime';
import { tableFormat } from 'constants/admin/table';
import {
  IcoinPolicyHistory,
  IcoinPolicyHistoryTable,
} from 'types/admin/adminCoinTypes';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

const coinPolicyHistoryTableTitle: { [key: string]: string } = {
  coinPolicyId: 'ID',
  created_at: '등록 날짜',
  createUser: '등록 유저',
  attendance: '출석 획득',
  nomal: '일반게임 획득',
  rank_win: '랭크게임 승리 획득',
  rank_lose: '랭크게임 패배 획득',
};

const tableColumnName = [
  'coinPolicyId',
  'created_at',
  'createUser',
  'attendance',
  'normal',
  'rank_win',
  'rank_lose',
];

function CoinPolicyHistory() {
  const [coinPolicyHistoryData, setCoinPolicyHistoryData] =
    useState<IcoinPolicyHistoryTable>({
      coinPolicyList: [],
      totalPage: 0,
      currentPage: 0,
    });
  const [currentPage, setCurrentPage] = useState<number>(1);

  // api 연결 시 useCallback, instanceInManage, try catch로 변경
  const getCoinPolicyHistoryHandler = useMockAxiosGet<any>({
    url: `/admin/coinpolicy?page=${currentPage}&size=5`,
    setState: (data) => {
      setCoinPolicyHistoryData({
        coinPolicyList: data.coinPolicyList.map(
          (coinPolicyHistory: IcoinPolicyHistory) => {
            const { year, month, date, hour, min } = getFormattedDateToString(
              new Date(coinPolicyHistory.created_at)
            );
            return {
              ...coinPolicyHistory,
              created_at: `${year}-${month}-${date} ${hour}:${min}`,
            };
          }
        ),
        totalPage: data.totalPage,
        currentPage: currentPage,
      });
    },
    err: 'HJ08',
    type: 'setError',
  });

  useEffect(() => {
    getCoinPolicyHistoryHandler();
    console.log(coinPolicyHistoryData);
  }, [currentPage]);

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label='customized table'>
          <TableHead>
            <TableRow>
              {tableColumnName.map((column, idx) => (
                <TableCell key={idx}>
                  {coinPolicyHistoryTableTitle[column]}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {coinPolicyHistoryData.coinPolicyList.length > 0 ? (
              coinPolicyHistoryData.coinPolicyList.map(
                (coinPolicyHistory: IcoinPolicyHistory) => (
                  <TableRow key={coinPolicyHistory.coinPolicyId}>
                    {tableFormat['coinPolicyHistory'].columns.map(
                      (columnName: string, index: number) => {
                        return (
                          <TableCell key={index}>
                            {coinPolicyHistory[
                              columnName as keyof IcoinPolicyHistory
                            ].toString()}
                          </TableCell>
                        );
                      }
                    )}
                  </TableRow>
                )
              )
            ) : (
              <TableRow>
                <TableCell>비어있습니다</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <PageNation
          curPage={coinPolicyHistoryData.currentPage}
          totalPages={coinPolicyHistoryData.totalPage}
          pageChangeHandler={(pageNumber: number) => {
            setCurrentPage(pageNumber);
          }}
        />
      </div>
    </>
  );
}

export default CoinPolicyHistory;
