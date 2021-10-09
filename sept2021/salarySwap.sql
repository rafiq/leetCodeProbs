UPDATE salary
    SET sex = (CASE WHEN sex = 'f' THEN 'm'
                ELSE 'm' END);

UPDATE salary
    SET sex  = (CASE WHEN sex = 'm'
        THEN  'f'
        ELSE 'm'
        END)

SET sex = 'f'
WHERE sex = 'm'

UPDATE salary SET sex = 'm'
WHERE sex = 'f'


SELECT
    CASE WHEN a = b AND b = a AND b = c THEN 'Equilateral',
    ELSE a = b OR b = c OR a = c THEN 'Isosceles',
    ELSE a <> b AND b <> c AND c <> a THEN 'Scalene',
    ELSE  'Not A Triangle'
    END
FROM triangles;


a + b < c OR b + c < a OR c + a < b THEN

SELECT CASE
            WHEN A + B > C AND B + C > A AND A + C > B THEN
                CASE
                    WHEN A = B AND B = C THEN 'Equilateral'
                    WHEN A = B OR B = C OR A = C THEN 'Isosceles'
                    ELSE 'Scalene'
                END
            ELSE 'Not A Triangle'
        END
FROM TRIANGLES;