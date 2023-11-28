

## Overview

This README provides an explanation and guide for understanding the Binary Search Tree (BST) insertion code snippet. The code is written in a pseudo-language resembling a combination of C and pseudo-code.

## Code Explanation

The provided code implements the insertion operation for a Binary Search Tree. Here's a breakdown of the main logic:

1. **Base Case**: If the current node is null, create a new node and return it.

2. **Insertion Logic**:
   - If the key to be inserted is less than the current node's key, recursively insert it in the left subtree.
   - If the key is greater, recursively insert it in the right subtree.
   - If the key is equal, do nothing and return the current node.

3. **Update Node Height**: After insertion, update the height of the current node based on the maximum height of its left and right subtrees.

4. **Check Balance**: Calculate the balance factor of the node (the difference between the heights of the left and right subtrees).

5. **Rotation Operations**:
   - Perform right rotation if the balance is greater than 1 and the key is less than the key of the left child.
   - Perform left rotation if the balance is less than -1 and the key is greater than the key of the right child.
   - Perform left-right rotation if the balance is greater than 1 and the key is greater than the key of the left child.
   - Perform right-left rotation if the balance is less than -1 and the key is less than the key of the right child.

6. **Return Node**: Finally, return the updated node.

## Usage

To use this BST insertion code in your project, you can incorporate the provided logic into your preferred programming language. Make sure to understand the specifics of the language you're working with and adapt the pseudo-code accordingly.

## Example

Here's a simple example demonstrating how to use the BST insertion:

```pseudo
// Example Usage
START
   if node == null then:
      return new node
   if key < node.key then:
      node.left = insert (node.left, key)
   else if (key > node.key) then:
      node.right = insert (node.right, key)
   else
      return node
   node.height = 1 + max (height (node.left), height (node.right))
   balance = getBalance (node)
   if balance > 1 and key < node.left.key then:
      rightRotate
   if balance < -1 and key > node.right.key then:
      leftRotate
   if balance > 1 and key > node.left.key then:
      node.left = leftRotate (node.left)
      rightRotate
   if balance < -1 and key < node.right.key then:
      node.right = rightRotate (node.right)
      leftRotate (node)
   return node
END