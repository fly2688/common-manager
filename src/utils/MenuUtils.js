/*
 * 获子孙树
 * @param   array        data   待分类的数据
 * @param   int/string   pid    待找的父节点
 */
export default class TreeData {
  constructor (data, selectIds) {
    let tree = [];
    let key = 'id';
    let parentKey = 'parentId';
    let sNodes = data;
    let tmpMap = {};
    for (let i = 0; i < sNodes.length; i++) {
      sNodes[i].visible = true;
      sNodes[i].active = sNodes[i].active || false;  // 单击选中的样式
      if (selectIds.indexOf(sNodes[i].id) >= 0) { sNodes[i].active = true; }
      sNodes[i].children = [];
      sNodes[i].level = 0;
      tmpMap[sNodes[i][key]] = sNodes[i];
    }
    for (let i = 0; i < sNodes.length; i++) {
      let p = tmpMap[sNodes[i][parentKey]];
      if (p && sNodes[i][key] !== sNodes[i][parentKey]) {
        let children = this.nodeChildren(p);
        if (!children) {
          children = this.nodeChildren(p, []);
        }
        children.push(sNodes[i]);
      } else {
        tree.push(sNodes[i]);
      }
    }
    if (tree.length > 1) {
      let temp = {
        'children': [],
        'name': '',
        'level': 0
      };
      temp.children = tree;
      tree = [temp];
    } else {
      if (selectIds.length === 0) {
        tree[0].children[0].active = true;
      }
      tree[0].level = 0;
    }
    this.root = (tree.length > 0) ? tree[0] : {};
    const _traverseDown = (node, i) => {
      node.level = i + 1;
      for (let n in node.children) {
        _traverseDown(node.children[n], node.level);
      }
    };
    _traverseDown(this.root, -1);
    this.datas = new Map();
    this.datas.set(this.root.id, this.root);
    const _traverseNodes = (roots) => {
      for (let node of roots) {
        this.datas.set(node.id, node);
        if (node.children.length > 0) _traverseNodes(node.children);
      }
    };
    _traverseNodes(this.root.children);
  }
  clickActive (curItem, rootids, isChange) {
    const _traverseDown = (node, curItem) => {
      if (rootids.indexOf(node.id) >= 0) {
        if (!isChange && curItem === curItem.id) {
          node.active = !node.active;
        } else {
          node.active = true;
        }
      } else {
        node.active = false;
      }
      for (var i in node.children) {
        _traverseDown(node.children[i], curItem);
      }
    };
    _traverseDown(this.root, curItem);
    return this.root;
  }
  getNode (key) {
    return this.datas.get(key);
  }
  nodeChildren (node, newChildren) {
    if (!node) {
      return null;
    }
    let key = 'children';
    if (typeof newChildren !== 'undefined') {
      node[key] = newChildren;
    }
    return node[key];
  }
}
