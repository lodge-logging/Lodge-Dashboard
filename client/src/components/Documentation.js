const Documenation = () => {
  return (
    <>
      <div className="ui basic segment">
        <h2 className="ui header">Overview</h2>
        <div className="ui segment">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            facilisis mollis elit quis sodales. Aenean luctus ante leo, sed
            suscipit diam sollicitudin vitae. In hendrerit dui et mauris
            condimentum blandit. Phasellus consectetur arcu dui, ac sagittis est
            molestie nec. Curabitur eleifend, enim non dictum blandit, purus
            lacus condimentum erat, et molestie orci risus sit amet justo.
            Maecenas at efficitur turpis. Etiam a neque vitae nisi ornare
            hendrerit. Sed auctor elit eget urna accumsan, in consectetur est
            dapibus. Nullam dictum quis quam et posuere.
          </p>
        </div>
        <img
          className="ui massive right spaced image"
          src={process.env.PUBLIC_URL + "/lodge-elk.png"}
          alt="lodge-elk-high-level"
        />
      </div>
    </>
  );
};

export default Documenation;
