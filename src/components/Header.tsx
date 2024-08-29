import { useState } from 'react'

const Header = () => {

    const [state, setState] = useState(false)
    const navigation = [
        {
            title: "Home",
            path: "/",
          },
          {
            title: "Breed",
            path: "/",
          },
          {
            title: "Health",
            path: "/",
          },
          {
            title: "Grooming",
            path: "/",
          },
          {
            title: "Store",
            path: "/",
          },
    ]

    return (
        <nav className={`border-b w-full md:static md:text-sm md:border-none bg-[#1e72bd]`}>
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <h1 className="text-center">
                        <a href="/" className= {`text-[2.3rem] font-[600] text-[white]`}>
                        mainecoon<span>cats</span>
                        </a>
                    </h1>
                    <div className="md:hidden">
                        <button className="text-white hover:text-[#ffffffd5]"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[2.5rem] w-[2.5rem]" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[2.5rem] w-[2.5rem]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center gap-3 space-y-6 md:flex md:space-x-6 md:space-y-0">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-gray-700 ">
                                        <a href={item.path} className= {` text-[19px] block text-white hover:text-[#ffffffd5]`}>
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header