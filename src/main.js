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
 * [label, attributes, content, list of inner objects]. This quadruple will
 * be referred to as an element. also need to include content in between tags... 
 */
function bracketize(tag){
	return LEFT_BRACKET + tag + RIGHT_BRACKET;
}

function attributeStr(attributes){
	result = EMPTY_STRING;
	for(var attr in attributes){result = result.concat([SPACE, attr, EQUALS, QUOTE, attributes[attr], QUOTE].join(EMPTY_STRING));}
	return result;
}

function openTag(element){
	/* TODO: include attributes and content*/
	return bracketize(element[0] + attributeStr(element[1])) + element[2];
}

function closeTag(element){
	return bracketize(SLASH + element[0]);
}

/* this is the most intense of the functions */
/* do not touch unless you like recursion */
/* possibly include a check for depth */
function elementStr(element, tabs){
	
	function helper(element){
		return elementStr(element, tabs + TAB);
	}
	return [tabs, openTag(element), NL, element[3].map(helper).join(EMPTY_STRING), tabs, closeTag(element), NL].join(EMPTY_STRING);
}

/* use this as generation function for a single top element */
function generate(top_element){
	return elementStr(top_element, EMPTY_STRING);
}
