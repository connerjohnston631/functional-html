/* This code is used to generate html code from functional javascript */
const LEFT_BRACKET = '<';
const RIGHT_BRACKET = '>';
const SLASH = '/';
const NL = '\n';
const SPACE = ' ';
const EMPTY_STRING = '';
const QUOTE = '\"';
const EQUALS = '=';
const TAB = '\t';
const COLON = ':';
const SEMICOLON = ';';

const CLASS = 'class';
const ID = 'id';
const STYLE = 'style';
const IMPORTANT = '!important';

function attributeStr(element){ 
	result = EMPTY_STRING;
	for(var attr in element[attributes]){result = result.concat(strHelper(attr, element[attributes][attr]));}
	return [idStr(element[id]), classStr(element[classes]), styleStr(element[style]), result].join(EMPTY_STRING);
}

/* this is the most intense of the functions */
/* do not touch unless you like recursion */
/* possibly include a check for depth */
function elementStr(element, tabs){	
	function helper(element){ return elementStr(element, tabs + TAB); }
	return [tabs, openTag(element), NL, element[children].map(helper).join(EMPTY_STRING), tabs, closeTag(element), NL].join(EMPTY_STRING);
}

function styleStr(styles){
	function helper(styles){
		var result = EMPTY_STRING;
		for(elem in styles){result = result.concat([elem, SPACE, COLON, SPACE, styles[elem], SPACE, IMPORTANT, SEMICOLON, SPACE].join(EMPTY_STRING)); }
		return result;
	}
	return Object.keys(styles).length == 0 ? EMPTY_STRING : strHelper(STYLE, helper(styles));
}

/* html objects (things surrounded by tags, like a div) will have: 
 * {label, classes, attributes, content, list of inner objects}. This will
 * be referred to as an element. also need to include content in between tags... 
 */
function bracketize(tag){ return [LEFT_BRACKET, tag, RIGHT_BRACKET].join(EMPTY_STRING); }
function strHelper(str1, str2){	return [SPACE, str1, EQUALS, QUOTE, str2, QUOTE].join(EMPTY_STRING); }
function classStr(classes){	return classes.length == 0 ? EMPTY_STRING : strHelper(CLASS, classes.join(SPACE)); }
function idStr(id){	return strHelper(ID, id); }
function openTag(element){ return bracketize(element[label] + attributeStr(element)) + element[content]; }
function closeTag(element){ return bracketize(SLASH + element[label]); }
function generate(top_element){ return elementStr(top_element, EMPTY_STRING); }
