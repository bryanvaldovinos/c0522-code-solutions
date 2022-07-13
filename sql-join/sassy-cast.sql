select "firstName",
        "lastName"
  from "castMembers"
  join "actors" using ("actorId")
  join "films" using ("filmId")
      where "filmId" = '485'
