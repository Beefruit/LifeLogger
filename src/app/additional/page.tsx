import { type FC } from "react";
import HeaderContainer from "@/containers/header/Header.container";
import AdditionalContainer from "@/containers/additional/Additional.container";

const AdditionalPage: FC = () => {
  return (
    <>
      <HeaderContainer />
      <AdditionalContainer />
    </>
  );
};

export default AdditionalPage;
