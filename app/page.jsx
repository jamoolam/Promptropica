import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden' />
            <span className='orange_gradient text-center'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
            Promptropica is an open-source AI prompting tool for users across the world to discover, share, and even create all sorts of prompts and ideas in the AI sector
        </p>

        <Feed />
    </section>
  )
}

export default Home
