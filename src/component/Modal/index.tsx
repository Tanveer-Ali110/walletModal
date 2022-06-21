import React from 'react';
import { Modal } from 'react-bootstrap';
import './modal.css'

interface iprops {
    show: boolean,
    onHide: () => void
    children?: React.ReactNode
    className?: string
}

const appModal: React.FC<iprops> = ({ show, onHide, children, ...props }) => (
    <Modal show={show} onHide={onHide} centered  {...props}>
        {children}
    </Modal>
)

export default appModal;