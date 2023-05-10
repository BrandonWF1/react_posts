import React from 'react';

const ModalPopup = ({setPopupVisible}) => {
    return (
        <div className={'top-0 left-0 bg-black bg-opacity-50 fixed w-full h-full'}>
            <div
                className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-1/3 h-1/4 rounded-2xl'}>
                <button
                    className={'bg-red-50 absolute left-[90%]'}
                    onClick={() => {
                        setPopupVisible(false)
                    }}
                >CLOSE
                </button>
                <div className={'flex flex-col'}>
                    <div className={'px-10 py-10'}>

                        <input
                            type="text"
                            placeholder={'Title'}
                            className={'border-2 border-black'}
                        />

                    </div>
                    <div className={'px-10'}>
                        <input
                            type="text"
                            placeholder={'Body'}
                            className={'border-2 border-black'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPopup;