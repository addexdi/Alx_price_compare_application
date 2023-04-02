const cheerio = require("cheerio");
const fs = require("fs");

const scrapJumia = (html) => {
    const $ = cheerio.load(html);
    const products = $("a[class=core]") || "unable to get";
    const jumiaProducts = [];

products.each(function () {
    const productName = $(this).find(".info > .name").text();
    const productLink = $(this).attr("href");
    const productStore = $(this).find(".shop-logo > span").text() || "not provided";

    const oldPrice = $(this).find(".info > .s-prc-w > .old").text();
    const newPrice = $(this).find(".info > .prc").text();

    const official = $(this).find(".top-badge > img").attr("src") || "not provided";
    const info = $(this).find(".info > .tag").text();
    const productImage = $(this).find(".img-c > img").attr("data-src");

    jumiaProducts.push({
        websiteName: "jumia",
        productName,
        productLink: `https:www.jumia.com.ng/${productLink}`,
        productImage,
        productStore,
        productAvailability: info,
        officialBadge: official,
        oldPrice,
        newPrice,
    });
});

//console.log(jumiaProducts)
return jumiaProducts;
};