# Binary Search Tree (BST) Node Deletion README

## Overview

This README provides an explanation and guide for understanding the Binary Search Tree (BST) node deletion code snippet. The code is written in a pseudo-language resembling a combination of C and pseudo-code.

## Code Explanation

The provided code implements the deletion operation for a Binary Search Tree. Here's a breakdown of the main logic:

1. **Base Case**: If the root is null, return null.

2. **Deletion Logic**:
   - If the key to be deleted is less than the current root's key, recursively delete it in the left subtree.
   - If the key is greater, recursively delete it in the right subtree.
   - If the key is equal, handle three cases:
      - If the node has at most one child, replace the node with its child.
      - If the node has two children, find the minimum valued node in the right subtree, replace the node's key with the minimum valued node's key, and recursively delete the minimum valued node.

3. **Update Node Height**: After deletion, update the height of the current root based on the maximum height of its left and right subtrees.

4. **Check Balance**: Calculate the balance factor of the root (the difference between the heights of the left and right subtrees).

5. **Rotation Operations**:
   - Perform right rotation if the balance is greater than 1 and the balance of the left subtree is greater than or equal to 0.
   - Perform left rotation followed by right rotation if the balance is greater than 1 and the balance of the left subtree is less than 0.
   - Perform left rotation if the balance is less than -1 and the balance of the right subtree is less than or equal to 0.
   - Perform right rotation followed by left rotation if the balance is less than -1 and the balance of the right subtree is greater than 0.

6. **Return Root**: Finally, return the updated root.

## Usage

To use this BST deletion code in your project, you can incorporate the provided logic into your preferred programming language. Make sure to understand the specifics of the language you're working with and adapt the pseudo-code accordingly.

## Example

Here's a simple example demonstrating how to use the BST deletion:

```pseudo
// Example Usage
START
   if root == null: return root
   if key < root.key:
      root.left = delete Node
   else if key > root.key:
      root.right = delete Node
   else:
      if root.left == null or root.right == null then:
         Node temp = null
         if (temp == root.left)
            temp = root.right
         else
            temp = root.left
         if temp == null then:
            temp = root
            root = null
         else
            root = temp
         else:
            temp = minimum valued node
            root.key = temp.key
            root.right = delete Node
      if (root == null) then:
         return root
         root.height = max (height (root.left), height (root.right)) + 1
         balance = getBalance
      if balance > 1 and getBalance (root.left) >= 0:
         rightRotate
      if balance > 1 and getBalance (root.left) < 0:
         root.left = leftRotate (root.left);
         rightRotate
      if balance < -1 and getBalance (root.right) <= 0:
         leftRotate
      if balance < -1 and getBalance (root.right) > 0:
         root.right = rightRotate (root.right);
         leftRotate
      return root
END