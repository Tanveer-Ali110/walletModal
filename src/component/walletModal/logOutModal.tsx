import Modal from '../Modal'
import { Button, useLogOutModal } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CopyToClipboard from 'component/copytoClipboard';

// import Button from '@material-ui/core/Button';

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
                    <Typography variant="h6">
                        Your Wallet
                    </Typography>
                    <CloseIcon className={classes.pointer} onClick={onDismiss} />
                </div>
                <div className={classes.body}>
                    <CopyToClipboard toCopy="0x087ce64E61Db50dAa417b769B5efD22f12511FfC">
                        0x087ce64E61Db50dAa417b769B5efD22f12511FfC
                    </CopyToClipboard>
                    <Button onClick={() => onDismiss()}>Logout</Button>
                </div>
            </div>
        </Modal>
    )
}

export default LogOutModal;