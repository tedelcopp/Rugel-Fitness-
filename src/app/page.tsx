import Header from './components/Header';
import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import About from './components/Testimonials';
import Galery from "./components/Galery"

const Page = () => {
  return (
    <div>
      <section id="Header"><Header /> </section>
      <section id="plans"><Plans /></section>
      <section id="about"><About /></section>
      <section id="galery"><Galery /></section>
      <section id="contact"><Contact /></section>
      <section id="newsletter"><Newsletter /></section>
    </div>
  );
};

export default Page;
