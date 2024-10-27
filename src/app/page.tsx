import Plans from './components/Plans';
import Testimonials from './components/Testimonials';
import Header from './components/Header';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Galery from "./components/Galery"

const Page = () => {
  return (
    <div>
      <section id="Header"><Header /> </section>
      <section id="plans"><Plans /></section>
      <section id="galery"><Galery /></section>
      <section id="newsletter"><Newsletter /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
};

export default Page;
