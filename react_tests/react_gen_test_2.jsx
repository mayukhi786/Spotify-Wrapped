<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Spotify Web API</title>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossOrigin="anonymous"
  />
  <link rel="stylesheet" type="text/css" href="main.css" />
  <div className="container">
    <h2>Discover New Songs! ✨</h2>
    <form action="">
      <input type="hidden" id="hidden_token" />
      <div className="col-sm-6 form-group row mt-4 px-0">
        <label htmlFor="Genre" className="form-label col-sm-2">
          Genre:
        </label>
        <select
          name=""
          id="select_genre"
          className="form-control form-control-sm col-sm-10"
        >
          <option>Select...</option>
        </select>
      </div>
      <div className="col-sm-6 form-group row px-0">
        <label htmlFor="Genre" className="form-label col-sm-2">
          Playlists:
        </label>
        <select
          name=""
          id="select_playlist"
          className="form-control form-control-sm col-sm-10"
        >
          <option>Select...</option>
        </select>
      </div>
      <div className="col-sm-6 row form-group px-0">
        <button
          type="submit"
          id="btn_submit"
          className="btn btn-success col-sm-12"
        >
          Search
        </button>
      </div>
    </form>
    <div className="row">
      <div className="col-sm-6 px-0">
        <div className="list-group song-list"></div>
      </div>
      <div className="offset-md-1 col-sm-4" id="song-detail"></div>
    </div>
  </div>
</>
