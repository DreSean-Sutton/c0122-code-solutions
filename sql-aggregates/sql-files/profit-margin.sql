WITH cte_cost AS (
    SELECT
      "title",
      "description",
      SUM("replacementCost") as "replacementCost"
      FROM
        "films"
      JOIN "inventory" USING ("filmId")
      GROUP BY
        "filmId"
)
-- WITH cte_revenue AS (
    SELECT
      "title",
      "description",
      SUM("rentalRate") as "Revenue"
      FROM
        "films"
      JOIN "inventory" USING ("filmId")
      GROUP BY
        "filmId"
-- )
