# Massacre Kill Tracker

## Startup process

1. If store exists, load from store and end startup.
2. Ask for Haz Rez System.
3. Find systems in a 10LY radius with a government. - Systems API
4. Check each of the systems in the 10 LY radius for the following:
   1. Factions - save id and names of any that have influence > 0
   2. Stations - save type and distance
5. Display distinct (no dupes) factions in rows.
6. Display 1-5 in the columns
7. Provide user with ability to choose Faction Rep for each faction. Default to allied.
8. TextFields should be present in the columns/rows for entry, accepting only numbers.
9. A column should list the total number of kills required per faction

## Calculation

1. Take total # of kills for a faction and
