/* verifies and packs the info into an element list, functional parallel to object instantiation */
const label = 'label';
const classes = 'classes';
const attributes = 'attributes';
const content = 'content';
const children = 'children';
const id_prefix = 'element_id_';
const id = 'id';
const style = 'style';

var current_id = 0;

function nextId(){ return id_prefix + (current_id++).toString(); }

function mergeObjects(obj1, obj2){
	var result_obj = {};
	for(var elem in obj1){ result_obj[elem] = obj1[elem]; }
	for(var elem in obj2){ result_obj[elem] = obj2[elem]; }
	return result_obj;
}

function updateElement(obj1, obj2){	return mergeObjects(mergeObjects(obj1, obj2), {id : nextId()}); }
function emptyElement(){ return {label: EMPTY_STRING, classes: [], attributes: {}, content: EMPTY_STRING, children: [], id: nextId(), style: {}}; }
function withLabel(element, str){ return updateElement(element, {label: str}); }
function withClasses(element, clsss){ return updateElement(element, {classes: clsss}); }
function withContent(element, cont){ return updateElement(element, {content: cont}); }
function withAttributes(element, attrs){ return updateElement(element, {attributes: attrs}); }
function withChildren(element, childElements){ return updateElement(element, {children: childElements}); }
function withClass(element, clss){ return withClasses(element, [clss]); }
function withChild(element, childElement){ return withChildren(element, [childElement]); }
function withMoreAttributes(element, attributes){ return withAttributes(element, mergeObjects(element[attributes], attributes)); }
function withMoreClasses(element, clsss){ return withClass(element, element[classes].concat(clsss)); }
function withAnotherClass(element, clss){ return withMoreClasses(element, [clss]); }
function withMoreChildren(element, childElements){ return withChildren(element, element[children].concat(childElements)); }
function withAnotherChild(element, childElement){ return withMoreChildren(element, [childElement]); }
function withStyles(element, styles){ return updateElement(element, {style: styles}); }
function withMoreStyles(element, styles){ return withStyles(element, mergeObjects(element[style], styles)); }
function getId(element){ return element[id]; }