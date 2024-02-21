import Link from "next/link";
import './discription.css';
import Image from 'next/image'
import myImage from './steven2.jpg';

function Discription () {
    return (
        <>
        <div className="header_discription">
            <div className="StevImg">

        <Image
            src={myImage}
            alt="pic"
            width={120}
            height={43}
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