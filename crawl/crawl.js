import Crawler from 'js-crawler'

let crawler = new Crawler().configure({
    ignoreRelative: false,
    depth: 2
})

crawler.crawl({
    url: 'http://www.gavlenet.se',
    success: function(page) {
        console.log(page.url);
    },
    failure: function(page) {
        console.warn(page.status);
    },
    finished: function(crawledUrls) {
        console.log(`Krälade igenom ${crawledUrls.length} sidor`);
    }
})
