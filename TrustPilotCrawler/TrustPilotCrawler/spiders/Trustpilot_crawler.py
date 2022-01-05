import scrapy
from TrustPilotCrawler.items import TrustpilotcrawlerItem
from scrapy.shell import inspect_response


class TrustpilotSpider(scrapy.Spider):
    name = "Trustpilottest"
    allowed_domains = ["trustpilot.com"]
    # Use working product URL below
    products_url = {}
    start_urls = [
        "https://www.trustpilot.com/categories/jewelry_store?numberofreviews=0&status=all&timeperiod=0"]

    def substring(self, str, word1, word2):
        if not str:
            return "0%"
        start = str.find(word1) + len(word1)
        end = str.find(word2)
        return str[start:end]


    def parse(self, response):
        items = TrustpilotcrawlerItem()
        url = response.xpath(
            '//*[@id="__next"]/div/main/div/div[2]/section/div[1]/div[2]/a[@class ="link_internal__YpiJI link_wrapper__LEdx5"]/@href').getall()
        url_next = response.xpath('//*[@id="__next"]/div/main/div/div[2]/section/nav/a[@name="pagination-button-next"]/@href').extract()
        for url_jewel in url:
            if (not url_jewel in self.products_url):
                self.products_url[url_jewel] = url_jewel
                yield scrapy.Request(response.urljoin(url_jewel), self.parse)
        this_link = response.xpath('.//link[contains(@rel, "canonical")]/@href').extract()

        one_star = response.xpath('//*[@id="__next"]/div/main/div/div[3]/section/div[2]/div[2]/label[@data-star-rating="one"]/@title').extract()
        two_star = response.xpath('//*[@id="__next"]/div/main/div/div[3]/section/div[2]/div[2]/label[@data-star-rating="two"]/@title').extract()
        three_star = response.xpath('//*[@id="__next"]/div/main/div/div[3]/section/div[2]/div[2]/label[@data-star-rating="three"]/@title').extract()
        four_star = response.xpath('//*[@id="__next"]/div/main/div/div[3]/section/div[2]/div[2]/label[@data-star-rating="four"]/@title').extract()
        five_star = response.xpath('//*[@id="__next"]/div/main/div/div[3]/section/div[2]/div[2]/label[@data-star-rating="five"]/@title').extract()
        src_img = response.xpath('//*[@id="__next"]/div/main/div/div[2]/div[2]/div/div/section[1]/div[1]/div[1]/a/img/@src').extract()
        avg_rating = response.xpath('//*[@id="__next"]/div/main/div/div[2]/div[2]/div/div/section[1]/div[1]/div[2]/div/div/p/text()').extract()
        if (len(url_next) != 0):
            temp = 'https://www.trustpilot.com/' + str(url_next[0])
            yield scrapy.Request(response.urljoin(temp), self.parse)

        items['product_1_star'] = ','.join(map(lambda x: x.strip(), one_star)).strip()
        items['product_1_star'] = self.substring(items['product_1_star'], "", " of")
        items['product_2_star'] = ','.join(map(lambda x: x.strip(), two_star)).strip()
        items['product_2_star'] = self.substring(items['product_2_star'], "", " of")
        items['product_3_star'] = ','.join(map(lambda x: x.strip(), three_star)).strip()
        items['product_3_star'] = self.substring(items['product_3_star'], "", " of")
        items['product_4_star'] = ','.join(map(lambda x: x.strip(), four_star)).strip()
        items['product_4_star'] = self.substring(items['product_4_star'], "", " of")
        items['product_5_star'] = ','.join(map(lambda x: x.strip(), five_star)).strip()
        items['product_5_star'] = self.substring(items['product_5_star'], "", " of")
        items['product_img'] = ','.join(map(lambda x: x.strip(), src_img)).strip()
        items['product_avg_rating'] = ','.join(map(lambda x: x.strip(), avg_rating)).strip()

        items['product_url'] = ','.join(map(lambda x: x.strip(), this_link)).strip()
        items['product_num_reviews'] = ','.join(map(lambda x: x.strip(), one_star)).strip()
        items['product_num_reviews'] = self.substring(items['product_num_reviews'], "of ", " reviews")
        yield items
