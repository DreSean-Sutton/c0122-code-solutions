select "firstName",
       "lastName",
sum("p". "amount") as "totalCost"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
 group by "c". "customerId"
 order by "totalCost" desc
