Project02: The Dynamic Web
Ellen Gee

For this project, I made a more advanced personal website.
I developed this website on a 13" Macbook Pro, and used Google Chrome to view it.
I have outlined my work below so you might find things more easily.

There are 6 HTML pages:
- index.html serves as the home page
- about.html has more information on me
- creative.html has some of my photography and videography work
- travel.html has a travel bucket list
- portfolio.html has computer science and marketing projects I've worked on
- contact.html has a form to get in contact with me

These pages all have a common frame which consists of:
- the same <head> contents
  - excluding the differing .css file names
  - including a favicon that I had designed for a different project
- an <h1> element serving as the website heading
  - uses font-family, font-size, text-align, text-transform, and letter-spacing
- a navigation bar created with a <div>
  - the background-color was set to steelblue
  - links were styled
    - uses float, color, text-align, padding, text-decoration, and font-size
  - the background-color and text color changed for hover and active
- a profile picture that has a fixed position in the top right side of the pages
- a footer at the bottom of the pages
  - has a fixed position
  - background-image is a linear-gradient
  - includes images as links to my social media

index.html
Has a slideshow of photos that automatically cycles and switches every 3 seconds.
This was done with a JavaScript function I called photoCycle().
To ensure correct sizing, CSS was used to set  a width of 100% for the images in the slideshow.

about.html
Has a flexbox that contains 4 photos, each representing a category.
Beneath that is a table containing details about each category.

creative.html
Has two tabs under the top navigation bar.
The tabs display different content depending on JavaScript function called openMedium().
It defaults to the photography tab, which shows some photos I've taken.
The width of the photos are set using a JavaScript function called photoSizing().
Additionally to style the polaroid photos I took, I used CSS to add a border around them.
The other tab is for videography.
Using the <iframe> element, I embedded YouTube videos I have made.

travel.html
Has a <div> called bucketList, which contains text elements.
The CSS set the background-image to a piece of paper, and made the font Comic Sans.
I also set the padding to make it look how I wanted it to on my machine and browser.

portfolio.html
Has a flexbox with two <div> elements in it.
One for Computer Science, and another for Marketing.
Different projects I have worked on are described within whichever category they belong.

contact.html
Has a form so people can submit their information to get in contact with me.
The form utilizes <fieldset>, <optgroup>, and multiple different input types.
There is also JavaScript that sends an alert when the form is submitted.

I believe I have displayed numerous meaningful uses of HTML, CSS, and JavaScript.
