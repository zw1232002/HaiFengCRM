function setCheckedNodes(values) {
    var tree = mini.get("tree2");
    tree.setValue(values);
}

function getCheckedNodes() {
    var tree = mini.get("tree2");
    var value = tree.getValue();
    alert(value);
} 