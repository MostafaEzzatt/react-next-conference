const Section = ({ id, title, children, className }) => {
  return (
    <section className={`pt-10 ${className}`}>
      {title && (
        <h2
          className="text-seaction text-brand-dark text-center font-bold capitalize mb-8"
          id={id}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;
