import React, { useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Button from '@material-ui/core/Button';

import CopyIcon from "../Svg/Copy"

interface Props {
    toCopy: string
    children: React.ReactNode
}

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
    const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false)

    return (
        <OverlayTrigger placement="top" show={isTooltipDisplayed} overlay={<Tooltip>Copied</Tooltip>}>
            <Button
                color="primary"
                onClick={() => {
                    if (navigator.clipboard) {
                        navigator.clipboard.writeText(toCopy)
                        setIsTooltipDisplayed(true)
                        setTimeout(() => {
                            setIsTooltipDisplayed(false)
                        }, 1000)
                    }
                }}
                {...props}
            >
                {children}
                <CopyIcon style={{ fontSize: "20px", color: "#f3841d", marginLeft: '5px' }} />
            </Button>
        </OverlayTrigger>
    )
}

export default CopyToClipboard
