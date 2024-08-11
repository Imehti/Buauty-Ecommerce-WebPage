interface HeaderProps{
    lable:string
}

const Header = ({lable}:HeaderProps) => {
    return ( 
        <>
        <h1>{lable}</h1>
        </>
     );
}
 
export default Header;