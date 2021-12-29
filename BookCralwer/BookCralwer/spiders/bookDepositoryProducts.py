
import scrapy
from BookCralwer.items import BookcralwerItem


class bookDepositoryProducts(scrapy.Spider):
    name = "BookDepository"
    allowed_domains = ["bookdepository.com"]
    products_url = {}

    # Use working product URL below
    start_urls = [
        "https://www.bookdepository.com/bestsellers"
    ]
    def substring(self,str):
        index = 0
        letter = str[index]
        res = ""
        while letter == ',':
            index += 1
            letter = str[index]
        while letter != '%':
            res += letter
            index += 1
            letter = str[index]
        res += letter
        while letter != ')':
            index += 1
            letter = str[index]
        return res, str[index + 1:]


    def parse(self, response):
        items = BookcralwerItem()
        url = response.xpath(
            './/div[contains(@class,"book-item")]/div/a/@href').getall()
        for url_book in url:
            if not (url_book in self.products_url):
                self.products_url[url_book] = url_book
                yield scrapy.Request(response.urljoin(url_book), self.parse)
        star = response.xpath('//div[contains(@class, "rating-distribution-entry")]/text()').extract()
        src_img = response.xpath('//div[contains(@class, "item-img-content")]/img/@src').extract()
        avg_rating = response.xpath('.//span[contains(@itemprop, "ratingValue")]/text()').extract()
        this_link = response.xpath('.//link[contains(@rel, "canonical")]/@href').extract()
        reviews_count = response.xpath('.//span[contains(@class, "rating-count")]/text()').extract()
        items['product_5_star'] = ','.join(map(lambda x: x.strip(), star)).strip()
        star, str = self.substring(items['product_5_star'])
        items['product_5_star'] = star
        four_star_str, str = self.substring(str)
        items['product_4_star'] = four_star_str
        three_star_str, str = self.substring(str)
        items['product_3_star'] = three_star_str
        two_star_str, str = self.substring(str)
        items['product_2_star'] = two_star_str
        one_star_str, str = self.substring(str)
        items['product_1_star'] = one_star_str
        items['product_avg_rating'] = ','.join(map(lambda x: x.strip(), avg_rating)).strip()
        items['product_num_reviews'] = ','.join(map(lambda x: x.strip(), reviews_count)).strip()
        temp = items['product_num_reviews'].split("Goodreads),")
        items['product_num_reviews'] = temp[len(temp) - 1].replace('"', '')
        items['product_img'] = ','.join(map(lambda x: x.strip(), src_img)).strip()
        items['product_url'] = ','.join(map(lambda x: x.strip(), this_link)).strip()
        yield items