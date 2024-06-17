import "./AboutUs.css";

function AboutUs() {
    return (
        <div className="AboutUs_body">

            <div className="about_main_div">
                <div className="section">
                    <div className="container">
                        <div className="content-section">
                            <div className="title">
                                <h1>About Us</h1>
                            </div>
                            <div className="content">
                                <h3>One Stop For all Farmers!</h3>
                                <p>
                                    Our Website Major Motto is to Help Farmers in a very unique way.
                                    Our website consists of five major sections namely Crop
                                    Suggestion section, Discussions Tab, Market Place for Farmers,
                                    Login for better services and lastly Chatbot for further
                                    assistance. For better understanding of the five major
                                    sections.<br />
                                    Firstly, Crop Suggestion section the page takes inputs and
                                    display the best possible crops and their full-fledged details
                                    such as Season suitable for the crop, minimal investment, water
                                    availability, Gross income and total profit earned. This, helps
                                    the Farmers to have better understanding of professional
                                    farming.<br />
                                    The website contains Discussion tab in which Farmers can post
                                    their query and other farmers or experts might help them posting
                                    solutions to their query.<br />
                                    The another section of our website and center of attraction is
                                    the MarketPlace. Farmers can have all the products at one place
                                    which are required at a very minimal price. machinery, seeds,
                                    fertilizers, pesticides are some of the basic examples. <br />
                                    For Better Services Farmers needs to login in to website for
                                    more assistance.<br />
                                    Lastly, the Chatbot which helps the users for instant help.
                                </p>
                            </div>

                            <div className="social">
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="image-section">
                            <img src="./AboutUs_Images/aboutusimg.jpg" />
                        </div>
                    </div>
                </div>

                <div className="container-1 AboutContainer">
                    <div className="AboutUs_carousel">
                        <h1>Team Members:</h1>
                        <div className="AboutUs_carousel__face"><span>Group-02</span></div>
                        <div className="AboutUs_carousel__face"></div>
                        <div className="AboutUs_carousel__face"></div>
                        <div className="AboutUs_carousel__face"></div>
                        <div className="AboutUs_carousel__face"></div>
                        <div className="AboutUs_carousel__face"></div>
                    </div>
                </div>

                <div className="names-div">
                    <div className="names">
                        <span>Abhijeet Singh, 2001660100002</span><br />
                        <span>Ashvani Gurjar,2001660100016</span><br />
                        <span>Vishal Gupta,2001660100065</span><br />
                        <span>Ankit Baghel,2001660100009</span><br />
                        <span>Prashant Singh,2001660100041</span><br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
