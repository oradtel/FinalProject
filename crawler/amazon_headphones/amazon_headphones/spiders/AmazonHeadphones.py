import scrapy
from amazon_headphones.items import AmazonHeadphonesItem

class AmazonheadphonesSpider(scrapy.Spider):
    name = "Amazontest"
    allowed_domains = ["amazon.com"]

    # Use working product URL below
    start_urls = [
        "https://www.amazon.com/s?k=headphones&s=review-rank&crid=A88Q82ATWW8O&qid=1639144778&sprefix=headp%2Caps%2C314&ref=sr_pg_1"]
    products_url={}
    def parse(self, response):

        items = AmazonHeadphonesItem()
        url= response.xpath('.//span[contains(@cel_widget_id,"MAIN-SEARCH_RESULTS")]/div/div/div/div/div/div/span/a/@href').extract()

        three_star = response.xpath('//tr[contains(@aria-label, "3 stars")]/@aria-label').extract()
        four_star = response.xpath('//tr[contains(@aria-label, "4 stars")]/@aria-label').extract()
        five_star = response.xpath('//tr[contains(@aria-label, "5 stars")]/@aria-label').extract()
        one_star = response.xpath('//tr[contains(@aria-label, "1 stars")]/@aria-label').extract()
        two_star = response.xpath('//tr[contains(@aria-label, "2 stars")]/@aria-label').extract()
        src_img = response.xpath('.//li[contains(@class, "image item")]/span/span/div/img/@src').extract()
        avg_rating = response.xpath('.//div[contains(@id, "averageCustomerReviews")]/span/span/@title').extract()
        items['product_1_star'] = ','.join(map(lambda x: x.strip(), one_star)).strip()
        items['product_2_star'] = ','.join(map(lambda x: x.strip(), two_star)).strip()
        items['product_3_star'] = ','.join(map(lambda x: x.strip(), three_star)).strip()
        items['product_4_star'] = ','.join(map(lambda x: x.strip(), four_star)).strip()
        items['product_5_star'] = ','.join(map(lambda x: x.strip(), five_star)).strip()
        items['product_img'] = ','.join(map(lambda x: x.strip(), src_img)).strip()
        items['product_avg_rating'] = ','.join(map(lambda x: x.strip(), avg_rating)).strip()
        items['product_url'] = ','.join(map(lambda x: x.strip(), url)).strip()

        yield items