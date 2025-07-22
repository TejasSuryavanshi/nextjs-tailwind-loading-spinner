export const dynamic = "force-dynamic";
// When I deployed the project to vercel, the loading.tsx spinner didn't show up.
// This happens beacuse Next.js automatically optimized the about page as static no SSR , so the loading.tsx file wasn't triggered.
// I added the line below to force Next.js to render the page dynamically on every request. 


const About = async() =>{
    await new Promise((resolve)=>setTimeout(resolve,3000))
    return (
        <div className="text-xl p-4">
            About page
        </div>
    )
}

export default About;