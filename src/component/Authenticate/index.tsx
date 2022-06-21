// import { useState } from 'react';
import { Button } from 'react-bootstrap';
import WalletModel from '../walletModal/connectModel';
import LogOutModal from '../walletModal/logOutModal';
import { useModal } from 'hooks/useModal';

const Authenticate: React.FC = () => {

    const [onPresentCallback] = useModal(<LogOutModal />)
    const [onConnectCallback] = useModal(<WalletModel />)

    const onClick = (e: any) => {
        e.preventDefault()
        onConnectCallback()
    }
    const onLogOut = (e: any) => {
        e.preventDefault()
        onPresentCallback()
    }

    return (
        <div className="App">
            <Button variant="primary" onClick={onClick}>
                Connect Wallet
            </Button>
            <Button variant="primary" onClick={onLogOut}>
                LogOut
            </Button>
        </div>
    )

}
export default Authenticate;