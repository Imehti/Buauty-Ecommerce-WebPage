import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./Header";
import BackButton from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLable: string;
  backButtonHref: string;
  backButtonLable: string;
  showSocial?: boolean;
}

const CardWrapper = ({
  children,
  headerLable,
  backButtonHref,
  backButtonLable,
}: CardWrapperProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <Header lable={headerLable} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        <CardFooter>
        <BackButton lable={backButtonLable} href={backButtonHref} />
        </CardFooter>
      </Card>
    </>
  );
};

export default CardWrapper;
