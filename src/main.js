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
const CLASS = 'class';


/* html objects (things surrounded by tags, like a div) will have: 
 * {label, classes, attributes, content, list of inner objects}. This will
 * be referred to as an element. also need to include content in between tags... 
 */
function bracketize(tag){
	return LEFT_BRACKET + tag + RIGHT_BRACKET;
}

function classStr(classes){
	return classes.length == 0 ? EMPTY_STRING : [SPACE, CLASS, EQUALS, QUOTE, classes.join(SPACE), QUOTE].join(EMPTY_STRING);
}

function attributeStr(element){
	result = EMPTY_STRING;
	for(var attr in element[attributes]){result = result.concat([SPACE, attr, EQUALS, QUOTE, element[attributes][attr], QUOTE].join(EMPTY_STRING));}
	return classStr(element[classes]) + result;
}

function openTag(element){
	/* TODO: include attributes and content*/
	return bracketize(element[label] + attributeStr(element)) + element[content];
}

function closeTag(element){
	return bracketize(SLASH + element[label]);
}

/* this is the most intense of the functions */
/* do not touch unless you like recursion */
/* possibly include a check for depth */
function elementStr(element, tabs){	
	function helper(element){ return elementStr(element, tabs + TAB); }
	return [tabs, openTag(element), NL, element[children].map(helper).join(EMPTY_STRING), tabs, closeTag(element), NL].join(EMPTY_STRING);
}

/* use this as generation function for a single top element */
function generate(top_element){
	return elementStr(top_element, EMPTY_STRING);
}
