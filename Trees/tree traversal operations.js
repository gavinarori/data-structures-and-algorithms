function TreeNode(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    //Recursive Inorder Traversal
    function inorderRecursive(tree) {
        const result = [];
        
        function inorderTraverse(node) {
          if (!node) return;
              
          inorderTraverse(node.left);
          result.push(node.val);
          inorderTraverse(node.right);
        }
        
        inorderTraverse(tree);
        
        return result;
      }
      //Non-recursive Inorder Traversal
      function inorderRecursive(tree) {
        const stack = [];
        const result = [];
        let currentNode = tree;
          
        while (currentNode || stack.length) {
          while (currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
          }
      
          const node = stack.pop();
          result.push(node.val);
          currentNode = node.right;
        }
      
        return result;
      }
      //Preorder Traversal
      //Recursive Preorder Traversal
      function preorderRecursive(tree) {
        const result = [];
      
        function preorderTraverse(node) {
          if (!node) return;
      
          result.push(node.val);
          preorderTraverse(node.left);
          preorderTraverse(node.right);
        }
      
        preorderTraverse(tree);
      
        return result;
      }
      //Non-recursive Preorder Traversal
      function preorderTraversal(root) {
        if (!root) return [];
      
        const stack = [root];
        const result = [];
      
        while (stack.length) {
          const node = stack.pop();
          result.push(node.val);
      
          if (node.right) stack.push(node.right);
          if (node.left) stack.push(node.left);
        }
      
        return result;
      }
      //Postorder Traversal
      //Recursive Postorder Traversal
      function postorderRecursive(tree) {
        const result = [];
      
        function postorderTraverse(node) {
          if (!node) return;
      
          postorderTraverse(node.left);
          postorderTraverse(node.right);
          result.push(node.val);
        }
      
        postorderTraverse(tree);
      
        return result;
      }
      //Non-recursive Postorder Traversal
      function postorderTraversal(root) {
        if (!root) return [];
      
        const stack = [root];
        const result = [];
      
        while (stack.length) {
          const node = stack[stack.length - 1];
      
          if (node.left) {
            stack.push(node.left);
            node.left = null;
          } else if (node.right) {
            stack.push(node.right);
            node.right = null;
          } else {
            result.push(stack.pop().val);
          }
        }
      
        return result;
      }

  }