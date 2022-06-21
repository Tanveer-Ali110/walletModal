import { useCallback, useContext } from "react";
import { modalContext } from "contexts/modalContext";

type Handler = () => void;

export const useModal = (modal?: React.ReactNode): [Handler, Handler] => {
  const { onPresent, onDismiss } = useContext(modalContext);
  const onPresentCallback = useCallback(() => {
    onPresent(modal);
  }, [modal, onPresent]);

  return [onPresentCallback, onDismiss];
};
