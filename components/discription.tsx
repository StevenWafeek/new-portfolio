import Link from "next/link";
import './discription.css';
import Image from 'next/image'
import myImage from './s.png';

function Discription () {
    return (
        <>
        <div className="header_discription">
            <div className="StevImg">

        <Image
            src={myImage}
            alt="pic"
            width={39}
            height={33}
            />
            </div>
        <Link href="/">home</Link>
        <Link href="/about">Projects</Link>
        <Link href="/contact">Contact</Link>
        </div>
        </>
    );

}
export default Discription;