<>
  <title>Authorization Code flow with Spotify</title>
  <link
    rel="stylesheet"
    href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css"
  />
  <style
    type="text/css"
    dangerouslySetInnerHTML={{
      __html:
        "\n        #login,\n        #loggedin {\n            display: none;\n        }\n        .text-overflow {\n            overflow: hidden;\n            text-overflow: ellipsis;\n            white-space: nowrap;\n            width: 500px;\n        }\n    "
    }}
  />
  {/*Screen that user is presented with on login*/}
  <div className="container">
    <div id="login">
      <h1>Spotify Authorization - Login!</h1>
      <a href="/login" className="btn btn-primary">
        Log in with Spotify
      </a>
    </div>
    <div id="loggedin">
      <div id="user-profile"></div>
      <div id="oauth"></div>
      <button className="btn btn-default" id="obtain-new-token">
        Obtain new token using the refresh token
      </button>
    </div>
  </div>
  {/*Displays the users spotify information*/}
  {/*Uses jQuery to get data;*/}
</>
