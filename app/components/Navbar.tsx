import Link from "next/link"

const Navbar = () => {
  return (
    <>
        <div className="flex justify-between px-10 py-5 bg-blue-300 font-bold text-2xl">
            <div className="flex gap-10">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="flex gap-10">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
            </div>
        </div>
    </>
  )
}
export default Navbar