/* This code is used to generate html code from functional javascript */
const LEFT_BRACKET = "<";
const RIGHT_BRACKET = ">";
const SLASH = "/";
const NL = "\n";
const HEADER_LABEL = "head";
const BODY_LABEL = "body";
const DOCTYPE_STR = '<!DOCTYPE html>';
const SPACE = ' ';
const EMPTY_STRING = '';
const QUOTE = '\"';
const EQUALS = '=';
const TAB = '\t';

/* html objects (things surrounded by tags, like a div) will have: 
 * [label, attributes, content list of inner objects]. This quadruple will
 * be referred to as an element. also need to include content in between tags... 
 */
function bracketize(tag){
	return LEFT_BRACKET + tag + RIGHT_BRACKET;
}

function attributeStr(attributes){
	result = EMPTY_STRING;
	for(var attr in attributes){
		result += [SPACE, attr, EQUALS, QUOTE, attributes[attr], QUOTE].join(EMPTY_STRING);
	}
	return result;
}

function contentStr(content){
	return SPACE + content;
}

function openTag(element){
	/* TODO: include attributes and content*/
	return bracketize(element[0] + attributeStr(element[1])) + contentStr(element[2]);
}

function closeTag(element){
	return bracketize(SLASH + element[0]);
}

/* this is the most intense of the functions */
/* do not try to comprehend unless you like nested functions and recursion */
function elementStr(element, tabs){
	function helper(element){
		return elementStr(element, tabs + TAB);
	}
	console.log(element);
	return [tabs, openTag(element), NL, element[3].map(helper).join(EMPTY_STRING), tabs, closeTag(element), NL].join(EMPTY_STRING);
}

/* verifies and packs the info into an element list, functional parallel to object instantiation */
function new_element(label, attributes, content, elements){
	/* add checks for validation here */
	return [label, attributes, content, elements];
}


/* use this function to force convention */
function generate(body_elements){
	return elementStr(new_element('main', {}, EMPTY_STRING, body_elements), EMPTY_STRING);
}
