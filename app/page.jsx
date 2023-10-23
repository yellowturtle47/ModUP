import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center"> Universal Profile Mods</span>
        </h1>
        <p className="desc text-center">
            ModUP is an open source Universal Profile modification tool for 
            the creator economy to discover, create, and share Universal 
            Profile modifications
        </p>

        <Feed/>

    </section>
  )
}

export default Home