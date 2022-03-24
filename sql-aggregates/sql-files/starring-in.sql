select "g". "name" as "genres",
 count (*)
 from "actors"
 join "castMembers" using ("actorId")
 join "filmGenre" using ("filmId")
 join "genres" as "g" using ("genreId")
 where "firstName" = 'Lisa'
   and "lastName" = 'Monroe'
 group by "g". "name"
