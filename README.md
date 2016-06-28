# functional-html
functional code for generating html. Uses bootstrap min (linked in html template) for styling.

The html elements are represented as objects with mappings for a label, classes, attributes,
inner content, and child elements. Creation of the elements is up to the user's discretion
on whether or not to use all of the fields, as the naming of the labels is not enforced.

To generate standard html elements, prefix the element name with a '_' and append with (), 
as the elements are returned from functions.
Here is an example of displaying hello world in an h1 using the html library.

<code> var helloworld = withContent(_h1(), 'Hello World'); </code>

<code> document.getElementById(my_destination_element_id).innerHTML = generate(helloworld);</code>

Elements that are Bootstrap-friendly can be built (using 'bs' as the bootstrap library prefix);
they are the classes used in the css styling, so the label gets appended as a class to the div or 
other base html the bootstrap class is desired for.

To put the helloworld variable into a jumbotron object: 

<code> document.getElementById(my_destination_element_id).innerHTML = generate(withChild(_bsJumbotron(), helloworld));</code>


