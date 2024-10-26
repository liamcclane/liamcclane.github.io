const Home = () => {
    return <><nav class="navbar navbar-expand sticky-top navbar-dark bg-dark">
      <div class="container-lg">
        <a class="navbar-brand" href="index.html">
          <img src="./assests/LM-logo.png" width="30" height="30" class="d-inline-block align-top rounded"
            alt="LM logo" loading="lazy" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link active" href="index.html">Projects<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="moreAboutMe.html">Work</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="fun.html">Fun</a>
            </li>
          </ul>
        </div>
      </div>
    </nav><div class="container-flex my-wrapper">
        <div class="jumbotron">
          <div class="container">
            <div class="jumbo-background text-center p-2">
              <h1 class="display-4">Lia McClane</h1>
              <p class="lead">Full Stack Web Developer</p>
              <img src="./assests/rotated.jpg" alt="Lia" height="200" width="200" />
                <a class="btn btn-success" href="./assests/McClaneResume2024.pdf" download>Download My Resume</a></div>
          </div>
        </div>
        <div>
          <h1 class="frost my-h1 border rounded text-center">Projects</h1>
        </div>
        <div class="row justify-content-center ml-0 mr-0">
          <div class="card frost">
            <img src="./assests/travelBuddies.gif" class="card-img-top" alt="Travel Buddies"/>
              <div class="card-body">
                <h5 class="card-title">Travel Buddies</h5>
                <p class="card-text">I built this site to centralize friends and adventure enthusiasts alike. This
                  site helps organize and plan fun trips and events. Each trip has a host and travelers, and the
                  UI settings are dependent on that role.
                  <p class="card-text">
                    I imported <strong>bcrypt</strong> to secure and store hashed passwords for users protection,
                    intertwined <strong>mySQL</strong>
                    as database, worked with <strong>bootstrap</strong> for creative front end designs.</p>
                </p>
                <h6>Tech Used</h6>
                <ul>
                  <li>Django</li>
                  <li>Bcrypt</li>
                  <li>Bootstrap</li>
                  <li>mySQL</li>
                </ul>
                <div class="row justify-content-center">
                  <a href="http://3.136.108.165/" class="btn btn-outline-primary">Visit the Live Site</a>
                </div>
              </div>
            </div>
          <div class="card frost">
            <img src="./assests/lanesAndBars.gif" class="card-img-top" alt="Lanes and Bars" />
              <div class="card-body">
                <h5 class="card-title">ProductPlan</h5>
                <p class="card-text">This site was built with React, created from a wireframe given for a job interview</p>
                <h6>Tech Used</h6>
                <ul>
                  <li>React</li>
                  <li>Flex-box</li>
                  <li>Hooks</li>
                </ul>
                <div class="row justify-content-center">
                  <a href="https://www.github.com/liamcclane/ProductPlanAssignment" class="btn btn-outline-primary">Visit the
                    repo</a>
                </div>
              </div></div>
          <div class="card frost">
            <img src="./assests/WatchWithMePreview.gif" class="card-img-top" alt="WatchWithMe" />
              <div class="card-body">
                <h5 class="card-title">WatchWithMe</h5>
                <p class="card-text">Watch With Me was created as a Netflix clone.</p>
                <h6>Tech Used</h6>
                <ul>
                  <li>React</li>
                  <li>Mongo</li>
                  <li>FlexBox</li>
                  <li>Media queries for mobile development</li>
                </ul>
                <div class="row justify-content-center">
                  <a href="https://github.com/liamcclane/WatchWithMe" class="btn btn-outline-primary">Visit the
                    repo</a>
                </div>
              </div>
            </div>
          <div class="card frost">
            <img src="./assests/cribbage-pro.gif" class="card-img-top" alt="Cribbage landing page" />
              <div class="card-body">
                <h5 class="card-title">Cribbage-Pro</h5>
                <p class="card-text">This passion project was inspired by the card game Cribbage. The game as a
                  whole is an edge case. The logic to get the game working was challenging enough. Then designing
                  a responsive UI crib board was another whole monster.</p>
                <p>I recruited one other member to help my vision become a reality. We built this project using
                  <strong>Angular</strong>. The front end design takes advantage of grid with
                  <strong>flex-box</strong> and relies on <strong>media queries</strong> for screen sizes.
                  Internally, Cribbage-Pro manipulates Objects and classes in multiple ways in
                  order to always be optimizing score counting and AI automation. The live demo is the first around of
                  logic as a clickable prototype.
                </p>
                <h6>Tech Used</h6>
                <ul>
                  <li>Angular</li>
                  <li>Flex-box</li>
                  <li>Media queries</li>
                  <li>Utilized class OOP in TypeScript</li>
                  <li>Deployed via AWS</li>
                </ul>
                <div class="row justify-content-center">
                  <a href="http://18.217.2.166/game" class="btn btn-outline-primary">Visit the
                    Live Site</a>
                </div>
              </div></div>
          <div class="card frost">
            <img src="./assests/ssl-short.gif" class="card-img-top" alt="Spooky Spooky Library" />
              <div class="card-body">
                <h5 class="card-title">Spooky Spooky Library</h5>
                <p class="card-text">This project is a library manager where patrons can checkout books and librarians
                  can manage both the book database as well as the patrons who create me accounts in the county.
                </p>
                <h6>Tech Used</h6>
                <ul>
                  <li>Java</li>
                  <li>JDB Connections</li>
                  <li>Figma, as a wireframe</li>
                  <li>SCRUM and agile work flow</li>
                </ul>
                <div class="row justify-content-center">
                  <a href="https://gitlabs.com/DarrickTroung/LibraryManager" class="btn btn-outline-primary">Visit the
                    repo</a>
                </div>
              </div>
            </div>
          <div class="card frost">
            <img src="./assests/burgerYumYum.gif" class="card-img-top" alt="burgerYumYum" />
              <div class="card-body">
                <h5 class="card-title">Burger Yum Yum</h5>
                <p class="card-text">This project was made with <strong>React</strong>.
                  Users can build a single custom burger with as many ingredients as they desire.</p>
                <h6>Tech Used</h6>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>git</li>
                </ul>
                <div class="row justify-content-center">
                  <a href="https://github.com/liamcclane/" class="btn btn-outline-primary">Visit my github</a>
                </div>
              </div>
            </div>
        </div>
      </div><footer class="bd-footer text-muted navbar-dark bg-dark">
        <div class="container-lg my-footer p-3 p-md-5">
          <div class="row justify-content-center">
            <ul class="bd-footer-links">
              <li><a href="https://LinkedIn.com/in/liamcclane" target="_blank">LinkedIn</a></li>
              <li><a href="https://github.com/liamcclane" target="_blank">GitHub</a></li>
              <li><a href="https://leetcode.com/liamcclane/" target="_blank">LeetCode</a></li>
              <li><a href="https://www.hackerrank.com/lia_mcclane" target="_blank">HackerRank</a></li>
              <li><a href="https://app.codesignal.com/profile/lia_mcclane" target="_blank">CodeSignal</a></li>
            </ul>
          </div>
          <div class="row justify-content-center">
            <ul class="bd-footer-links">
              <li>Email : <a href="mailto:lia_mcclane@msn.com">lia_mcclane@msn.com</a></li>
            </ul>
          </div>
        </div>
      </footer></>;
  };
  
  export default Home;