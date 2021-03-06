/*
Number of Ways to Traverse Graph

You're given two positive integers representing the width and height of a grid-shaped, rectagular graph. Write a function that returns
the number of ways to reach the bottom right corner of the graph when starting at the top left corner. Each move you take must either
go down or right. In other words, you can never move up or left in the graph.

Gor example, given the graph illustrated below, wih width = 2 and height = 3, there are three ways to reach the bottom right
corner when starting at the top left corner:

 _ _
|_|_|
|_|_|
|_|_|

1. down, down, right
2. right, down, down
3. down, right, down

note: you may assume that width * height >= 2. In other words, the graph will never be a 1x1 grid.

example:
input:
width = 4
height = 3

 _ _ _ _
|_|_|_|_|
|_|_|_|_|
|_|_|_|_|

output:
10
*/
