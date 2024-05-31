import React, { FC } from "react";

type TextProps = {
  children: React.ReactNode;
};

const Text: FC<TextProps> = ({ children }) => {
  return <span>{children}</span>;
};

export default Text;
