
CREATE TABLE products (
    id serial PRIMARY KEY,
    product_name varchar(100),
    product_cost decimal (4,2) DEFAULT 0,
    product_type varchar(20),
    product_loyalty_points int
);

INSERT INTO albums (album_name, genre, label, released)
VALUES ('Madonna','Dance-pop, post-disco','Warner Bros','July 27, 1983'),
('True Blue','Dance-pop, Pop'	,'Warner Bros','June 30, 1986'),
('Elvis','Dance-pop,Pop','Warner Bros','October 19, 1956'),
('Sign o''the Times','Pop, R&B, Rock, Funk','Paisley Park, Warner Bros','March 30, 1987'),
('G.I. Blues','Rock and roll, Pop','RCA Victor','October 1, 1960');


('Born in the USA'	,	'Rock and roll, pop',	'Columbia','June 4, 1984');
('Purple Rain'	,'Pop, R&B, Rock',	'Warner Bros',	'1984-06-25');

INSERT INTO album_singers (album_id, singer_name)
VALUES (1,'Bruce Springsteen'),
    (2,'Prince'),
    (3,'Bruce Springsteen'),
    (4,'Madonna'),
    (5,'Madonna'),
    (6,'Elvis Presley'),
    (7,'Prince'),
    (8,'Elvis Presley');







-- SELECT id,
--     CASE WHEN student <> NULL THEN
-- FROM seat

-- SELECT
-- CASE
-- WHEN MOD(id, 2) = 1 AND id = (SELECT COUNT(*) FROM seat) THEN id
-- WHEN MOD(id, 2) = 0 THEN id-1
-- WHEN MOD(id, 2) = 1 THEN id+1
-- END AS id,
-- student
-- FROM seat
-- ORDER BY id;


-- declare @N as int = (select count(id) from seat)
-- select id,
-- case
-- when id % 2 <> 0 and id< @N then lead(student,1) over(order by id)
-- when id % 2 = 0 then lag(student,1) over(order by id)
-- else student
-- end as student
-- from seat
-- order by id