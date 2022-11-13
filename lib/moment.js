const moment = require('moment')
const fs = require('fs')
const timeId = new Date().getTime()
const packJson = JSON.parse(fs.readFileSync('./package.json'))
const country = require('country-emoji');
moment.locale('id')
let timeIdRequired = `\n> Time ID is required!\n> see the readme for details : ${packJson.homepage}\n`
let wetonNotValid = `\n> Format weton salah atau kosong!\n> Contoh: getWeton(tanggal, bulan, tahun)\n> Atau: getWeton(17, 11, 2022)\n> see the readme for details : ${packJson.homepage}\n`

exports.set = (x) => {
    moment.locale(x)
}

var timeJson = (id = timeId) => {
    return {
        millisecond: moment(id).milliseconds(),
        second: moment(id).seconds(),
        minute: moment(id).minutes(),
        hour: moment(id).hours(),
        date: moment(id).date(),
        day: moment(id).days(),
        dayed: moment(id).format('ddd'),
        days: moment(id).format('dddd'),
        month: moment(id).month() + 1,
        monthy: moment(id).format('MMM'),
        months: moment(id).format('MMMM'),
        year: parseFloat(moment(id).format('YY')),
        years: parseFloat(moment(id).format('YYYY')),
        situasion: moment(id).format('a'),
        full: {
            ll: moment(id).format('ll'),
            LL: moment(id).format('LL'),
            lll: moment(id).format('lll'),
            LLL: moment(id).format('LLL'),
            llll: moment(id).format('llll'),
            LLLL: moment(id).format('LLLL')
        },
        region: {
            code: moment.locale(),
            name: country.name(moment.locale()),
            flag: country.flag(moment.locale())
        },
        timeId: id
    }
}

exports.getTime = (options = {}) => {
    const timeId = new Date().getTime()
    const parse = (!options?.format) ? timeJson(timeId): moment().format(options.format)
    return parse
}

exports.getWeton = (date, month, year) => {
    if (!date && !month && !year) throw new Error(wetonNotValid)
    let dates = new Date(year, month, date)
    var getAwal = new Date(70, 0, 2),
    evalAwal = ((dates.getTime() - getAwal.getTime()) + 86400000) / 432000000,
    index = Math.round((evalAwal - Math.floor(evalAwal)) * 10) / 2,
    weton = ['Wage',
        'Kliwon',
        'Legi',
        'Pahing',
        'Pon'][index]
    return weton
}

exports.getTimeById = (id, options = {}) => {
    if (!id) throw new Error(timeIdRequired)
    const parse = (!options?.format) ? timeJson(id): moment().format(options.format)
    return parse
}

exports.getRelative = (id, options = {}) => {
    if (!id) throw new Error(timeIdRequired)
    const rell = moment(id).add(options?.input, options?.based).fromNow();
    return rell
}

exports.getCalendar = (id, options = {}) => {
    if (!id) throw new Error(timeIdRequired)
    const call = moment(id).add(options?.input, options?.based).calendar()
    return call
}