import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: '-110vh',
    opacity: 0,
  },
  visible: {
    y: '200px',
    opacity: 1,
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className='backdrop'
          variants={backdrop}
          animate='visible'
          initial='hidden'
          exit='hiden'
        >
          <motion.div className='modal' variants={modal}>
            <p>Want to make another pizza</p>
            <Link to='/'>
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
