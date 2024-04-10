import React from 'react';
import PropsModal from '../../types/propsModal';

import './modal.css';

function ModalMessage({ className, winnerStatus }: PropsModal) {
    const animationEnd = () => winnerStatus.setWinner(null);

    return (
        <div className={`modal-wrapper ${className}`} onAnimationEnd={animationEnd}>
            <div className="modal-body">
                <p className="text-winner">{winnerStatus.winner?.name} went first!</p>
                <p>Time: {winnerStatus.winner?.time} sec</p>
                <p>Congratulations!</p>
            </div>
        </div>
    );
}

export default ModalMessage;
