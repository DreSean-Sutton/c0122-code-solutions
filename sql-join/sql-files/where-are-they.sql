select "a". "line1" as "address",
       "a". "district",
       "c". "name" as "city",
       "countries". "name" as "country"
  from "addresses" as "a"
  join "cities" as "c" using ("cityId")
  join "countries" using ("countryId")
