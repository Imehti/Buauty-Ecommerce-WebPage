import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface BackButtonProps {
  lable: string;
  href: string;
}

const BackButton = ({ lable, href }: BackButtonProps) => {
  return (
    <>
      <Button variant={"link"} className="w-full" size={"lg"} asChild>
        <Link to={href}>{lable} </Link>
      </Button>
    </>
  );
};

export default BackButton;
