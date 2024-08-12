import Header from "./header";
import { scroll } from "./App";
import { useContext } from "react";

function Home() {
    const {scrl1, scrl2, scrl3} = useContext(scroll);

    return (
        <section className="relative w-[100%] border border-red-800">
            <section style={{background: `url(${process.env.PUBLIC_URL}/demo.png)`, backgroundSize: 'cover', backgroundPositionY: 'bottom', backgroundRepeat: 'no-repeat'}} className="flex flex-col absolute z-[2] w-[100%] h-[110vh]">
                <Header/>
            </section>
            <section style={{background: `url(${process.env.PUBLIC_URL}/down.png)`, backgroundSize: 'cover', backgroundPositionY: 'top', backgroundRepeat: 'no-repeat'}} className={`${scrl2} absolute top-[55vh] z-[4] w-[100%] h-[50vh]`}>

            </section>
            <div className={`${scrl1} bg-[#2c2c2c] absolute z-[10] w-[100%] h-[100vh] top-[105vh]`}>

            </div>
        </section>
    );
}

export default Home;