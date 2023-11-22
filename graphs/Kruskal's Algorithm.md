Understanding the Algorithm

Kruskal's algorithm works by sorting all the edges from the lowest weight to the highest. It then iterates through the sorted edges and adds it to the minimum spanning tree if it doesn't form a cycle with the MST. It continues adding edges until it has added V-1 edges where V is the number of vertices.