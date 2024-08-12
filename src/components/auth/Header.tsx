interface HeaderProps{
    lable:string
}

const Header = ({lable}:HeaderProps) => {
    return ( 
        <div className="flex justify-center items-center">
        <h1 className="font-serif text-3xl">{lable}</h1>
        </div>
     );
}
 
export default Header;