"use strict";

class BinaryNode {
	constructor(data, left, right) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BinaryTree {
	constructor(nodes) {
		this.rootNode = new BinaryNode(nodes[0], null, null);
		for (let i = 1; i < nodes.length; i++) {
			this.insertNode(nodes[i]);
		}
	}

	insertNode(node) {
		let currentNode = this.rootNode;
		let parentNode = currentNode;

		while (currentNode !== null) {
			if (node < currentNode.data) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (node > currentNode.data) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			}
		}

		if (node < parentNode.data) {
			parentNode.left = new BinaryNode(node, null, null);
		} else if (node > parentNode.data) {
			parentNode.right = new BinaryNode(node, null, null);
		}
	}

	printTree() {
		console.log(JSON.stringify(this.rootNode, null, 2));
	}
}

//assumption: tree nodes will be from a set of unique integers only
const binaryTree = new BinaryTree([8, 10, 3, 1, 6, 14, 4, 7, 13, -1]);
binaryTree.printTree();
