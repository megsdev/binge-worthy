DELETE FROM shows 
WHERE user_id = $1
AND tmdb_id = $2