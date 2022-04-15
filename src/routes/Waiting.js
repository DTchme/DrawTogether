import { useState } from "react";
import styles from "../css/Waiting.module.css";
import Modal from "../component/Modal";

function Waiting() {
  const enterCode = window.location.pathname.slice(-6);
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <button className={styles.settingBtn} onClick={openModal}>
            설정
          </button>
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>같이 그릴까?</h1>
          <h4 className={styles.code}>입장 코드 : {enterCode}</h4>
        </div>
        <div className={styles.playerContainer}>
          <div className={styles.player}>
            <div className={styles.startBtn}>시작하기</div>
            <div className={styles.readyBtn}>준비하기</div>
          </div>
          <div className={styles.player}>1</div>
          <div className={styles.player}>2</div>
          <div className={styles.player}>3</div>
          <div className={styles.player}>4</div>
          <div className={styles.player}>5</div>
        </div>
        <Modal
          open={modalOpen}
          close={closeModal}
          header="입장 코드를 입력해주세요"
        ></Modal>
      </div>
    </>
  );
}

export default Waiting;
