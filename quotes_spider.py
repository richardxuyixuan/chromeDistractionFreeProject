import scrapy
#this is for learning https://www.youtube.com/watch?v=Y0AG6L3GJCs&list=PLhTjy8cBISEqkN-5Ku_kXG4QW33sxQo0t&index=7

class QuoteSpider(scrapy.Spider):
    name = 'quotes'
    start_urls = ['https://www.youtube.com/watch?v=7x9xEraDhts']

    def parse(self, response): #response is a source code , check scrapy shell
        # response.css('title::text').extract_first()
        title = response.css('title::text').extract_first() #css selector, css condition like if , do this by using a particular css selector
        body = response.css('body::text').extract_first()
        #info = [title,body]
        #return (title)
        # yield it or return it
        # if yield :
        return{'title':title,'body':body}



