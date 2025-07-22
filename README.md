Title: How to handle loading Screens with Tailwind Spinner in Nextjs (App Router)

Step 1: How Loading Works in App Router?

First, I have created a Spinner component. I placed in app/components/Spinner.tsx.

Code: 
const Spinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full border-4 border-orange-500 border-t-transparent w-12 h-12"></div>
    </div>
  );
};

export default Spinner;


Step 2: Then, Making a page that loads slowly 
For Delay i have created  setTimeOut function.

Code:
const About = async() =>{
    await new Promise((resolve)=>setTimeout(resolve,3000))
    return (
        <div className="text-xl p-4">
            About page
        </div>
    )
}

export default About;


Step 3: Next, I have created a loading.tsx file in the same /about folder 

Code:
import Spinner from "../components/Spinner"

const loading = () => {
  return (
    <div>
        <Spinner/>
    </div>
  )
}

export default loading;

Step 4: Finally, in the homepage (app/page.tsx), I have added a link to the About page so I could test it..

Code:
const Home = () =>{
    return (
        <div className="p-6">
            <h1 className="text-4xl p-4">Home page</h1>
            <p>
                <a href="/about" className="p-4 text-blue-600 underline">Go to about page</a>
            </p>
        </div>
    )
}

export default Home;

Step 5: Run this command (npm run dev) in terminal, And that's it, Now whenever we click the link to /about, you’ll see a nice loading spinner for 3 seconds. 
