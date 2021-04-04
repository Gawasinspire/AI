# scrapy shell

    $ scrapy shell                                                #"entering into  "
    $ fetch("http://quotes.toscrape.com/")
    $ response.xpath("//div[@class='quote']/span[@class='text']").extract()
    $ response.xpath("//div[@class='quote']/span[@class='text']/text()").extract()


"ola"

## different methods to extract using xpath

#If we want to get html node
	response.xpath("/html").extract()

#If we want to get body node, which is the child of html node
	response.xpath("/html/body").extract()

#If we want to get all div descendant of this html
	response.xpath("/html//div").extract()

#we can also drill down without having to start with /html, this expression would extract all div nodes
	response.xpath("//div").extract()
