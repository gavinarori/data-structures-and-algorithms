Create a class for the TreeNode with a constructor that initializes the appropriate key, value, parent and children properties.

Define an isLeaf getter, that uses Array.prototype.length to check if children is empty.

Define a hasChildren getter, that is the reverse of the isLeaf getter.
Create a class for the Tree with a constructor that initializes the root of the tree.

Define a preOrderTraversal() generator method that traverses the tree in pre-order, using the yield* syntax to recursively delegate traversal to itself.

Define a postOrderTraversal() generator method that traverses the tree in post-order, using the yield* syntax to recursively delegate traversal to itself.

Define an insert() method, that uses the preOrderTraversal() method and Array.prototype.push() to add a new TreeNode to the tree.

Define a remove() method, that uses the preOrderTraversal() method and Array.prototype.filter() to remove a TreeNode from the tree.

Define a find() method, that uses the preOrderTraversal() method to retrieve the given node in the tree.