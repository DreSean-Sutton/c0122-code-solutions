WITH "cost" AS (
    SELECT
      "title",
      "description",
      "filmId",
      "length",
      SUM("replacementCost") AS "replacementCost"
      FROM
        "films"
      JOIN
        "inventory" USING ("filmId")
      GROUP BY
        "filmId"
), "profit" AS (
    SELECT
      "filmId",
      SUM("amount") as "moneyGained"
      FROM
        "payments"
      JOIN
        "rentals" USING ("rentalId")
      JOIN
        "inventory" USING ("inventoryId")
      GROUP BY
        "filmId"
)
SELECT
  "title",
  "description",
  "length",
  "moneyGained"-"replacementCost" as "totalProfit"
  FROM
    "profit"
  JOIN
    "cost" USING ("filmId")
  ORDER BY "totalProfit" DESC
  LIMIT 5
