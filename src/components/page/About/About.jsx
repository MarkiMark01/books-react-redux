import { NavLink } from "react-router-dom";
// import styles from "./stylesAbout.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Online Bookstore</h2>
      <section>
        <p>
          At Book Store, we invite you to embark on a journey through the
          enchanting realms of literature, where every page unfolds a new
          adventure. Our online bookstore is a haven for book enthusiasts,
          offering an extensive and diverse collection that caters to every
          taste and preference.
        </p>
        <p>
          📚 Explore a World of Books: From timeless classics that have shaped
          generations to the latest page-turners captivating readers worldwide,
          our curated selection spans various genres, ensuring there's something
          for everyone. Immerse yourself in fiction, get inspired by
          non-fiction, or let the little ones discover magical worlds in our
          children's section.
        </p>
        <p>
          🏡 Visit Our Imaginary Storefront: While our physical address is
          purely fictional, the warmth and joy of exploring our virtual
          bookstore are very real. Wander through the digital aisles, browse
          book covers, and read engaging summaries - all from the comfort of
          your home.
        </p>
        <p>
          📞 Customer Support: Have a question or need assistance? Our friendly
          and fictional customer support team is just a phone call away.
        </p>
        <p>
          Dial 555-123-4567 for personalized assistance or drop us an email at
          info@bookhaven.com.
        </p>
        <p>
          🌐 Online Ordering Made Easy: Experience the convenience of online
          shopping with our user-friendly platform. Browse, add to your cart,
          and securely check out - all in a few clicks. We ship to imaginary
          locations worldwide!
        </p>
        <p>
          Whether you're an avid reader, a casual browser, or a gift-giver in
          search of the perfect literary present, Book Haven is your destination
          for literary bliss. Discover the joy of reading with us – where every
          book is an adventure waiting to be unfolded. Happy reading! 📖✨
        </p>
      </section>
      <section >
        <NavLink to="/">Go to books</NavLink>
      </section>
    </div>
  );
};
export default About;
