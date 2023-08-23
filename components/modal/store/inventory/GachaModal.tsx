import { useResetRecoilState, useRecoilValue } from 'recoil';
import { userState } from 'utils/recoil/layout';
import { modalState } from 'utils/recoil/modal';
import {
  ModalButtonContainer,
  ModalButton,
} from 'components/modal/ModalButton';
import PlayerImage from 'components/PlayerImage';
import styles from 'styles/modal/store/GachaModal.module.scss';
import styles_ball from 'styles/modal/store/GotchaAnimation.module.scss';
import Celebration from '../../statChange/Celebration';

export default function GachaModal() {
  // 미리보기에 사용할 예정
  const user = useRecoilValue(userState);
  const resetModal = useResetRecoilState(modalState);
  return (
    <div>
      {/* TODO: 뽑기 당첨 애니메이션 적용 */}
      <div className={styles.randomBox}>
        {/* <div className={styles.capsule}></div> */}
        <div
          className={`${styles_ball.pkmn} ${styles_ball.exit} ${styles_ball.right}`}
        >
          <div className={`${styles_ball.poke} ${styles_ball.ball}`}>
            <span className={styles_ball.x}>
              <span className={styles_ball.y}>
                <span className={styles_ball.sprite}></span>
              </span>
            </span>
          </div>
          <div className={styles_ball.mon}>
            <div className={styles_ball.player}>
              <PlayerImage
                src={user.userImageUri}
                styleName={`ranktropybig ${'edge1'}`}
                size={50}
              />
            </div>
          </div>
          <div className={styles_ball.explode}></div>
        </div>
      </div>
      {/* TODO: 애니메이션이 끝나면 미리보기 결과와 확인 버튼 보이도록 하기 */}
      <ModalButtonContainer>
        <ModalButton
          style='positive'
          value='확인'
          onClick={() => resetModal()}
        />
      </ModalButtonContainer>
      {/* <Celebration /> */}
    </div>
  );
}
