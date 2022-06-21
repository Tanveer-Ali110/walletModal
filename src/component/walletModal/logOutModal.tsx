import Modal from '../Modal'
import { useLogOutModal } from './styles';
import CloseIcon from '@material-ui/icons/Close';

interface props {
    isOpen?: boolean,
    onDismiss?: () => void
}

const LogOutModal: React.FC<props> = ({ isOpen = false, onDismiss = () => null }) => {
    const classes = useLogOutModal();
    return (
        <Modal className="LogOut-modal-dialog" show={isOpen} onHide={onDismiss} >
            <div className={classes.root}>
                <div className={classes.header}>
                    <div className={classes.heading}>Your Wallet</div>
                    <CloseIcon className={classes.pointer} onClick={onDismiss} />
                </div>
                <div className={classes.body}>
                    <div>0x087ce64E61Db50dAa417b769B5efD22f12511FfC</div>
                    <button type='button'>Logout</button>
                </div>
            </div>
        </Modal>
    )
}

export default LogOutModal;