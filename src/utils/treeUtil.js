/*
 * 获子孙树
 * @param   array        data   待分类的数据
 * @param   int/string   pid    待找的父节点
 * @param   boolean   isDrag      是否拖拽
 * @param   boolean   isChecked   默认不勾选
 * V2  解决了没有根rootId的情况排序问题
 */
export default class TreeData {
  constructor (data, pid, isDrag, selectFlag) {
    let tree = [];
    let key = 'id';
    let parentKey = 'parentId';
    let sNodes = data;
    let tmpMap = {};
    for (let i = 0; i < sNodes.length; i++) {
      sNodes[i].visible = true;
      sNodes[i].active = sNodes[i].active || false;  // 单击选中的样式
      sNodes[i].isDrag = isDrag;
      sNodes[i].isChecked = sNodes[i].isChecked || false;
      sNodes[i].open = false;
      sNodes[i].children = [];
      sNodes[i].selectFlag = selectFlag;
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
        'open': true,
        'children': [],
        'isDrag': false,
        'name': ''
      };
      temp.children = tree;
      tree = [temp];
    } else {
      tree[0].open = true;
      tree[0].level = 0;
    }
    this.root = (tree.length > 0) ? tree[0] : {};
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
  clickActive (curItem) {
    const _traverseDown = (node, curItem) => {
      if (node.id === curItem.id) {
        node.active = true;
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
  changeCheckHalfStatus (node, isSync) {
    // 如果勾选的是子节点，父节点默认打上勾
    const _traverseUp = (node, isSync) => {
      if (node.isChecked) { // 打勾
        return this.sameSilibingHalfChecked(true, node.id, node, isSync);
      } else { // 去钩
        return this.sameSilibingHalfChecked(false, node.id, node, isSync);
      }
    };
    return _traverseUp(node, isSync);
  }
  sameSilibingHalfChecked (status, currentId, currentNode) {
    if (status) { // 打钩
      return this.changeSubcheck(currentNode, status);
    } else { // 去钩
      return this.changeSubcheck(currentNode, false); // 改变当前节点及节点下的
    }
  }
  changeSubcheck (node, flag) { // 父及父下的所有子节点的checkbox同步变化
    const _traverseDown = (node, flag) => {
      node.isChecked = flag;
      for (var i in node.children) {
        _traverseDown(node.children[i], flag);
      }
    };
    _traverseDown(node, flag);
    return this.root;
  }
  getNode (key) {
    this.datas = new Map();
    this.datas.set(this.root.id, this.root);
    const _traverseNodes = (roots) => {
      for (let node of roots) {
        this.datas.set(node.id, node);
        if (node.children.length > 0) _traverseNodes(node.children);
      }
    };
    _traverseNodes(this.root.children);
    return this.datas.get(key);
  }
  changeCurrentFaCheck (curNodeId, flag) {
    const _traverseDown = (node, curNodeId, flag) => {
      if (node.id === curNodeId) {
        node.isChecked = flag;
      }
      for (var i in node.children) {
        _traverseDown(node.children[i], curNodeId, flag);
      }
    };
    _traverseDown(this.root, curNodeId, flag);
    return this.root;
  }
  changeCurChecked (curId) {
    const _traverseDown = (node, curId) => {
      if (node.id === curId) {
        node.isChecked = !node.isChecked;
      }
      for (var i in node.children) {
        _traverseDown(node.children[i], curId);
      }
    };
    _traverseDown(this.root, curId);
    return this.root;
  }
  toggleChilds (curId) {
    const _traverseDown = (node, curId) => {
      if (node.id === curId) {
        node.open = !node.open;
      }
      for (var i in node.children) {
        _traverseDown(node.children[i], curId);
      }
    };
    _traverseDown(this.root, curId);
    return this.root;
  }
}
