insert into users
(name, facebook_id, friends, picture)
values ($1, $2, $3, $4)

returning *