
import React from 'react';

const PopupNotification = ({ message, onClose }) => {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
            <p className="text-center text-lg">{message}</p>
            <button
                onClick={onClose}
                className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 ease-in-out"
            >
                Got It !
            </button>
        </div>
    );
};

export default PopupNotification;
