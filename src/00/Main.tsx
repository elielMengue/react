import logo from '../assets/images/logo.png';

export default function Main(){

    return (
      
        <div className="bg-black h-screen w-screen flex flex-col">
            <nav className="p-4 flex justify-between items-center" >
            <div className="text-amber-50 text-lg font-bold">
                    <img src={logo} alt="logo" className='h-30 w-30'/>
                  </div>
                <ul className="flex space-x-4 text-amber-50 align-baseline">
                    <li className="hover:text-amber-200">About</li>
                    <li className="hover:text-amber-200">Expert</li>
                    <li className="hover:text-amber-200">FAQ</li>
                    <li className="hover:text-amber-200">Contact</li>
                    <li className="hover:text-amber-200 ">
                        <button className="border-t-gray-800 cursor-pointer bg-cyan-950 p-5 rounded-2xl">Get started</button>
                    </li>
                </ul>
            </nav>
            <main>
                <div>
                    Partie haute
                </div>
                <div>
                    Partie basse
                </div>
            </main>
        </div>
    )
}