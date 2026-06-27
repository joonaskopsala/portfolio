import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
};

export default Container;
