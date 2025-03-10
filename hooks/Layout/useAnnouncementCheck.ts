import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { User } from 'types/mainType';
import { Modal } from 'types/modalTypes';
import { modalState } from 'utils/recoil/modal';
import useAxiosGet from 'hooks/useAxiosGet';

const useAnnouncementCheck = (presentPath: string, user: User) => {
  const setModal = useSetRecoilState<Modal>(modalState);
  const announcementTime: string | null =
    localStorage.getItem('announcementTime');

  const getAnnouncementHandler = useAxiosGet<any>({
    url: '/pingpong/announcement',
    setState: (data) => {
      data.content !== '' &&
        setModal({
          modalName: 'EVENT-ANNOUNCEMENT',
          announcement: data,
          isAttended: user.isAttended,
        });
    },
    err: 'RJ01',
    type: 'setError',
  });

  const announcementHandler = () => {
    if (presentPath === '/') {
      if (
        !announcementTime ||
        Date.parse(announcementTime) < Date.parse(new Date().toString())
      ) {
        getAnnouncementHandler();
      }
    } else {
      setModal({ modalName: null });
    }
  };

  const attendedHandler = () => {
    if (!user.isAttended && presentPath === '/') {
      setModal({ modalName: 'EVENT-WELCOME' });
    }
  };

  useEffect(() => {
    announcementHandler();
    attendedHandler();
  }, [user.isAttended, presentPath]);
};

export default useAnnouncementCheck;
