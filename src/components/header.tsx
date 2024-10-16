import Link from "next/link"
export default function Header(){
    return(
            <div className="header">
             <ul className="headerbuttons">
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/about"}><li>About</li></Link>
                <Link href={"/contact-us"}>Contact us</Link>
            </ul>
            <span className="blogs">Trending Blogs</span>
            </div>

    )
}