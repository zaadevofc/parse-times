## Parse Times

Parsing waktu dan dapatkan result yang komplit!

Menggunakan library dari [MomentJs](https://momentjs.com/).

List of Function :

* getTime() `// get => waktu saat ini => Objcet`
* getWeton() `// get => weton berdasarkan waktu => String`
* getTimeById() `// get => waktu berdasarkan id => Objcet`
* getRelative() `// get => Realtive waktu  => String`
* getCalendar() `// get => Calendar waktu  => String`

## Installation

Install with npm:

```js
$ npm install parse-times
```

With require:

```js
const parseTimes = require("parse-times");
```

### Usage

#### Example :

see [example.js](https://github.com/zaadevofc/img-to-url/blob/master/example.js) for details.

## Set Locale Time

if you want to change the region, you must read the documentation [MomentJs](https://momentjs.com/).
```js
parseTimes.set('id') // Default => "id"
````

## Get default Time
```js
const getTime = parseTimes.getTime() // Time Result => Object
const getTimeFormat = parseTimes.getTime({format: "DD/MM/YYYY hh:mm:ss a"}) // => 13/11/2022 19:50:18 malam

const timeId = new Date().getTime() || 1668343818991 // Get Time ID
const getTimeById = parseTimes.getTimeById(timeId) // Use Time ID && Time Result => Object
const getTimeByIdFormat = parseTimes.getTimeById(timeId, {format: "DD/MM/YYYY hh:mm:ss a"}) // => 13/11/2022 19:50:18 malam

/* 
Time Result :
{
  millisecond: 991,
  second: 18,
  minute: 50,
  hour: 19,
  date: 13,
  day: 0,
  dayed: 'Min',
  days: 'Minggu',
  month: 11,
  monthy: 'Nov',
  months: 'November',
  year: 22,
  years: 2022,
  situasion: 'malam',
  full: {
    ll: '13 Nov 2022',
    LL: '13 November 2022',
    lll: '13 Nov 2022 pukul 19.50',
    LLL: '13 November 2022 pukul 19.50',
    llll: 'Min, 13 Nov 2022 pukul 19.50',
    LLLL: 'Minggu, 13 November 2022 pukul 19.50'
  },
  region: { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
  timeId: 1668343818991
}
*/
```

## Get Weton
```js
const getWeton = parseTimes.getWeton(17, 11, 2022) // Date, Month, Year (required)
// => Pahing
```

## Get Relative Time
```js
const timeId = new Date().getTime() || 1668343818991 // Get Time ID

const getRelativeById = parseTimes.getRelative(timeId) // => 14 menit yang lalu
const getRelativeBySeconds = parseTimes.getRelative(timeId, {input: 10, based: 'seconds'}) // => dalam beberapa detik
const getRelativeMinutes = parseTimes.getRelative(timeId, {input: 10, based: 'minutes'}) // => dalam 10 menit
const getRelativeHours = parseTimes.getRelative(timeId, {input: 10, based: 'hours'}) // => dalam 10 jam
const getRelativeDays = parseTimes.getRelative(timeId, {input: 10, based: 'days'}) // => dalam 10 hari
const getRelativeMonths = parseTimes.getRelative(timeId, {input: 10, based: 'months'}) // => dalam 10 bulan
const getRelativeYears = parseTimes.getRelative(timeId, {input: 10, based: 'years'}) // => dalam 10 tahun
```

## Get Calendar Time
```js
const timeId = new Date().getTime() || 1668343818991 // Get Time ID

const getCalendarById = parseTimes.getCalendar(timeId) // => Hari ini pukul 19.50
const getCalendarBySeconds = parseTimes.getCalendar(timeId, {input: 10, based: 'seconds'}) // => Hari ini pukul 20.09
const getCalendarMinutes = parseTimes.getCalendar(timeId, {input: 10, based: 'minutes'}) // => Hari ini pukul 20.19
const getCalendarHours = parseTimes.getCalendar(timeId, {input: 10, based: 'hours'}) // => Besok pukul 06.09
const getCalendarDays = parseTimes.getCalendar(timeId, {input: 10, based: 'days'}) // => 23/11/2022
const getCalendarMonths = parseTimes.getCalendar(timeId, {input: 10, based: 'months'}) // => 13/09/2023
const getCalendarYears = parseTimes.getCalendar(timeId, {input: 10, based: 'years'}) // => 13/11/2032
```

## Testing

Install dependencies:

```
npm install
```

Run tests:

```
npm run test
```

## License

Code released under the [Apache license](LICENSE).