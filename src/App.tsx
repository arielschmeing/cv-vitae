import { Footer } from "./components/layout/Footer"
import { Header } from "./components/layout/Header"
import { Sections } from "./components/layout/Sections"

export const App = () => {
  return (
    <main className="relative">
      <Header />
      <Sections />
      <Footer />
    </main>
  )
}