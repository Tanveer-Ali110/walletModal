import Modal from '../Modal'
import { useConnectModalStyle } from './styles';
import CloseIcon from '@material-ui/icons/Close';

import { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { walletConfig } from './config';

interface props {
    isOpen?: boolean,
    onDismiss?: () => void,
    displayCount?: number
}

interface Config {
    title: string,
    icon: any
    priority: number
}

export const walletLocalStorageKey = 'wallet'

const getPreferredConfig = (walletConfig: Config[]) => {
    const preferredWalletName = localStorage.getItem(walletLocalStorageKey)
    const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority)

    if (!preferredWalletName) {
        return sortedConfig
    }

    const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName)

    if (!preferredWallet) {
        return sortedConfig
    }

    return [
        preferredWallet,
        ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
    ]
}

const WalletModel: React.FC<props> = ({ isOpen = false, onDismiss = () => null, displayCount = 3 }) => {


    const classes = useConnectModalStyle();
    const [showMore, setShowMore] = useState(false)

    const sortedConfig = getPreferredConfig(walletConfig)
    const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount)

    return (
        <Modal show={isOpen} onHide={onDismiss} >
            <div className={classes.root}>
                <div className={classes.header}>
                    <div className={classes.heading}>Connect Wallet</div>
                    <CloseIcon className={classes.pointer} onClick={onDismiss} />
                </div>
                <hr />
                <div className={classes.walletWrapper}>
                    {displayListConfig.map((wallet, index) => {
                        const Icon = wallet.icon
                        return (
                            <div className={classes.walletIcon}>
                                <Icon style={{ fontSize: 50 }} />
                                <div>{wallet.title}</div>
                            </div>
                        )
                    })}
                    {!showMore && (
                        <div className={classes.walletIcon} onClick={() => setShowMore(true)}>
                            <MoreHorizIcon style={{ fontSize: 50 }} />
                            <div>More</div>
                        </div>
                    )}
                </div>
                <hr />
            </div>
        </Modal>
    )

}
export default WalletModel;