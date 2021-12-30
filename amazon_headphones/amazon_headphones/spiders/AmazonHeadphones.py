import scrapy
from amazon_headphones.items import AmazonHeadphonesItem
from scrapy.shell import inspect_response


class AmazonheadphonesSpider(scrapy.Spider):
    name = "Amazontest"
    allowed_domains = ["amazon.com"]
    # Use working product URL below
    products_url = {}
    start_urls = [
        "https://www.amazon.com/s?k=headphones&s=review-rank&crid=A88Q82ATWW8O&qid=1639144778&sprefix=headp%2Caps%2C314&ref=sr_pg_1"]

    def substring(self, str, word1, word2):
        if not str:
            return "0%"
        start = str.find(word1) + len(word1)
        end = str.find(word2)
        return str[start:end]

    def parse(self, response):
        items = AmazonHeadphonesItem()
        url = response.xpath(
            './/span[contains(@cel_widget_id,"MAIN-SEARCH_RESULTS")]/div/div/div/div/div/div/span/a/@href').getall()
        # url_list=url.split(",")
        # f.write(str(url))
        url_next = response.xpath('//a[contains(@class,"s-pagination-item s-pagination-next s-pagination-button s-pagination-separator")]/@href').extract()
        for url_headphone in url:
            if (not url_headphone in self.products_url):
                self.products_url[url_headphone] = url_headphone
                yield scrapy.Request(response.urljoin(url_headphone), self.parse)
        this_link = response.xpath('.//link[contains(@rel, "canonical")]/@href').extract()

        reviews_num = response.xpath('.//span/a/span[contains(@id,"acrCustomerReviewText")]/text()').extract()
        one_star = response.xpath('//tr[contains(@aria-label, "1 stars")]/@aria-label').extract()
        two_star = response.xpath('//tr[contains(@aria-label, "2 stars")]/@aria-label').extract()
        three_star = response.xpath('//tr[contains(@aria-label, "3 stars")]/@aria-label').extract()
        four_star = response.xpath('//tr[contains(@aria-label, "4 stars")]/@aria-label').extract()
        five_star = response.xpath('//tr[contains(@aria-label, "5 stars")]/@aria-label').extract()
        src_img = response.xpath('.//li[contains(@class, "image item")]/span/span/div/img/@src').extract()
        avg_rating = response.xpath('.//div[contains(@id, "averageCustomerReviews")]/span/span/@title').extract()
        # //*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[20]/div/div/span/a[4]
        if (len(url_next) != 0):
            temp = 'https://www.amazon.com/' + str(url_next[0])
            yield scrapy.Request(response.urljoin(temp), self.parse)

        items['product_1_star'] = ','.join(map(lambda x: x.strip(), one_star)).strip()
        items['product_1_star'] = self.substring(items['product_1_star'], "represent ", " of")
        items['product_2_star'] = ','.join(map(lambda x: x.strip(), two_star)).strip()
        items['product_2_star'] = self.substring(items['product_2_star'], "represent ", " of")
        items['product_3_star'] = ','.join(map(lambda x: x.strip(), three_star)).strip()
        items['product_3_star'] = self.substring(items['product_3_star'], "represent ", " of")
        items['product_4_star'] = ','.join(map(lambda x: x.strip(), four_star)).strip()
        items['product_4_star'] = self.substring(items['product_4_star'], "represent ", " of")
        items['product_5_star'] = ','.join(map(lambda x: x.strip(), five_star)).strip()
        items['product_5_star'] = self.substring(items['product_5_star'], "represent ", " of")
        items['product_img'] = ','.join(map(lambda x: x.strip(), src_img)).strip()
        items['product_avg_rating'] = ','.join(map(lambda x: x.strip(), avg_rating)).strip()
        if (len(items['product_avg_rating']) > 0):
            items['product_avg_rating'] = items['product_avg_rating'][0:3]

        items['product_url'] = ','.join(map(lambda x: x.strip(), this_link)).strip()
        items['product_num_reviews'] = ','.join(map(lambda x: x.strip(), reviews_num)).strip()
        items['product_num_reviews'] = self.substring(items['product_num_reviews'], "", " ")
        # items['next_url'] = ','.join(map(lambda x: x.strip(), url_next)).strip()
        yield items
