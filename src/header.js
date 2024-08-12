import { Link } from "react-router-dom";

function Header(){

    const navigation = [
        {page: 'Nature', goto: '/'},
        {page: 'Forest', goto: '/'},
        {page: 'Mountain', goto: '/'},
    ];

    return (
        <div className="max-[800px]:absolute max-[800px]:z-30 max-[800px]:top-[0%] flex flex-row items-center justify-between h-[10vh] w-full pl-[8vh] pr-[8vh] max-[800px]:justify-between max-[800px]:pr-[0vh] max-[800px]:pl-[0vh]">
            <a href="/"><img className="w-[30px] h-[30px] max-[800px]:ml-[4vh]" src="logo.png" alt=""/></a>
            <nav className="w-[45%] flex flex-row justify-between items-center max-[1024px]:w-[38%] max-[1024px]:ml-[5%] max-[800px]:hidden">
                {navigation.map((nav)=>(
                    <Link className="text-[#007BFF] font-bold text-[1.05vw] max-[1024px]:text-[1.3vw]" to={nav.goto}>{nav.page}</Link>
                ))}
                <div className="max-[1024px]:hidden flex justify-center text-[1vw] items-center w-[90px] h-[28px] text-white font-semibold bg-[#007BFF] rounded-[20px] text-center">Contact</div>
            </nav>
        </div>
    );
}

export default Header;