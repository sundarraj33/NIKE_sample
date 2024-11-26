import Navbar2 from "./Navbar2";

const Navbar1 = ()=>{
    return(
        <>
        
            <div className="Navbar1 bg-gray-100">
            <div className="container m-auto">
                <div className="h-8 flex justify-between self-center">                    
                    <ul >
                        <li>
                             <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/375px-Jumpman_logo.svg.png?20090410062117" className="h-6"></img>
                        </li>
                    </ul >
                    <ul className="flex justify-around w-80 self-center text-xs">                                              
                        <li className="hover:text-gray-600"> <a href="">Find a Store </a></li>
                        <li>|</li>
                        <li className="hover:text-gray-600"><a href="">Help </a></li>
                        <li>|</li>
                        <li className="hover:text-gray-600"><a href=""> Join US </a></li>
                        <li>|</li>
                        <li className="hover:text-gray-600"><a href=""> Sign In </a></li>
                    </ul>
                </div>
            </div>
            </div>
            {/* <Navbar2 /> */}

        </>
    )
}

export default Navbar1;