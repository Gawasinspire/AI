
# Code optimization on python

This modules gives some pythonic code optimization tips and tricks.

## Basic Rules from Rob Pike
### 5 Rules of Programming:
    * Rule 1: You can't tell where a program is going 
      to spend its time. Bottlenecks occur in surprising
      places, so don't try to second guess and put in a 
      speed hack until you've proven that's where the 
      bottleneck is.

    * Rule 2: Measure. Don't tune for speed until you've 
      measured, and even then don't unless one part of 
      the code overwhelms the rest.

    * Rule 3: Fancy algorithms are slow when n is small,
      and n is usually small. Fancy algorithms have big 
      constants. Until you know that n is frequently 
      going to be big, don't get fancy. (Even if n does
      get big, use Rule 2 first.)

    * Rule 4: Fancy algorithms are buggier than simple ones,
      and they're much harder to implement. Use simple
      algorithms as well as simple data structures.

    * Rule 5: Data dominates. If you've chosen the right data
      structures and organized things well, the algorithms
      will almost always be self-evident. Data structures,
      not algorithms, are central to programming.

Pike's rules 1 and 2 restate Tony Hoare's famous maxim "Premature optimization is the root of all evil." Ken Thompson rephrased Pike's rules 3 and 4 as "When in doubt, use brute force.".
Rules 3 and 4 are instances of the design philosophy KISS. Rule 5 was previously stated by Fred Brooks in The Mythical Man-Month. Rule 5 is often shortened to "write stupid code that uses smart objects". 

_To remember_: 1. Measure 2.Use simple Algorithms that solves problem 3. Choose right data structure. "MSD"
# Falsehoods programmers believe about time
This is a compiled list of falsehoods programmers tend to believe about working with time.

**Don't** re-invent a date time library yourself.
If you think you understand everything about time, you're probably doing it wrong.

## Falsehoods
- There are always 24 hours in a day.
- February is always 28 days long.
- Any 24-hour period will always begin and end in the same day (or week, or month).
- A week always begins and ends in the same month.
- A week (or a month) always begins and ends in the same year.
- The machine that a program runs on will always be in the `GMT` time zone.
- Ok, that’s not true. But at least the time zone in which a program has to run will never change.
- Well, surely there will never be a change to the time zone in which a program hast to run in production.
- The system clock will always be set to the correct local time.
- The system clock will always be set to a time that is not wildly different from the correct local time.
- If the system clock is incorrect, it will at least always be off by a consistent number of seconds.
- The server clock and the client clock will always be set to the same time.
- The server clock and the client clock will always be set to around the same time.
- Ok, but the time on the server clock and time on the client clock would never be different by a matter of decades.
- If the server clock and the client clock are not in synch, they will at least always be out of synch by a consistent number of seconds.
- The server clock and the client clock will use the same time zone.
- The system clock will never be set to a time that is in the distant past or the far future.
- Time has no beginning and no end.
- One minute on the system clock has exactly the same duration as one minute on any other clock
- Ok, but the duration of one minute on the system clock will be pretty close to the duration of one minute on most other clocks.
- Fine, but the duration of one minute on the system clock would never be more than an hour.
- The smallest unit of time is one second.
- Ok, one millisecond.
- It will never be necessary to set the system time to any value other than the correct local time.
- Ok, testing might require setting the system time to a value other than the correct local time but it will never be necessary to do so in production.
- Time stamps will always be specified in a commonly-understood format like `1339972628` or `133997262837`.
- Time stamps will always be specified in the same format.
- Time stamps will always have the same level of precision.
- A time stamp of sufficient precision can safely be considered unique.
- A timestamp represents the time that an event actually occurred.
- Human-readable dates can be specified in universally understood formats such as `05/07/11`.
- The offsets between two time zones will remain constant.
- OK, historical oddities aside, the offsets between two time zones won’t change in the future.
- Changes in the offsets between time zones will occur with plenty of advance notice.
- Daylight saving time happens at the same time every year.
- Daylight saving time happens at the same time in every time zone.
- Daylight saving time always adjusts by an hour.
- Months have either 28, 29, 30, or 31 days.
- The day of the month always advances contiguously from `N` to either `N+1` or `1`, with no discontinuities.
- There is only one calendar system in use at one time.
- There is a leap year every year divisible by 4.
- Non leap years will never contain a leap day.
- It will be easy to calculate the duration of x number of hours and minutes from a particular point in time.
- The same month has the same number of days in it everywhere!
- Unix time is completely ignorant about anything except seconds.
- Unix time is the number of seconds since Jan 1st 1970.
- The day before Saturday is always Friday.
- Contiguous timezones are no more than an hour apart. (aka we don’t need to test what happens to the avionics when you fly over the International Date Line)
- Two timezones that differ will differ by an integer number of half hours.
- Okay, quarter hours.
- Okay, seconds, but it will be a consistent difference if we ignore `DST`.
- If you create two date objects right beside each other, they’ll represent the same time. (a fantastic Heisenbug generator)
- You can wait for the clock to reach exactly `HH:MM:SS` by sampling once a second.
- If a process runs for `n` seconds and then terminates, approximately `n` seconds will have elapsed on the system clock at the time of termination.
- Weeks start on Monday.
- Days begin in the morning.
- Holidays span an integer number of whole days.
- The weekend consists of Saturday and Sunday.
- It’s possible to establish a total ordering on timestamps that is useful outside your system.
- The local time offset (from `UTC`) will not change during office hours.
- `Thread.sleep(1000)` sleeps for 1000 milliseconds.
- `Thread.sleep(1000)` sleeps for `>=` 1000 milliseconds.
- There are 60 seconds in every minute.
- Timestamps always advance monotonically.
- `GMT` and `UTC` are the same timezone.
- Britain uses `GMT`.
- Time always goes forwards.
- The difference between the current time and one week from the current time is always `7 * 86400` seconds.
- The difference between two timestamps is an accurate measure of the time that elapsed between them.
- `24:12:34` is a invalid time.
- Every integer is a theoretical possible year.
- If you display a datetime, the displayed time has the same second part as the stored time,
- Or the same year,
- But at least the numerical difference between the displayed and stored year will be less than 2.
- If you have a date in a correct `YYYY-MM-DD` format, the year consists of four characters.
- If you merge two dates, by taking the month from the first and the day/year from the second, you get a valid date.
- But it will work, if both years are leap years
- If you take a w3c published algorithm for adding durations to dates, it will work in all cases.
- The standard library supports negative years and years above 10000.
- Time zones always differ by a whole hour.
- If you convert a timestamp with millisecond precision to a date time with second precision, you can safely ignore the millisecond fractions.
- But you can ignore the millisecond fraction, if it is less than 0.5.
- Two-digit years should be somewhere in the range 1900-2099.
- If you parse a date time, you can read the numbers character for character, without needing to backtrack.
- But if you print a date time, you can write the numbers character for character, without needing to backtrack.
- You will never have to parse a format like `---12Z` or `P12Y34M56DT78H90M12.345S`.
- There are only 24 time zones.
- Time zones are always whole hours away from UTC.
- Daylight Saving Time (DST) starts/ends on the same date everywhere.
- DST is always an advancement by 1 hour.
- Reading the client’s clock and comparing to UTC is a good way to determine their timezone.
- The software stack will/won’t try to automatically adjust for timezone/DST.
- My software is only used internally/locally, so I don’t have to worry about timezones.
- My software stack will handle it without me needing to do anything special.
- I can easily maintain a timezone list myself.
- All measurements of time on a given clock will occur within the same frame of reference.
- The fact that a date-based function works now means it will work on any date.
- Years have 365 or 366 days.
- Each calendar date is followed by the next in sequence, without skipping.
- A given date and/or time unambiguously identifies a unique moment.
- Leap years occur every 4 years.
- You can determine the time zone from the state/province.
- You can determine the time zone from the city/town.
- Time passes at the same speed on top of a mountain and at the bottom of a valley.
- One hour is as long as the next in all time systems.
- You can calculate when leap seconds will be added.
- The precision of the data type returned by a `getCurrentTime()` function is the same as the precision of that function.
- Two subsequent calls to a `getCurrentTime()` function will return distinct results.
- The second of two subsequent calls to a `getCurrentTime()` function will return a larger result.
- The software will never run on a space ship that is orbiting a black hole.
- Devices will be set to the local timezone
- Users prefer to use the local timezone

## Sources
This list is based on these articles.
More detailed information about each statement can be found in one of two articles.

- http://infiniteundo.com/post/25326999628/falsehoods-programmers-believe-about-time
- http://infiniteundo.com/post/25509354022/more-falsehoods-programmers-believe-about-time
