import time 

GLOBAL_FUNCTION_PREFIX = '_' #change to not copy lodash or something...

def printHeaderString():
	print('/* This file was generated by the generateJSLib.py file  at ' + \
		str(time.strftime("%H:%M:%S")) + \
		' on ' + str(time.strftime("%d/%m/%Y"))  + ' */') 

def functionStringHelper(name, args):
	return ''.join([name, '(', ', '.join(args), ')'])

def functionString(localPrefix, name, args, result):
	return ''.join(['function ', functionStringHelper(GLOBAL_FUNCTION_PREFIX + localPrefix + name, args), '{ return ', result, '; }']);

def generateHtmlDotJs():
	htmlElements = ['a', 'abbr', 'address', 'area', \
	'article', 'aside', 'audio', 'b', 'base', \
	'bdi', 'bdo', 'blockquote', 'body', 'br', \
	'button', 'canvas', 'caption', 'cite', 'code', \
	'col', 'colgroup', 'command', 'datalist', 'dd', \
	'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', \
	'embed', 'fieldset', 'figcaption', 'figure', 'footer'\
	'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head' \
	'header', 'hgroup', 'hr', 'html', 'i', 'iframe', \
	'img', 'input', 'ins', 'kbd', 'keygen', 'label', \
	'legend', 'li', 'link', 'map', 'mark', 'menu', \
	'meta', 'meter', 'nav', 'noscript', 'object', \
	'ol', 'optgroup', 'option', 'output', 'p', 'param' \
	'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', \
	'samp', 'script', 'section', 'select', 'small', \
	'source', 'span', 'strong', 'style', 'sub', \
	'summary', 'sup', 'table', 'tbody', 'td', 'textarea', \
	'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track'\
	'u', 'ul', 'var', 'video', 'wbr']

	printHeaderString()
	
	print functionString('', 'htmlElements', ['name'], functionStringHelper('withLabel', ['emptyElement()', 'name']))

	for elem in htmlElements:
		print functionString('', elem, [], functionStringHelper('_htmlElements', [elem]))

def generateBootstrapDotJs():
	bootstrapFunctionPrefix = 'bs'
	bootstrapDivClasses = ['container', 'container-fluid', 'row', 'pull-right', 'pull-left', \
		'center-block', 'page-footer', 'text-center', 'jumbotron']

	printHeaderString()

	print functionString(bootstrapFunctionPrefix, 'DivMod', ['newClass'], functionStringHelper('withClass', ['_div()', 'newClass']))

	def quoteWrapper(name):
		return '\'' + name + '\''

	def bootstrapNameHelper(name):
		return ''.join([elem[0].upper() + elem[1:] for elem in name.split('-')])

	def bootstrapFunctionString(name):
		return functionString(bootstrapFunctionPrefix, bootstrapNameHelper(name), [], functionStringHelper('_bsDivMod', [quoteWrapper(name)]))

	def bootstrapApplyFunctionString(name):
		return functionString(bootstrapFunctionPrefix, 'Apply' + bootstrapNameHelper(name), ['element'], functionStringHelper('withAnotherClass', ['element', quoteWrapper(name)]))

	for elem in bootstrapDivClasses:
		print bootstrapFunctionString(elem)
		print bootstrapApplyFunctionString(elem)

	for size in ['xs', 'sm', 'md', 'lg']:
		for value in range(0, 12):
			name = 'col-' + size + '-' + str(value)
			print bootstrapFunctionString(name)
			print bootstrapApplyFunctionString(name)

generateBootstrapDotJs()