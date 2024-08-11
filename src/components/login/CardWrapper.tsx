import React from "react"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface CardWrapperProps {
    children:React.ReactNode
    headerLable:string,
    backButtonHref:string,
    backButtonLable:string,
    showSocial?:boolean
}

const CardWrapper = () => {
    return ( 
        <>
        <Card>
            <CardHeader></CardHeader>
            <CardContent></CardContent>
            <CardFooter></CardFooter>
        </Card>
        </>
     );
}
 
export default CardWrapper;