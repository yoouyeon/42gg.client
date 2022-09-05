import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { modalState } from 'utils/recoil/modal';
import { errorState } from 'utils/recoil/error';
import instance from 'utils/axios';
import Celebration from './Celebration';
import ExpGameData from './ExpGameData';
import styles from 'styles/modal/ExpGameModal.module.scss';

export default function ExpGameModal() {
  const [modalInfo, setModalInfo] = useRecoilState(modalState);
  const [user, setUser] = useState();
  const setErrorMessage = useSetRecoilState(errorState);

  useEffect(() => {
    getExpInfoHandler();
  }, []);

  const getExpInfoHandler = async () => {
    try {
      const res = await instance.get(
        `/pingpong/games/${modalInfo.gameId}/result`
      );
      setUser(res?.data);
    } catch (e) {
      setErrorMessage('KP03');
    }
  };

  if (!user) return null;

  const {
    afterMaxExp,
    beforeExp,
    beforeLevel,
    beforeMaxExp,
    increasedExp,
    increasedLevel,
  } = user;

  return (
    <div>
      {user && (
        <div>
          <div
            className={styles.celebratContainer}
            onClick={() => {
              setModalInfo({ modalName: null });
            }}
          >
            <Celebration />
          </div>
          <ExpGameData
            maxExp={beforeMaxExp}
            exp={beforeExp}
            level={beforeLevel}
            increasedExp={increasedExp}
            afterMaxExp={afterMaxExp}
            increasedLevel={increasedLevel}
          />
        </div>
      )}
    </div>
  );
}
