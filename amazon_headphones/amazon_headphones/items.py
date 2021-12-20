# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class AmazonHeadphonesItem(scrapy.Item):
    # define the fields for your item here like:
    product_url = scrapy.Field()
    product_5_star = scrapy.Field()
    product_4_star = scrapy.Field()
    product_3_star = scrapy.Field()
    product_2_star = scrapy.Field()
    product_1_star = scrapy.Field()
    product_avg_rating = scrapy.Field()
    product_img = scrapy.Field()
