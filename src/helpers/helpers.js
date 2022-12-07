
function toDOM(input) {
    let obj = typeof input === 'string' ? JSON.parse(input) : input;
    let propFix = { for: 'htmlFor', class: 'className' };
    let node;
    let nodeType = obj.nodeType;
    switch (nodeType) {
        // ELEMENT_NODE
        case 1: {
            node = document.createElement(obj.tagName);
            if (obj.attributes) {
                for (let [attrName, value] of obj.attributes) {
                    let propName = propFix[attrName] || attrName;
                    // Note: this will throw if setting the value of an input[type=file]
                    node[propName] = value;
                }
            }
            break;
        }
        // TEXT_NODE
        case 3: {
            return document.createTextNode(obj.nodeValue);
        }
        // COMMENT_NODE
        case 8: {
            return document.createComment(obj.nodeValue);
        }
        // DOCUMENT_FRAGMENT_NODE
        case 11: {
            node = document.createDocumentFragment();
            break;
        }
        default: {
            // Default to an empty fragment node.
            return document.createDocumentFragment();
        }
    }
    if (obj.childNodes && obj.childNodes.length) {
        for (let childNode of obj.childNodes) {
            node.appendChild(toDOM(childNode));
        }
    }
    return node;
}
export default toDOM