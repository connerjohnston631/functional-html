/* verifies and packs the info into an element list, functional parallel to object instantiation */
const label = 'label';
const classes = 'classes';
const attributes = 'attributes';
const content = 'content';
const children = 'children';

function emptyElement(){
	/* add checks for validation here */
	return {label: EMPTY_STRING, classes: [], attributes: {}, content: EMPTY_STRING, children: []};
}

function withLabel(element, str){
	return {label: str, classes: element[classes], attributes: element[attributes], content: element[content], children: element[children]};
}

function withClass(element, clsss){
	return {label: element[label], classes: clsss, attributes: element[attributes], content: element[content], children: element[children]};
}

function withContent(element, cont){
	return {label: element[label], classes: element[classes], attributes: element[attributes], content: cont, children: element[children]};
}

function withAttributes(element, attrs){
	return {label: element[label], classes: element[classes], attributes: attrs, content: element[content], children: element[children]};
}

function withChildren(element, child_elements){
	return {label: element[label], classes: element[classes], attributes: element[attributes], content: element[content], children: child_elements};
}

function withMoreAttributes(element, attributes){
	var new_attributes = element[attributes];
	for(var attr in attributes){
		new_attributes[attr] = attributes[attr];
	}
	return withAttributes(element, new_attributes);
}

function withMoreClasses(element, clsss){
	return withClass(element, element[classes].concat(clsss));
}

function withMoreChildren(element, elements){
	return withChildren(element, element[children].concat(elements)); 
}
