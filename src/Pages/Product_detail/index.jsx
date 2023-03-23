import React from 'react'
import './style.css';
import {hamburger, menu} from './main'

const index = () => {
  return (
    <div>
        <body>
            <header id="main-header">
            <div class="img-search">
            <img
                src="{% static 'category/images/product-img/favicon.svg' %}"
                alt="mobile logo"
                class="shopmore-mobile-logo"
            />
            <img
                src="{% static 'category/images/product-img/logo.svg' %}"
                alt="shopmore logo"
                class="shopmore-logo"
            />
            <form
                id="form"
                role="search"
                aria-label="Search Site"
                class="header-form"
                action="{% url 'category:search_results' %}"
                method="get"
            >
                <input
                type="search"
                placeholder="Search"
                name="search"
                value="{{ request.GET.query }}"
                />
                <button type="submit">
                <svg viewBox="0 0 1024 1024">
                    <path
                    class="path1"
                    d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
                    ></path>
                </svg>
                </button>
            </form>
            </div>
            <nav>
            <a href="javascript:void(0);" class="hamburger">
                <div class="line line-one"></div>
                <div class="line line-two"></div>
                <div class="line line-three"></div>
            </a>
        
            <div class="menu">
                <a href="{% url 'category:home' %}" class="inactive">Home</a>
                <a href="{% url 'category:products'%}" class="inactive">Product</a>
                <a href="{% url 'category:about_page'%}" class="inactive">About</a>
                <a href="{% url 'category:contact_page' %}" class="inactive">Contact</a>
                <a href="{% url 'category:faq' %}" class="inactive">FAQ</a>
                <span>|</span>
                <a href="{% url 'accounts:signin' %}" class="header-status">Sign In</a>
                <a
                href="{% url 'accounts:user_profile' %}"
                class="header-status header-myaccount"
                >Adam Ibrahim</a>
        
                <hr />
                <div class="mobile-only">
                <div class="mobile-icons">
                    <a href="">Settings</a>
                    <img src="{% static 'category/images/product-img/setting.svg' %}" alt="" />
                </div>
                <div class="mobile-icons">
                    <a href="">Name</a>
                    <img src="{% static 'category/images/product-img/user.svg' %}" alt="" />
                </div>
                </div>
            </div>
            </nav>
        </header>

        <main>
            <section>
                <div id="input-mo">
                    <form id="form" role="search" aria-label="Search Site" class="header-form">
                        <input type="search" placeholder="Search"></input>
                        <button><svg viewBox="0 0 1024 1024">
                                <path class="path1"
                                    d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z">
                                </path>
                            </svg></button>
                    </form>
                </div>
            </section>

            <section>
                <div id="sec-1-div">
                    <div class="ph-img-div">
                        <img class="ph-img" src="{{ product.image_src }}" alt="Product image"></img>
                    </div>
                    <div id="sec-2-div">
                        <div class="ph-name-div">
                            <h3 class="ph-name">Lenovo laptop</h3>
                        </div>
                       
                        <div id="sec-3-div">
                            <div id="sec-4-div">
                                <div id="konga-div">
                                    <p class="konga">Jumia</p>
                                </div>
                                <div>
                                    <P class="free">Free Shipping</P>
                                </div>
                                <div class="star">
                                    <img class="img-1" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1" src="{% static 'category/images/product-img/star2.png'%}" alt=""></img>
                                </div>
                            </div>
                            <div id="sec-5-div">
                                <div id="main-price-div">
                                    <p class="main_price">919229</p>
                                </div>
                                <div>
                                    <a href="{{ j.link }}">
                                        <button  style="cursor:pointer;" id="checkO">Check Out</button>
                                    </a>
                                </div>
                                <div id="social-img">
                                    <a href="#"><img class="insta" src="./product-img/instagram.jpg" alt=""></img></a>
                                    <a href="#"><img class="insta" src="./product-img/instagram.jpg" alt=""></img></a>
                                    <a href="#"><img class="insta" src="./product-img/instagram.jpg" alt=""></img></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id="sec2-1-div">
                    <div class="pro-d2">
                        <div class="pro">
                            <h4 class="pro-text">Product Details</h4>
                        </div>
                        <p class="pro-de"></p>
                    </div>
                    <div class="spe-div">
                        <div class="spe-div-sm">
                            <p class="spe">Specifications</p>
                        </div>
                        <div class="d-ul">
                            <ul class="d-li">
                                
                                <li>Ram: {{specs.ram_size }}</li>
                                <li>Storage Capacity: {{ specs.rom_size }}
                                {% comment %} <li>Intel Core i7 2.70 GHz processor provides lightning fast speed and peak performance for
                                    the toughest of tasks and games</li>
                                <li>Memory storage capacity: 4.0</li>
                                <li>Operating system: Windows 1</li>
                                <li> Package Weight: 4.05 kilograms</li> {% endcomment %}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id="sec3-0-div">
                    <div>
                        <p class="ph-name">Price compare</p>
                    </div>
                    {% for platform in platforms %}
                    <div id="sec3-1-div">
                        <div id="sub-img">
                            <img class="sub-img" src="{{ product.image_src}}" alt="">
                        </div>
                        <div id="sec3-2-div">
                            <div id="sec3-3-div">
                                <div>
                                    <P class="ph-name sub-name">{{ platform.platform_name | capfirst }}</P>
                                </div>
                                <div>
                                    <P class="pro-name">{{ product.name}}</P>
                                </div>
                                <div>
                                    <P class="free-s">Free Shipping</P>
                                </div>
                                <div class="star">
                                    <img class="img-1 star-mo" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1 star-mo" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1 star-mo" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1 star-mo" src="{% static 'category/images/product-img/star.png'%}" alt=""></img>
                                    <img class="img-1 star-mo" src="{% static 'category/images/product-img/star2.png'%}" alt=""></img>
                                </div>
                            </div>
                            <div id="sec3-4-div">
                                <div id="main-price-div">
                                    <p class="main_price sub-price">{{ platform.price }}</p>
                                </div>
                                <div>
                                    <a target="blank" href="{{ platform.link }}"><button id="checkO" style="cursor: pointer;">Check Out</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {% endfor %}
                </div>
            </section>

            <section>
                <div id="discla">
                    <div class="de-div">
                        <div>
                            <h5 class="de">Disclaimer</h5>
                        </div>
                        <div>
                            <p class="de-d">Prices are provided by the merchants. We assume no responsibility for accuracy
                                of price information provided by merchants. Please alert us to any pricing discrepancies and
                                we will alert the merchant. Sales taxes are estimated at the zip code level. Shipping costs
                                are estimates. Please check store for exact shipping costs.Product specifications are
                                obtained from third parties, and while we make every effort to assure the accuracy of
                                product information, we do not assume any liability for inaccuracies. Store ratings and
                                product reviews are written and submitted by online shoppers to assist you as you shop. They
                                do not reflect our opinions. We take no responsibility for the content of ratings and
                                reviews submitted by users.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div id="sec4-0-div">
                    <div>
                        <p class="ph-name">Leave a review</p>
                    </div>
                    {% if not user.is_authenticated %}
                    <a href="{% url 'accounts:signin' %}" class="header-status">Sign In to comment</a>
                    {% else %}
                    <div>
                        <form action="" method="post">
                            {% csrf_token %}
                            <label for="">
                                <div id="form-2">
                                    <div>
                                        <textarea name="body" id="Comment" cols="30" rows="10"
                                            placeholder="Make a Comment"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" style="cursor:pointer;" class="comment-btn">Comment</button>
                                    </div>
                                </div>
                            </label>
                        </form>
                    </div>
                    {% endif %}
                </div>
            </section>

            <section>
                <div id="sec5-0-div">
                    <div>
                        <p class="ph-name">Customer Reviews</p>
                    </div>
                    <div class="over">
                        {% for comment in comments %}
                        <div id="sec5-1-div">
                            <div id="review1">
                                <div id="review-img">
                                    <img class="review-img" src="{% static 'accounts/images/profile-circle.png'%}" alt="">
                                </div>
                                <div id="sec5-2-div">
                                    <div>
                                        <P class="review">{{ comment.body }}</P>
                                    </div>
                                    <div>
                                        <P class="review-name">{{ comment.username }}</P>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {% endfor %}
                        {% comment %} <div id="sec5-1-div">
                            <div id="review1">
                                <div id="review-img">
                                    <img class="review-img" src="./product-img/Ellipse 63.png" alt="">
                                </div>
                                <div id="sec5-2-div">
                                    <div>
                                        <P class="review">It could probably be a factory error but mine didn’t come with a
                                            manual, that said the life span of the device is integring, 3 years and counting
                                            ... </P>
                                    </div>
                                    <div>
                                        <P class="review-name">Aishat Osuoala</P>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sec5-1-div">
                            <div id="review1">
                                <div id="review-img">
                                    <img class="review-img" src="./product-img/Ellipse 64.png" alt="">
                                </div>
                                <div id="sec5-2-div">
                                    <div>
                                        <P class="review">Lenovo thinkpad is an awesome gaming device , I would choose it
                                            all over again if I was to make another purchase ... </P>
                                    </div>
                                    <div>
                                        <P class="review-name">Obina Bryan</P>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="sec5-1-div">
                            <div id="review1">
                                <div id="review-img">
                                    <img class="review-img" src="./product-img/Ellipse 65.png" alt="">
                                </div>
                                <div id="sec5-2-div">
                                    <div>
                                        <P class="review">argggggh! I am indifferent please, I have a Mac book with a
                                            superior display and of course a better operating system ... </P>
                                    </div>
                                    <div>
                                        <P class="review-name">Marvel Uzo</P>
                                    </div>
                                </div>
                            </div>
                        </div> {% endcomment %}
                    </div>
                </div>
            </section>

            <section class="ready">
                <h2>Ready to get the best deals?</h2>
                <p>Stay updated about the latest and top deals that comes with
                    great discount. Don’t stay in the dark when the deals are ON</p>
                <a href="">Subscribe to Our Newsletter</a>
            </section>

        </main>

        <footer id="main-footer">
            <div class="main-footer">
                <div class="foot-item footer-main-logo"><img src="{% static 'category/images/footer-logo.svg' %}" alt="footer logo"></div>
                <div class="foot-item footer-mobile"><img src="{% static 'category/images/logo.svg' %}" alt="footer logo"></div>
                <div class="footer-item foot-item">
                    <h5>Company</h5>
                    <a href="{% url 'category:about_page'%}">About Us</a>
                    <a href="{% url 'category:contact_page' %}">Contact Us</a>
                    <a href="">Help & Support</a>
                    <a href="{% url 'category:faq' %}">FAQ</a>
                </div>
                <div class="footer-item foot-item">
                    <h5>Community</h5>
                    <a href="">Join Our Facebook Community</a>
                    <a href="">Join our Affiliate Program</a>
                    <a href="">Follow Us On Twitter</a>
                </div>
                <div class="footer-item foot-item">
                    <h5>Terms & Policies</h5>
                    <a href="{% url 'category:privacy' %}">Privacy Notice</a>
                    <a href="{% url 'category:terms_of_service' %}">Terms of Service</a>
                    <a href="{% url 'category:documentation' %}">Usage Guidlines</a>
                </div>
            </div>
            <div class="copyright"><p>Copyright 2022: Zuri Team 23</p></div>
        </footer>

        <script src="{% static 'category/js/product-details.js' %}"></script>
    </body>
    </div>
  )
}

export default index
