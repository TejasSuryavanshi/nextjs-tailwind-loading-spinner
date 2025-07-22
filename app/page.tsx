import Link from "next/link";

const Home = () =>{
    return (
        <div className="p-6">
            <h1 className="text-4xl p-4">Home page</h1>
            <p>
                <Link href="/about" className="p-4 text-blue-600 underline">Go to about page</Link>
            </p>
        </div>
    )
}

export default Home;