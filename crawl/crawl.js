import Crawler from 'js-crawler'

let myUrl = process.argv[2];
let depth = 2;
let myPages = [];
let otherPages = [];
let n = 0;

let crawler = new Crawler().configure({
    ignoreRelative: false,
    depth: depth
})

if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function(str) {
        return this.slice(0, str.length) == str;
    }
}

function progress(text) {
    process.stdout.write(text + '\r');
}

crawler.crawl({
    url: myUrl,
    success: function(page) {
        debugger;
        if (page.url.startsWith(myUrl)) {
            console.log(page.url);
            myPages.push(page);
            n += 1;
        } else {
            otherPages.push(page);
        }
    },
    failed: function(page) {
        otherPages.push(page)
    },
    finished: function(crawledUrls) {
        console.log(`Krälade igenom ${crawledUrls.length} sidor`);
        console.log(`Sparade ${myPages.length} sidor`);
        console.log('-------------------------------------------------')
        for (var i = otherPages.length - 1; i >= 0; i--) {
            console.log(otherPages[i].url);
        };
        console.log('-------------------------------------------------')
    }
})
