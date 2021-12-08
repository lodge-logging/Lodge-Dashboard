const Home = () => {
  return (
    <>
      <div class="ui floating message">
        <p>Welcome to the Lodge Dashboard!</p>
      </div>
      <div className="ui vertical segment">
        <img
          className="ui centered medium image"
          src={process.env.PUBLIC_URL + "/lodge_logo_color.png"}
          alt="Lodge Logo"
        />
      </div>
      <div className="ui vertical olive segment">
        <p>
          Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
          alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
          electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
          Mei ex natum rebum iisque.
        </p>
        <p>
          Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
          definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
          te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
          vide phaedrum, vim vivendum maiestatis in
        </p>
      </div>
    </>
  );
};

export default Home;
