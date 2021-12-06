import scrapy
from amazon_headphones.items import AmazonHeadphonesItem

class AmazonheadphonesSpider(scrapy.Spider):
    name = "Amazontest"
    allowed_domains = ["amazon.com"]

    # Use working product URL below
    start_urls = [
        "https://www.amazon.com/Isolating-Headphones-Microphone-Adjustable-Turquoise/dp/B087JWTWF9"    ]

    def parse(self, response):
        items = AmazonHeadphonesItem()
        title = response.xpath('//h1[@id="title"]/span/text()').extract()
        sale_price = response.xpath('//span[contains(@id,"ourprice") or contains(@id,"saleprice")]/text()').extract()
        three_star = response.xpath('//tr[contains(@aria-label, "3 stars")]/@aria-label').extract()
        four_star = response.xpath('//tr[contains(@aria-label, "4 stars")]/@aria-label').extract()
        five_star = response.xpath('//tr[contains(@aria-label, "5 stars")]/@aria-label').extract()
        one_star = response.xpath('//tr[contains(@aria-label, "1 stars")]/@aria-label').extract()
        two_star = response.xpath('//tr[contains(@aria-label, "2 stars")]/@aria-label').extract()

        availability = response.xpath('//div[@id="availability"]//text()').extract()
        items['product_name'] = ''.join(title).strip()
        items['product_sale_price'] = ''.join(sale_price).strip()
        items['product_1_star'] = ','.join(map(lambda x: x.strip(), one_star)).strip()
        items['product_2_star'] = ','.join(map(lambda x: x.strip(), two_star)).strip()
        items['product_3_star'] = ','.join(map(lambda x: x.strip(), three_star)).strip()
        items['product_4_star'] = ','.join(map(lambda x: x.strip(), four_star)).strip()
        items['product_5_star'] = ','.join(map(lambda x: x.strip(), five_star)).strip()
        items['product_availability'] = ''.join(availability).strip()
        yield items
