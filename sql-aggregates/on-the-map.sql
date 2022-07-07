select count(*) as "# of Cities per",
                    "countries"."name" as "Country"
    from "cities"
    join "countries" using ("countryId")
  group by "countries"."name";
