'use-strict'
const parseTimes = require('./lib/moment')
const log = console.log;

// Set Locale Time
parseTimes.set('id') // Default => "id"

// Get Time
const getTime = parseTimes.getTime() // Default
const getTimeFormat = parseTimes.getTime({format: "DD/MM/YYYY hh:mm:ss a"}) // Custom Format

// Get Weton
const getWeton = parseTimes.getWeton(17, 11, 2022) // Date, Month, Year (required)
// => Pahing

// Get Time By ID
const timeId = new Date().getTime() // Get Time ID
const getTimeById = parseTimes.getTimeById(timeId) // Use Time ID
const getTimeByIdFormat = parseTimes.getTimeById(timeId, {format: "DD/MM/YYYY hh:mm:ss a"}) // Custom Format

// Get Relative Time
const getRelativeById = parseTimes.getRelative(1668343818991) // => 14 menit yang lalu
const getRelativeBySeconds = parseTimes.getRelative(timeId, {input: 10, based: 'seconds'}) // => dalam beberapa detik
const getRelativeMinutes = parseTimes.getRelative(timeId, {input: 10, based: 'minutes'}) // => dalam 10 menit
const getRelativeHours = parseTimes.getRelative(timeId, {input: 10, based: 'hours'}) // => dalam 10 jam
const getRelativeDays = parseTimes.getRelative(timeId, {input: 10, based: 'days'}) // => dalam 10 hari
const getRelativeMonths = parseTimes.getRelative(timeId, {input: 10, based: 'months'}) // => dalam 10 bulan
const getRelativeYears = parseTimes.getRelative(timeId, {input: 10, based: 'years'}) // => dalam 10 tahun

/*log(getRelativeById)
log(getRelativeBySeconds)
log(getRelativeMinutes)
log(getRelativeHours)
log(getRelativeDays)
log(getRelativeMonths)
log(getRelativeYears)*/

// Get Calendar Time
const getCalendarById = parseTimes.getCalendar(1668343818991) // => Hari ini pukul 19.50
const getCalendarBySeconds = parseTimes.getCalendar(timeId, {input: 10, based: 'seconds'}) // => Hari ini pukul 20.09
const getCalendarMinutes = parseTimes.getCalendar(timeId, {input: 10, based: 'minutes'}) // => Hari ini pukul 20.19
const getCalendarHours = parseTimes.getCalendar(timeId, {input: 10, based: 'hours'}) // => Besok pukul 06.09
const getCalendarDays = parseTimes.getCalendar(timeId, {input: 10, based: 'days'}) // => 23/11/2022
const getCalendarMonths = parseTimes.getCalendar(timeId, {input: 10, based: 'months'}) // => 13/09/2023
const getCalendarYears = parseTimes.getCalendar(timeId, {input: 10, based: 'years'}) // => 13/11/2032

/*log(getCalendarById)
log(getCalendarBySeconds)
log(getCalendarMinutes)
log(getCalendarHours)
log(getCalendarDays)
log(getCalendarMonths)
log(getCalendarYears)*/