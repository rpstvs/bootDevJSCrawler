const {crawlPage} = require ('./crawl.js')

function main (){

    if(process.argv.length != 3){
        console.log("Too many commands")
    }

    else {
        console.log(`we are crawling into ${process.argv[2]}`)
        crawlPage(process.argv[2]);
    }


}

main();