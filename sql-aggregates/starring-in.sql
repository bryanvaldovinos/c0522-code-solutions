select "genres"."name" as "Genre",
        count("genres"."genreId") as "# of Movies"
    from "actors"
    join "castMembers" using ("actorId")
    join "filmGenre" using ("filmId")
    join "films" using ("filmId")
    join "genres" using ("genreId")
      where "firstName" = 'Lisa'
        and "lastName" = 'Monroe'
    group by "genres"."name"
