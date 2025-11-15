import Content from "./components/layout/Content/Content.component";
import Footer from "./components/layout/Footer/Footer.component";
import Header from "./components/layout/Header/Header.component";

export default function App() {
  return (
    <main className="container">
        <Header />
        <Content />
        <Footer />
    </main>
  )
}
