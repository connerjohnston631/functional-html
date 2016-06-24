/* verifies and packs the info into an element list, functional parallel to object instantiation */
const label = 'label';
const classes = 'classes';
const attributes = 'attributes';
const content = 'content';
const children = 'children';

function emptyElement(){
	/* add checks for validation here */
	return {label: '', classes: [], attributes: {}, content: '', children: []};
}

function lbl(element, str){
	return {label: str, classes: element[classes], attributes: element[attributes], content: element[content], children: element[children]};
}

function clss(element, clsss){
	return {label: element[label], classes: clsss, attributes: element[attributes], content: element[content], children: element[children]};
}

function cntnt(element, cont){
	return {label: element[label], classes: element[classes], attributes: element[attributes], content: cont, children: element[children]};
}

function attrbts(element, attrs){
	return {label: element[label], classes: element[classes], attributes: attrs, content: element[content], children: element[children]};
}

function chldrn(element, child_elements){
	return {label: element[label], classes: element[classes], attributes: element[attributes], content: element[content], children: child_elements};
}

function add_attributes(element, attributes){
	var new_attributes = element[attributes];
	for(var attr in attributes){
		new_attributes[attr] = attributes[attr];
	}
	return attrbts(element, new_attributes);
}

function add_classes(element, clsss){
	return clss(element, element[classes].concat(clsss));
}

function add_children(element, elements){
	return chldrn(element, element[children].concat(elements)); 
}
