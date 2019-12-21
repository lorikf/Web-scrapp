const cheerio = require('cheerio')
const request = require('request-promise')
const fs = require('fs')
const {Parser} = require('json2csv')

async function extract(site){
    const html = await request.get(site);
    const $ = await cheerio.load(html)
    let distribuidora = $(`body > table > tbody > tr:nth-child(4) > td > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(1)`).text().trim();
    console.log(distribuidora)
}

extract('http://www2.aneel.gov.br/scg/gd/gd_fonte_detalhe.asp?tipo=12&pagina=1')