import Navbar from './Navbar'
import Hero from './Hero'
import Movierow from './Movierow'
import Questions from './Questions'
import Footer from './Footer'
function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Movierow title="Trending Movies" fetchURL="/trending/movie/week" />
            <Movierow title="Playing Now" fetchURL="/movie/now_playing" />
            <Questions />
            <Footer />
        </>
    )

}
export default HomePage