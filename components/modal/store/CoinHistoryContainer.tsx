import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { ICoinHistoryTable } from 'types/userTypes';
// import { instance } from 'utils/axios';
import { mockInstance } from 'utils/mockAxios';
import { errorState } from 'utils/recoil/error';
import CoinHistoryDetails from 'components/modal/store/CoinHistoryDetails';
import PageNation from 'components/Pagination';
import styles from 'styles/modal/store/CoinHistoryContainer.module.scss';

export default function CoinHistoryContainer() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [coinHistoryList, setCoinHistoryList] = useState<ICoinHistoryTable>({
    useCoinList: [],
    totalPage: 0,
    currentPage: 0,
  });
  const setError = useSetRecoilState(errorState);

  useEffect(() => {
    getCoinHistoryList();
  }, [currentPage]);

  const getCoinHistoryList = async () => {
    try {
      const res = await mockInstance.get(
        `/users/coin/?page=${currentPage}&size=5`
      );
      setCoinHistoryList({
        useCoinList: res.data.useCoinList,
        totalPage: res.data.totalPage,
        currentPage: currentPage,
      });
    } catch (e) {
      setError('HB03');
    }
  };

  // const getCoinHistoryList = async () => {
  //   try {
  //     const res = await instance.get(
  //       `pingpong/users/coins/?page=${currentPage}&size=5`
  //     );
  //     setCoinHistoryList({
  //       useCoinList: res.data.useCoinList,
  //       totalPage: res.data.totalPage,
  //       currentPage: currentPage,
  //     });
  //   } catch (error) {
  //     setError('HB03');
  //   }
  // };

  return (
    <div className={styles.container}>
      {coinHistoryList.useCoinList.length === 0 ? (
        <div className={styles.empty}>GG코인 내역이 존재하지 않습니다.</div>
      ) : (
        coinHistoryList.useCoinList.map((coinHistory) => (
          <CoinHistoryDetails
            key={coinHistory.createdAt.toString()}
            details={coinHistory}
          />
        ))
      )}
      <div>
        <PageNation
          curPage={currentPage}
          totalPages={coinHistoryList.totalPage}
          pageChangeHandler={(pageNumber: number) => {
            setCurrentPage(pageNumber);
          }}
        />
      </div>
    </div>
  );
}
