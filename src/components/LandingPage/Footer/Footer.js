

function Footer() {
  return (
    <div className="Footer">

       <footer class="page-footer font-small cyan darken-3">
        <div class="container text-center">
          <div class="row">
            <div class="col-md-12 py-5">
              <div class="mb-5 flex-center">
                <a href="#f" class="tw-ic">
                  <i className="bi bi-twitter bi-lg white-text mr-md-5 mr-3 bi-2x"> </i>
                </a>
                <a href="#v" className="li-ic">
                  <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                <a href="#c" className="ins-ic">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 ">
             <p>Conditions Of Use</p>
             <p>Privacy & Policy</p>
             <p>Press Room</p>
        </div>
        <div class="footer-copyright text-center py-3">© 2022 AnimeBox by 
          <a href="https://github.com/OladunniWaters">Oladunni Waters</a>
        </div>
   </footer>

    </div>
  );
}

export default Footer;
