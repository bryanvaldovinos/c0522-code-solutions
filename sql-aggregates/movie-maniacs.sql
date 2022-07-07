select "customers"."firstName" || ' ' ||"customers"."lastName" as "Customer Name",
        sum("payments"."amount") as "Total Spent"
  from "payments"
  join "customers" using ("customerId")
    group by "customers"."customerId"
    order by sum("payments"."amount") desc
