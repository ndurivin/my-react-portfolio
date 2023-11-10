const Section = ({ title, subtitle, image, children }) => {
  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white py-3">
        {title}
      </h2>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <div className="">
              <h3>{title}</h3>
              <p className="justify-content-start">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
