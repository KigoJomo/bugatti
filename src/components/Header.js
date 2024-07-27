import logo from "../assets/chiron_logo.png";

const HeaderLink = ({to}) => {
    return <a href={`# ${to}`} className="capitalize">{to}</a>;
}

const Sections = ["heritage", "experience", "models"];

const Header = () => {
    return (
        <header className="w-[90%] absolute top-8 z-10 px-6 py-4 rounded-3xl border border-gray-500 flex items-center justify-between">
            <img src={logo} alt="bugatti chiron" className="h-8" />

            <nav className="flex items-center gap-8">
                {Sections.map((section) => (
                    <HeaderLink
                        key={section}
                        to={section}
                    />
                ))}
            </nav>
        </header>
    )
}

export default Header;