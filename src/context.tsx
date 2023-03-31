import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

import { useLocation } from "react-router-dom";

export type TlikesModalContext = {
  showModal: () => void;
  hideModal: () => void;
  toShowModal: boolean;
};
interface IProps {
  children: ReactNode;
}
export const likesModalContext = createContext<TlikesModalContext | null>(null);
export const LikesModalContextProvider = ({ children }: IProps) => {
  const [toShowModal, setToShowModal] = useState<boolean>(false);
  const showModal = () => {
    setToShowModal(true);
  };
  const hideModal = () => {
    setToShowModal(false);
  };
  const contextValues = useMemo(
    () => ({ toShowModal, showModal, hideModal }),
    [toShowModal]
  );
  // hide modal on location change
  const location = useLocation();
  useEffect(() => {
    setToShowModal(false);
  }, [location]);
  return (
    <likesModalContext.Provider value={contextValues}>
      {children}
    </likesModalContext.Provider>
  );
};