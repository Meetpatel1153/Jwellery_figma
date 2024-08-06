import "./App.css"
import Main from "./component/Main"
import CollectionPage from "./component/NewCollection"
import AboutPage from "./component/About"
import SellerPage from "./component/BestSeller"
import SignaturePage from "./component/SignaturePage"
import TrendingPage from "./component/TrendingPage"
import FollowUSPage from "./component/FollowUsPage"
import Footer from "./component/Footer"

function App() {
  return (
    <>
      <Main />
      <CollectionPage />
      <SellerPage />
      <AboutPage />
      <SignaturePage />
      <TrendingPage />
      <FollowUSPage />
      <Footer />
    </>
  )
}

export default App
