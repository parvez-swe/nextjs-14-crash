import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container flex flex-row items-center justify-between">
        <div className="logo">
          <Link href="/">Nextjs 14</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
