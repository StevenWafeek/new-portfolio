import Link from "next/link";
import './discription.css';

function Discription () {
    return (
        <>
        <div className="header_discription">
        <Link href="/">home</Link>
        <Link href="/about">Projects</Link>
        <Link href="/contact">Contact</Link>
        </div>
        </>
    );

}
export default Discription;