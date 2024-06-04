import { FC, ReactNode } from "react";

type TextProps = {
  children: ReactNode;
};

const Text: FC<TextProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default Text;
