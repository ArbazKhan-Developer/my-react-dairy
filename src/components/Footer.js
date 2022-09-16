import React from "react";

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="page-footer" id="foot">
                <div className="footer-copyright text-center">
                    MY DAIRY
                    <br />{" "}
                    <a href="https://arbazkhan-developer.github.io/Eagle/">
                        {" "}
                        Arbaz khan{" "}
                    </a>
                </div>
                <center className="anch">
                    <a href="mailto:kabz860156@gmail.com" target="_blank">
                        <i className="fa fa-envelope-o" />
                    </a>
                    <a
                        href="https://touch.facebook.com/abz.khan.3576?ref=bookmarks"
                        target="_blank"
                    >
                        <i className="fa fa-facebook-square" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/arbaz-khan-349361186/"
                        target="_blank"
                    >
                        <i className="fa fa-linkedin-square" />
                    </a>
                    <a href="https://www.instagram.com/abz_khan_/" target="_blank">
                        <i className="fa fa-instagram" />
                    </a>
                </center>
            </footer>
        </React.Fragment>
    );
};


export default Footer;
