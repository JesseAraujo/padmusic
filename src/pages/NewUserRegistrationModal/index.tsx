import { FormEvent } from 'react'
import Modal from 'react-modal'

import styles from './styles.module.scss'

interface NewUserRegistrationProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export default function NewUserRegistration({ isOpen, onRequestClose }: NewUserRegistrationProps) {

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName={styles.reactModalOverlay}
            className={styles.reactModalContent}
        >

            <button
                type="button"
                onClick={onRequestClose}
                className={styles.reactModalClose}
            >
                <img src="/close.svg" alt="" />
            </button>

            <div className={styles.container}>

                <div className={styles.containerPhotoUser}>
                    <div className={styles.photoUser}>
                        <button type='button'>
                            <img src="/addPhoto.svg" alt="" />
                        </button>
                    </div>
                </div>

                <div className={styles.groupInput}>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="example@example.com" />
                    <input type="text" placeholder="(00) 0 0000-0000" />
                    <input type="text" placeholder="*************" />
                    <input type="text" placeholder="*************" />
                </div>

                <button type="submit" className={styles.button}> Salvar </button>
            </div>





        </Modal>
    )
}