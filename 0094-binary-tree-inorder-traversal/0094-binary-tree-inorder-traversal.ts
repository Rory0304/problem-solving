/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function inorderTraversal(root: TreeNode | null): number[] {
    let res: number[] = [];

    execute(root, res);

    return res
};

function execute(root: TreeNode | null, res:number[]){
    if(root !== null){
        execute(root.left, res);
        res.push(root.val)
        execute(root.right, res)
    }
}