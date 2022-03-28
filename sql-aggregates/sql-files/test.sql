SELECT
    "firstName",
    "lastName",
    "filmId"
  FROM
    "actors"
  JOIN
    "castMembers" USING ("actorId")
  JOIN
    "films" USING ("filmId")
  WHERE
    "actorId" = 10
