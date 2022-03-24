select "co". "name",
 count("ci". "name") as "citiesAmount"
  from "countries" as "co"
  join "cities" as "ci" using ("countryId")
 group by "co". "name"
