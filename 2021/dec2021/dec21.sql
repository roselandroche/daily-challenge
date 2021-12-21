-- https://leetcode.com/problems/reformat-department-table/submissions/

-- 1179. Reformat Department Table
-- Level: Easy

-- SQL Schema
-- Table: Department

-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | revenue     | int     |
-- | month       | varchar |
-- +-------------+---------+
-- (id, month) is the primary key of this table.
-- The table has information about the revenue of each department per month.
-- The month has values in ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].
 
-- Write an SQL query to reformat the table such that there is a department id column and a revenue column for each month.

-- Return the result table in any order.

-- Write your MySQL query statement below

SELECT
    id,
    SUM(CASE WHEN month = 'Jan' THEN revenue ELSE NULL END) Jan_Revenue,
    SUM(CASE WHEN month = 'Feb' THEN revenue ELSE NULL END) Feb_Revenue,
    SUM(CASE WHEN month = 'Mar' THEN revenue ELSE NULL END) Mar_Revenue,
    SUM(CASE WHEN month = 'Apr' THEN revenue ELSE NULL END) Apr_Revenue,
    SUM(CASE WHEN month = 'May' THEN revenue ELSE NULL END) May_Revenue,
    SUM(CASE WHEN month = 'Jun' THEN revenue ELSE NULL END) Jun_Revenue,
    SUM(CASE WHEN month = 'Jul' THEN revenue ELSE NULL END) Jul_Revenue,
    SUM(CASE WHEN month = 'Aug' THEN revenue ELSE NULL END) Aug_Revenue,
    SUM(CASE WHEN month = 'Sep' THEN revenue ELSE NULL END) Sep_Revenue,
    SUM(CASE WHEN month = 'Oct' THEN revenue ELSE NULL END) Oct_Revenue,
    SUM(CASE WHEN month = 'Nov' THEN revenue ELSE NULL END) Nov_Revenue,
    SUM(CASE WHEN month = 'Dec' THEN revenue ELSE NULL END) Dec_Revenue
FROM Department
GROUP BY id

-- Success
 
-- Runtime: 469 ms, faster than 63.47% of MySQL online submissions for Reformat Department Table.
-- Memory Usage: 0B, less than 100.00% of MySQL online submissions for Reformat Department Table.

-- Full Disclosue: I did NOT do this on my own, but treated this as a learning experience because it has been so long since
-- I worked in SQL