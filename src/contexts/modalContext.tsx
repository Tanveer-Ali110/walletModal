import React, { createContext, useMemo, useState } from 'react'

interface ModalsContext {
    onPresent: (node: React.ReactNode, key?: string) => void
    onDismiss: () => void
}

export const modalContext = createContext<ModalsContext>({
    onPresent: () => null,
    onDismiss: () => null,
})

interface ModalProviderIprops {
    children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderIprops> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalNode, setModalNode] = useState<React.ReactNode>()

    const handlePresent = (node: React.ReactNode) => {
        setModalNode(node)
        setIsOpen(true)
    }

    const handleDismiss = () => {
        setModalNode(undefined)
        setIsOpen(false)
    }

    const providerProps = useMemo(
        (): ModalsContext => ({
            onPresent: handlePresent,
            onDismiss: handleDismiss,
        }),
        [],
    )

    return (
        <modalContext.Provider value={providerProps}>
            {React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    isOpen,
                    onDismiss: handleDismiss,
                })}
            {children}
        </modalContext.Provider >
    )



}