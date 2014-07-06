DocCollapse
===========

The DocCollapse plugin is a very small, simple plugin that helps collapse large bodies of text (e.g. software documentation) into a manageable, expandable set of nested headers and text.

# Demo #
[theconnman.github.io/DocCollapse](http://theconnman.com/DocCollapse)

# Setup #

To setup DocCollapse download the zip, unpack it, and move jquery.doccollapse.js into a folder in your project. Include the file in a web page and you're ready to use DocCollapse.

# Basic Usage #

Using DocCollapse is very easy. First add the jquery.doccollapse.js to your web page and then begin making your docs. The required format of your docs is as follows.

	<ul id="root">
		<li>
			<h1>Header</h1>
			<p>Content</p>
		</li>
	</ul>

The code block above shows the simplest example of a valid DocCollapse snippet. To initialize this block the following JavaScript would be run.

	$(document).ready(function() {
    	$('#root').docCollapse()
    })

On page load DocCollapse finds the `<ul>` with ID `root`, applies relevant formatting, and cascades down into all enclosed content. The resulting HTML will be a single header with the text `Header` and an arrow to the left of it. This header can then be clicked on to reveal the hidden text `Content`.

# Advanced Usage #

The above example isn't that exciting and rarely would you want to use DocCollapse if you only had on header. The beauty of DocCollapse is that it cascades it's formatting down to each child header. Unordered lists which have the same form as the root unordered list will also open/collapse when clicked on, providing a compact interface for a lot of information. A complex example can be found in the demo folder.

## Anchors ##

Once the content has been compressed it is a little difficult to reference. A link from another page (perhaps to a certain part of the docs with an anchor) would not help much if all the docs contents was compressed. This is where DocCollapse can help.

A URL with an anchor tag appended (think mywebsite.com/docs**#myContent**) where the anchored element in a hidden section will automatically have that element expanded. This means references to specific parts of your documentation will already be expanded when you link to them, saving you the trouble of both having large, unwieldy or compressed, unaccessable docs.

That's about it. I've done the best I can to make sure content that shouldn't be formatted (i.e. unordered lists which don't have child headers) aren't formatted in ways they shouldn't, but please let me know all feedback you have.

## Reserved Tags ##
A reasonable question after seeing how tags such as `<ul>`, `<li>`, and any header tag are transformed is: What happens if I want to use those tags in my content?

The good news is that DocCollapse is smart enough to know when you're using them in content. Imagine using DocCollapse on the code block below.

	<ul id="root">
		<li>
			<h1>Header</h1>
			<p>Content</p>
			<h2>Content Header</h2>
			<ul>
				<li>List</li>
				<li>Within</li>
				<li>Content</li>
			</ul>
		</li>
	</ul>

The block would result in the following page.

![](https://raw.github.com/TheConnMan/DocCollapse/master/demo/Example.png)

DocCollapse manages this by only converting the first header in any list item to a collapsible header. Closing the list item before the second header would trigger a second collapsible header, as seen below.

	<ul id="root">
		<li>
			<h1>Header</h1>
			<p>Content</p>
		</li>
		<li>
			<h2>Content Header</h2>
			<ul>
				<li>List</li>
				<li>Within</li>
				<li>Content</li>
			</ul>
		</li>
	</ul>

![](https://raw.github.com/TheConnMan/DocCollapse/master/demo/Example2.png)

Unordered lists are only changed if they contain headers. Lists whose children have no headers are left alone.

## Options ##

Options are added as easily as passing an object with your options to the docCollapse constructor. Below is an example.

	$('#root').docCollapse({
		margin: 10,
		color: blue
	});

Here is a comprehensive list of available options and their defaults.

- **Margin** [default: 20]
	- Margin added to the left for each additional indentation.
- **Color** [default: black]
	- Color of the SVG arrows.