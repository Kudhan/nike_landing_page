import { Footer, Hero, PopularProducts, Services, Subscribe, SuperQuality, SpecailOffer } from "./sections";
import Nav from './components/Nav'; 

const App = () => (
  <main className="relative">
     <Nav />
     <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecailOffer /> {/* Fixed typo by adding the closing tag here */}
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
