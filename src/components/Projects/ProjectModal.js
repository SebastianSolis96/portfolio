import Modal from 'react-modal/lib/components/Modal';

export const ProjectModal = () => {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
        },
    };
    Modal.setAppElement('#root');

    return (
        <Modal
            isOpen={ true }
            // isOpen={ modalOpen }
            // onRequestClose={ closeModal }
            // shouldCloseOnOverlayClick={false}
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="background-modal"
        >
            <div className="close-modal">
                <div className="close-button">x</div>
            </div>
            <div className="modal-container">
                <h1>SISTEMA DE FACTURACIÓN WEB</h1>
                <div className="tags-container">
                    <div className="tag">HTML</div>
                    <div className="tag">CSS</div>
                    <div className="tag">JAVASCRIPT</div>
                    <div className="tag">REACT</div>
                </div>
                <div className="info-container">
                    <p>
                        Esta es una aplicación hecha con React y otras tecnologías como NodeJS y Express.js. Está construida con PERN Stack y .........................
                    </p>
                </div>
            </div>
        </Modal>
    )
}
