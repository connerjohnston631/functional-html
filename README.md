# functional-html
functional code for generating html. Uses bootstrap min (linked in html template) for styling.

The html elements are represented as objects with mappings for a label, classes, attributes,
inner content, and child elements. Creation of the elements is up to the user's discretion
on whether or not to use all of the fields, and the naming of the labels is not enforced.

To create an html tag, we must generate an emtpyElement() as our starting point:

<code>var element = emptyElement();</code>

Once we have this, we can add a label to it:

<code>var h1 = lbl(element, 'h1');</code>

...And some content:

<code>var helloworld = cntnt(h1, 'hello world!');</code>

Once you have build all of your elements, add them to a top element like so:

<code>var top_div = chldrn(lbl(emptyElement(), 'div'), [helloworld]);</code>

...And set the inner html of the desired destination to be the generated html:

<code> document.getElementById(my_destination_element_id).innerHTML = generate(top_div);</code>

This may seem like a lot at first (standard html for the helloworld example would be easier),
but once you create the instances of the h1 element, you can reuse and build upon these 
elements to create more detailed elements
