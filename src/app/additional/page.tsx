import { type FC } from "react";
import HeaderContainer from "@/containers/header/Header.container";
import AdditionalContainer from "@/containers/additional/Additional.container";
import { TCategory } from "@/types";
import { notFound, redirect } from "next/navigation";

interface IAdditionalPageProps {
  searchParams?: Promise<{
    [key: string]: TCategory;
  }>;
}

const AdditionalPage: FC<IAdditionalPageProps> = async ({ searchParams }) => {
  const type = (await searchParams)?.type;

  if (!type) {
    redirect("/additional?type=movie");
  }

  if (
    type !== "movie" &&
    type !== "music" &&
    type !== "restaurant" &&
    type !== "book"
  ) {
    notFound();
  }

  return (
    <>
      <HeaderContainer />
      <AdditionalContainer type={type} />
    </>
  );
};

export default AdditionalPage;
