WITH cte_cost AS (
    SELECT
      "title",
      "description",
      "filmId",
      SUM("replacementCost") as "replacementCost"
      FROM
        "films"
      JOIN "inventory" USING ("filmId")
      JOIN "rentals" USING ("inventoryId")
      JOIN "payments" AS "p" USING ("rentalId")
      GROUP BY
        "filmId"
        ORDER BY "title" DESC
)
    SELECT
        "title",
        "description",
      SUM ("replacementCost")+("p". "amount") as "Revenue"
      FROM cte_cost
      JOIN "inventory" USING ("filmId")
      JOIN "rentals" USING ("inventoryId")
      JOIN "payments" AS "p" USING ("rentalId")
