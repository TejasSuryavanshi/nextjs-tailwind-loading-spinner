const About = async() =>{
    await new Promise((resolve)=>setTimeout(resolve,3000))
    return (
        <div className="text-xl p-4">
            About page
        </div>
    )
}

export default About;