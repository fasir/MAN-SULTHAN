import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Rahul M.',
    text: '"The best shopping experience I\'ve ever had! The perfume quality is outstanding and delivery was super fast."',
    rating: 5,
  },
  {
    name: 'Priya S.',
    text: '"I bought a watch from MAN SULTHAN and I\'m completely amazed. Premium quality at such affordable prices!"',
    rating: 5,
  },
  {
    name: 'Ahmed K.',
    text: '"Amazing collection of cooling glasses. Great customer service and the products are exactly as shown."',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>WHAT OUR CLIENTS SAY</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>{'★'.repeat(t.rating)}</div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                <span className={styles.name}>— {t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
