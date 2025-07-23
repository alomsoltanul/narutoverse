import Link from "next/link";

type NavItems = {
    label: string;
    href: string;
};

export default function NavbarMenu() {
    // const navItems: string[] = ["Home", "About", "Services", "Contact"];
    const navItems: NavItems[] = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Characters", href: "/characters" },
        { label: "Tailed Beasts", href: "/tailed-beast" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}><span className=" text-white text-lg font-bold  uppercase hover:underline">{item.label}</span></Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-lg font-bold  uppercase font-stretch-125%" >NarutoVerse</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}><span className=" text-white text-lg font-bold  uppercase hover:underline">{item.label}</span></Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <Link href={`/contact`} className=" bg-amber-700 text-white rounded-2xl px-4 py-2 text-lg font-bold  uppercase">Contact</Link>
            </div>
        </div>
    );
}