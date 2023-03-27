import './Products.css'
import landingImage from '../../assets/images/products/product_slider.jpg';

// Categories Images
import iphones from '../../assets/images/products/categories/iphone.jpg'
import cameras from '../../assets/images/products/categories/camera.jpg'
import laptops from '../../assets/images/products/categories/laptops.jpg'
import tablets from '../../assets/images/products/categories/tablets.jpg'
import andriods from '../../assets/images/products/categories/andriods.jpg'

// Mobiles Images
import iphone13 from '../../assets/images/products/mobiles/iphone13.png'
import infinixnote12 from '../../assets/images/products/mobiles/infinixnote12.png'
import galaxynote10 from '../../assets/images/products/mobiles/galaxynote10.png'
import iphonexsma from '../../assets/images/products/mobiles/iphonexsma.png'

// Mobiles Images
import canoneos5d from '../../assets/images/products/cameras/canon-eos-5d.png'
import nikond3100 from '../../assets/images/products/cameras/nikon-d3100.png'
import nikonl340 from '../../assets/images/products/cameras/nikon-l340.png'
import nikonz6 from '../../assets/images/products/cameras/nikon-z-6.png'

// Computers Images
import dellinspiron from '../../assets/images/products/computers/dell-inspiron.png'
import hpcorei7 from '../../assets/images/products/computers/hp-corei7.png'
import intelcorei7 from '../../assets/images/products/computers/intel-corei7.png'
import lenovocorei3 from '../../assets/images/products/computers/lenovo-corei3.png'

import { useState } from 'react';
import ProductLists from './ProductList';

const productsCategories = [
        {
            id:"iphones",
            imageUrl: iphones,
            title: "Iphones",
        },
        {
            id:"cameras",
            imageUrl: cameras,
            title: "Cameras",
        },
        {
            id:"androids",
            imageUrl: andriods,
            title: "Androids",
        },
        {
            id:"laptops",
            imageUrl: laptops,
            title: "Laptops"
        },
        {
            id:"tablets",
            imageUrl: tablets,
            title: "Tablets",
        }
]

const mobilesProducts = [
    {
        id: 'iphone13',
        imageUrl: iphone13,
        title: 'Iphone 13'
    },
    {
        id: 'infinixnote12',
        imageUrl: infinixnote12,
        title: 'Infinix Note 12'
    },
    {
        id: 'galaxynote10',
        imageUrl: galaxynote10,
        title: 'Galaxy Note 10'
    },
    {
        id: 'iphonexsma',
        imageUrl: iphonexsma,
        title: 'Iphone Xs Ma'
    }
]

const camerasProducts = [
    {
        id: 'canoneos5d',
        imageUrl: canoneos5d,
        title: 'Canon EOS-5d'
    },
    {
        id: 'nikond3100',
        imageUrl: nikond3100,
        title: 'Nikon D3100'
    },
    {
        id: 'nikonl340',
        imageUrl: nikonl340,
        title: 'Nikon L340'
    },
    {
        id: 'nikonz6',
        imageUrl: nikonz6,
        title: 'Nikon Z-6'
    }
]

const computersProducts = [
    {
        id: 'dellinspiron',
        imageUrl: dellinspiron,
        title: 'Dell Inspiron'
    },
    {
        id: 'hpcorei7',
        imageUrl: hpcorei7,
        title: 'Hp Core i7'
    },
    {
        id: 'intelcorei7',
        imageUrl: intelcorei7,
        title: 'Intel Core i7'
    },
    {
        id: 'lenovocorei3',
        imageUrl: lenovocorei3,
        title: 'Lenovo Core i3'
    }
]

const Products = () => {
    const [products] = useState(productsCategories);
    const [mobilesProduct] = useState(mobilesProducts);
    const [camerasProduct] = useState(camerasProducts);
    const [computersProduct] = useState(computersProducts);

    return (
        <main className='main'>
            <section className="products">
                <div className="container">
                    <div className="products__slider">
                        <img src={landingImage} alt="LandingImage" />
                        <span className="slider__title">New Arrivals</span>
                        <div className="slider__buttons">
                            <i className="slider__next">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.61704 17.9201L2.8288 11.4001C2.02712 10.6301 2.02712 9.37008 2.8288 8.60008L9.61704 2.08008" stroke="#2A3131" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </i>
                            <i className="arrow slider__previous">
                                <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.28894 17.9201L9.07719 11.4001C9.87887 10.6301 9.87887 9.37008 9.07719 8.60008L2.28894 2.08008" stroke="#2A3131" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </i>
                        </div>
                    </div>


                    <div className="products__categories">
                        <h4 className="products__title">Categories</h4>
                        <div className="popular__categories" datatype="popular">
                            <h6 className="products__subtitle">Popular</h6>

                            <div className="category popular__lists">
                                {
                                    products.map(product => {
                                        const {id, imageUrl, title} = product;
                                        return(
                                            <ProductLists key={id}  objectSize="cover" imageURL={imageUrl} name={title}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="products__categories" datatype="mobiles">
                            <h6 className="products__subtitle">Mobile Phones</h6>

                            <div className="category products__lists">
                                {
                                    mobilesProduct.map(mobile => {
                                        const {id, imageUrl, title} = mobile;
                                        return (
                                            <ProductLists key={id} productSize="large" objectSize="contain" imageURL={imageUrl} name={title}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="products__categories" datatype="cameras">
                            <h6 className="products__subtitle">Cameras</h6>

                            <div className="category products__lists">
                                {
                                    camerasProduct.map(mobile => {
                                        const {id, imageUrl, title} = mobile;
                                        return (
                                            <ProductLists key={id} productSize="large" objectSize="contain" imageURL={imageUrl} name={title}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className="products__categories" datatype="Laptops&Desktop">
                            <h6 className="products__subtitle">Desktops & Laptops</h6>

                            <div className="category products__lists">
                                {
                                    computersProduct.map(mobile => {
                                        const {id, imageUrl, title} = mobile;
                                        return (
                                            <ProductLists key={id} productSize="large" objectSize="contain" imageURL={imageUrl} name={title}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className='more__products'>
                        <span>Find more items</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Products;