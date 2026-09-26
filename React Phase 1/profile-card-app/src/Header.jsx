
function Header() {
    return (
        <header className="flex justify-center items-center px-4 pt-8 sm:pt-12 pb-2">
            <div className="flex flex-col items-center text-center max-w-xl mx-auto" >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">Our Team</h1>
                <h2 className="text-base sm:text-lg text-gray-600 mt-2 font-normal">Meet the amazing people behind our success</h2>
                <span className="mt-4 w-16 h-1 rounded-full bg-violet-600"></span>
            </div>
        </header>
    )
}

export default Header;