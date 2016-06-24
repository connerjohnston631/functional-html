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

/* these are the functions that generate the various html types. add as needed */
// function h1(content){
// 	return new_element('h1', {}, content, []);
// }

// function h2(content){
// 	return new_element('h2', {}, content, []);
// }

// function h3(content){
// 	return new_element('h3', {}, content, []);
// }

// function h4(content){
// 	return new_element('h4', {}, content, []);
// }

// function h5(content){
// 	return new_element('h5', {}, content, []);
// }

// function h6(content){
// 	return new_element('h6', {}, content, []);
// }

// function p(content){
// 	return new_element('p', {}, content, []);
// }

// function small(content){
// 	return new_element('small', {}, content, []);
// }

// function mark(content){
// 	return new_element('mark', {}, content, []);
// }

// function abbr(content){
// 	return new_element('abbr', {}, content, []);
// }

// function blockquote(content){
// 	return new_element('blockquote', {}, content, []);
// }

// function dl(content){
// 	return new_element('dl', {}, content, []);
// }

// function code(content){
// 	return new_element('code', {}, content, []);
// }

// function kbd(content){
// 	return new_element('kbd', {}, content, []);
// }

// function pre(content){
// 	return new_element('pre', {}, content, []);
// }

// function lnk(url, text){
// 	return new_element('a', {'href': url}, text, []);
// }

// function div(){
// 	return new_element('div', {}, EMPTY_STRING, []);
// }

// function span(){
// 	return new_element('span', {}, EMPTY_STRING, []);
// }

// function tr(){
// 	return new_element('tr', {}, EMPTY_STRING, []);
// }

// function td(){
// 	return new_element('td', {}, EMPTY_STRING, []);
// }

// function table(){
// 	return new_element('table', {}, EMPTY_STRING, []);
// }

// /* layout functions for html5 */
// function header(){
// 	return new_element('header', {}, EMPTY_STRING, []);
// }

// function nav(){
// 	return new_element('nav', {}, EMPTY_STRING, []);
// }

// function section(){
// 	return new_element('section', {}, EMPTY_STRING, []);
// }

// function article(){
// 	return new_element('article', {}, EMPTY_STRING, []);
// }

// function aside(){
// 	return new_element('aside', {}, EMPTY_STRING, []);
// }

// function footer(){
// 	return new_element('footer', {}, EMPTY_STRING, []);
// }

// function details(){
// 	return new_element('details', {}, EMPTY_STRING, []);
// }

// function summary(){
// 	return new_element('summary', {}, EMPTY_STRING, []);
// }

// /* end new html5 layout elements */

// /* bootstrap elements, by classname */
// function jumbotron(){
// 	return add_attributes(div(), {'class': 'jumbotron'});
// }

// function pageHeader(){
// 	return add_attributes(div(), {'class': 'page-header'});
// }

// function pageFooter(){
// 	return add_attributes(div(), {'class': 'page-footer'});
// }

// function container(){
// 	return add_attributes(div(), {'class': 'container'});
// }

// function grid(width, size){
// 	return add_attributes(div(), {'class': 'col-' + size + '-' + width.toString()});
// }

// function smGrid(width){
// 	return grid(width, 'sm');
// }

// function xsGrid(width){
// 	return grid(width, 'xs');
// }

// function mdGrid(width){
// 	return grid(width, 'md');
// }

// function lgGrid(width){
// 	return grid(width, 'lg');
// }

// function row(){
// 	return add_attributes(div(), {'class': 'row'});
// }

// function blockquoteReverse(content){
// 	return add_attributes(blockquote(content), {'class': 'blockquote-reverse'});
// }

// function textCenter(element){
// 	return add_attributes(element, {'class': 'text-center'});
// }

// function glyphcon(glyph){
// 	return add_attributes(span(), {'class': 'glyphcons glyphcons-' + glyph});
// }


