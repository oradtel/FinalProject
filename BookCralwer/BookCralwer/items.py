# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class BookcralwerItem(scrapy.Item):
    # define the fields for your item here like:
    product_5_star = scrapy.Field()
    product_4_star = scrapy.Field()
    product_3_star = scrapy.Field()
    product_2_star = scrapy.Field()
    product_1_star = scrapy.Field()
    product_avg_rating = scrapy.Field()
    product_num_reviews = scrapy.Field()
    product_img = scrapy.Field()
    product_url = scrapy.Field()
    pass
