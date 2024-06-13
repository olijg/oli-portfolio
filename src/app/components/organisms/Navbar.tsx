interface NavItemProps {
    label: string;
    link: string;
}

function NavItem({ label, link }: NavItemProps) {
    return (
        <a href={link}>
            <li className='mx-2'>
                <div className="navItem"><p>{label}</p></div>
            </li>
        </a>
    )
}

export default function Navbar() {

    return (
        <div className="sticky top-0 m-5">
            <nav id="navbar">
                <ul className='flex flex-row justify-evenly mx-16 pt-4'>
                    <NavItem label="Home" link="/" />
                    <NavItem label="About" link="/about" />
                    <NavItem label="Projects" link="/projects" />
                </ul>
            </nav>
        </div>
    );
}
