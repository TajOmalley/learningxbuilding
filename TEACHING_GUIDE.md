# Learning Notes

## Session 1: Project Setup & Starting Point

- **Linking CSS to HTML**: Use `<link>` element in `<head>` section with `rel` and `href` attributes
  - Syntax: `<link rel="stylesheet" href="style.css"/>`
  - `rel="stylesheet"` tells browser this is a stylesheet
  - `href="style.css"` points to the CSS file location
  - Attributes separated by spaces (no commas)
  - Self-closing tag (no closing tag needed)
- CSS files must be linked in HTML for styles to apply

## Session 2: Deploying to GitHub

- **Git Basics**: Version control system that tracks changes in your project
- **GitHub**: Cloud hosting platform for Git repositories
- **Basic Workflow**:
  1. Initialize Git repository (`git init`)
  2. Create `.gitignore` file (optional, but recommended)
  3. Stage files (`git add`)
  4. Commit files (`git commit`)
  5. Create GitHub repository online
  6. Connect local to remote (`git remote add`)
  7. Push to GitHub (`git push`)
- **Key Concepts**:
  - Repository: Project folder tracked by Git
  - Commit: Saved snapshot of code with a message
  - Remote: The GitHub copy of your repository
  - Push: Upload local commits to GitHub
  - Pull: Download changes from GitHub and merge into local codebase
- **Commands**:
  - `git add .` - Stage all files for commit
  - `git commit -m "message"` - Commit with message (use -m to avoid editor)
  - `git remote add origin [url]` - Connect local repo to GitHub
  - `git push -u origin main` - Push commits to GitHub (first time)
  - `git pull` - Download and merge changes from GitHub
  - `git log` - View commit history
  - `git remote -v` - Check if connected to remote repository
  - `git status` - See current state of files
  - `git fetch origin main` - Download changes without merging
  - `git merge origin/main --allow-unrelated-histories -m "message"` - Merge with custom message
- **Merging Unrelated Histories**: When local and remote repos have separate commit histories, use `--allow-unrelated-histories` flag
- **Pull vs Fetch/Merge**: `git pull` = fetch + merge combined. Can split into two steps for more control

## Session 3: Running Localhost

- **Localhost**: Your computer serving the website to itself (only accessible on your machine)
- **Methods to Run Local Server**:
  1. Python: `python -m http.server 8000` → visit `http://localhost:8000`
  2. Node.js: `npx http-server -p 8000` → visit `http://localhost:8000`
  3. VS Code Live Server extension (right-click HTML → "Open with Live Server")
  4. Simple file opening (double-click HTML) - limited functionality
- **Stop Server**: Press `Ctrl + C` in terminal
- **Why Use Localhost**: Properly serves files, allows testing features that don't work with file:// protocol

## Session 4: CSS Basics - Sizing Elements

- **Width & Height Properties**: Control element dimensions
  - `width: 190px;` - Sets horizontal size (how wide)
  - `height: 254px;` - Sets vertical size (how tall)
- **Units of Measurement**:
  - `px` = pixels (fixed size, good for learning)
  - `%` = percentage of parent container (relative to parent element)
  - `vw` = viewport width (1vw = 1% of screen width, relative to browser window)
  - `vh` = viewport height (1vh = 1% of screen height, relative to browser window)
  - `rem`/`em` = relative to font size
- **Percentage vs Viewport Units**:
  - `%` = relative to parent container (if parent is 200px, 50% = 100px)
  - `vw`/`vh` = relative to screen/viewport (50vw = always 50% of screen width, regardless of parent)
- **Common Issue with Percentage Height**: 
  - `height: 50%` requires parent to have defined height
  - If parent has no height, percentage height collapses to 0
  - Solution: Use `vh` (viewport height) instead, or set parent height to 100%
- **Why Elements Disappear**: Very small percentages (like 5%) or collapsed heights make elements too small to see

## Session 5: Centering Elements

- **Horizontal Centering**:
  - `margin: 0 auto;` - Centers block elements horizontally (requires defined width)
  - Works by setting left/right margins to auto, distributing space equally
- **Flexbox Centering** (Modern, Recommended):
  - `display: flex;` on parent container
  - `justify-content: center;` - Centers horizontally
  - `align-items: center;` - Centers vertically
  - Most flexible method for centering
- **Grid Centering**:
  - `display: grid;` on parent
  - `place-items: center;` - Centers both horizontally and vertically
- **When to Use**: 
  - `margin: 0 auto` for simple horizontal centering
  - Flexbox for both horizontal and vertical centering (most common)

## Session 6: Page Background Color

- **Changing Page Background**: Target the `body` element in CSS
- **Property**: `background-color: #color;` or shorthand `background: #color;`
- **Color Formats**:
  - Named colors: `white`, `black`, `blue`, `lightgray`
  - Hex codes: `#ffffff`, `#000000`, `#f0f0f0`
  - RGB: `rgb(255, 255, 255)`
  - RGBA: `rgba(0, 0, 0, 0.1)` (with transparency)
- **Where to Add**: In `body` selector (or `html, body` selector)

## Session 7: Adding Custom Fonts

- **Two Main Methods**:
  1. **Custom Font File**: Download font, store in project, use `@font-face`
  2. **Google Fonts**: Use `<link>` tag in HTML, no files needed
- **Using Custom Font Files**:
  - Store fonts in a `fonts/` folder
  - Define with `@font-face` rule in CSS
  - Syntax: `@font-face { font-family: 'Name'; src: url('path'); }`
  - Apply with `font-family: 'Name', fallback;`
- **Using Google Fonts**:
  - Go to fonts.google.com
  - Select font and copy `<link>` tag
  - Add to HTML `<head>` section
  - Use `font-family: 'FontName', sans-serif;` in CSS
- **Font Formats**: `.woff2` (best), `.woff`, `.ttf`, `.otf`
- **Fallback Fonts**: Always include fallback (e.g., `sans-serif`, `serif`) in case custom font fails to load

## Session 8: Adding Text to Elements

- **Adding Text in HTML**: Place text between opening and closing tags: `<div>Your text here</div>`
- **Applying Fonts**: 
  - Add class to element: `<div class="card font-class">`
  - Or apply directly in CSS: `font-family: "Font Name", sans-serif;`
- **Text Styling Properties**:
  - `font-size: 24px;` - Text size (px, rem, em)
  - `color: #333333;` - Text color
  - `text-align: center;` - Alignment (left, center, right, justify)
  - `font-weight: bold;` - Boldness (normal, bold, 400, 700)
  - `line-height: 1.5;` - Space between lines
- **Spacing**: Use `padding` to add space inside element (between border and content)

## Session 9: Positioning Elements

- **CSS Positioning**: Control where elements appear on the page
- **Position Values**:
  - `position: absolute` - Positioned relative to nearest positioned parent (or body)
  - `position: relative` - Positioned relative to normal position
  - `position: fixed` - Positioned relative to viewport (stays when scrolling)
  - `position: static` - Default, normal document flow
- **Positioning Properties**:
  - `top`, `bottom`, `left`, `right` - Distances from those edges (use with positioned elements)
- **Positioning Context**: 
  - For `absolute` positioning, parent needs `position: relative` to create positioning context
  - Without positioned parent, `absolute` positions relative to body
- **Creating Separate Text Divs**: Add new `<div>` elements in HTML, style with positioning in CSS

## Session 10: Vertical Centering

- **Vertical Centering Methods**:
  1. **Flexbox** (Recommended): `display: flex; align-items: center;` on parent
  2. **Line-height**: `line-height: [same as height];` for single-line text
  3. **CSS Grid**: `display: grid; place-items: center;`
  4. **Padding**: Equal top/bottom padding (less precise)
- **Important**: Element needs defined `height` for vertical centering to work
- **Flexbox Properties**:
  - `align-items: center;` - Centers vertically
  - `justify-content: center;` - Centers horizontally
- **Line-height Method**: Only works well for single-line text, set equal to element height

## Session 11: Positioning Elements Lower on Page

- **Methods to Position Elements Lower**:
  1. **Margin-top**: `margin-top: 100px;` - Pushes element down (simplest, maintains flow)
  2. **Absolute positioning**: `position: absolute; top: 200px;` - Precise placement
  3. **Flexbox on parent**: `display: flex; flex-direction: column; gap: 50px;` - Spacing between elements
  4. **Relative positioning**: `position: relative; top: 100px;` - Moves from normal position
- **Margin Shorthand**: `margin: 100px auto 0 auto;` (top, right, bottom, left)
- **Absolute Positioning Note**: `margin: 0 auto;` doesn't work with absolute positioning, use `left`/`right` instead
- **Flexbox Gap**: `gap` property adds consistent spacing between flex items

## Session 12: Hover Effects and Positioning Context

- **Positioning Context**: When using `position: absolute`, element is positioned relative to nearest positioned ancestor
- **Creating Positioning Context**: Add `position: relative;` to parent to make absolutely positioned children relative to it
- **Hover Transform Issue**: If parent moves with `transform` but child is absolutely positioned relative to body, child won't move with parent
- **Solution**: Make parent `position: relative;` so absolutely positioned children move with parent
- **Transform Property**: `transform: translateY(7px);` moves element without affecting layout flow
- **Transition Property**: `transition: 0.5s;` makes changes animate smoothly

## Session 13: Commenting Code

- **CSS Comments**: Use `/* comment */` to comment out CSS code
  - Single line: `/* property: value; */`
  - Multi-line: `/* line 1 \n line 2 */`
- **HTML Comments**: Use `<!-- comment -->` to comment out HTML code
  - Single line: `<!-- <element>content</element> -->`
  - Multi-line: `<!-- line 1 \n line 2 -->`
- **Keyboard Shortcut**: `Ctrl + /` (Windows) or `Cmd + /` (Mac) toggles comments on selected lines
- **Why Comment**: Temporarily disable code, add notes, debug, keep old code for reference

## Session 14: Adding Images

- **HTML Image Tag**: `<img src="path" alt="description">`
  - `src` attribute: Path to image file (required)
  - `alt` attribute: Alternative text for accessibility (required)
- **Image Organization**: Store images in `images/` folder, reference with `src="images/file.jpg"`
- **Image Paths**:
  - Same folder: `src="image.jpg"`
  - Subfolder: `src="images/image.jpg"`
  - URL: `src="https://example.com/image.jpg"`
- **CSS Image Styling**:
  - `width: 100%;` - Full container width
  - `height: auto;` - Maintains aspect ratio
  - `max-width: 100%;` - Responsive, won't overflow
  - `object-fit: cover;` - Fills container, crops if needed
  - `object-fit: contain;` - Fits entirely, may have empty space
  - `border-radius: 10px;` - Rounded corners
- **Image Formats**: `.jpg`, `.png`, `.gif`, `.svg`, `.webp`
- **Best Practices**: Always include `alt` text, use `height: auto` with width, use `max-width: 100%` for responsiveness

## Session 15: Resizing Images

- **Resizing Methods**:
  1. **Width + Auto Height** (Recommended): `width: 200px; height: auto;` - Maintains aspect ratio
  2. **Fixed Width & Height**: `width: 200px; height: 150px;` - May distort if ratio doesn't match
  3. **Max-Width**: `max-width: 300px; width: 100%;` - Responsive, won't exceed max
  4. **Object-Fit**: `object-fit: cover;` or `contain;` - Controls how image fills fixed container
  5. **Viewport Units**: `width: 20vw;` - Size relative to screen
- **Object-Fit Values**:
  - `cover` - Fills container, crops excess (no empty space)
  - `contain` - Fits entirely, may have empty space
  - `fill` - Stretches to fill (may distort)
- **Best Practice**: Use `width` with `height: auto` to maintain proportions, add `max-width: 100%` to prevent overflow

## Session 16: Centering Images Vertically

- **Flexbox Method** (Recommended): Add `display: flex; align-items: center;` to parent div
  - `align-items: center;` - Centers vertically
  - `justify-content: center;` - Centers horizontally (optional)
- **Absolute Positioning Method**: `position: absolute; top: 50%; transform: translateY(-50%);` on image
- **Line-Height Method**: Works for inline elements, less reliable
- **Best Practice**: Use Flexbox on parent container for most reliable vertical centering

## Session 17: Containing Elements Within Parent

- **Problem**: Using `position: relative` with percentage values positions relative to element itself, not parent
- **Solution 1 - Flexbox** (Recommended): Use `justify-content: space-between;` on flex container to space items
  - Add `padding: 0 2.5%;` to nav for side spacing
  - Remove positioning from child elements, let flexbox handle spacing
- **Solution 2 - Absolute Positioning**: Use `position: absolute` with `right: X%` or `left: X%` relative to positioned parent
  - Parent needs `position: relative` to create positioning context
  - Values are relative to parent, not element itself
- **Solution 3 - Overflow Hidden**: `overflow: hidden;` on parent hides overflow but doesn't fix positioning
- **Key Concept**: Percentage positioning values with `relative` are relative to the element, not the parent
- **Pushing Elements to Right**: Use `margin-left: auto;` on element in flexbox to push it to the right
- **Spacing Between Elements**: Use `margin-right: Xpx;` or `gap: Xpx;` on flex container to space items
- **Flexbox Spacing**: `justify-content: space-between;` spaces items, `margin-left: auto;` pushes specific item to right

## Session 18: Hover Effects on Multiple Elements

- **Styling Multiple Elements**: Use comma-separated selectors: `.class1, .class2, .class3 { }`
- **Hover Pseudo-class**: `:hover` applies styles when element is hovered
- **Hover Effects**:
  - `background-color: #c0c0c0;` - Darkens section
  - `color: #ffffff;` - Brightens text
  - `transform: translateY(-3px);` - Moves element up
- **Smooth Transitions**: `transition: 0.3s;` makes changes animate smoothly
- **Padding for Background**: Add `padding` to text elements so background has space to show
- **Cursor Pointer**: `cursor: pointer;` shows hand cursor on hover
- **Targeting Options**:
  - Individual: `.profile:hover { }`
  - Multiple: `.profile:hover, .passport:hover { }`
  - All children: `.nav-links > div:hover { }`
  - Shared class: `.nav-link:hover { }`
- **Parent Selectors**: Use `:has()` pseudo-class to style parent based on child hover
  - Syntax: `.parent:has(.child:hover) { }` - Styles parent when child is hovered
  - Example: `.nav:has(.profile:hover) { background-color: #c0c0c0; }`
- **Selective Hover Effects**: Change parent background on any child hover, but only change specific child's properties
- **Browser Support**: `:has()` works in modern browsers (Chrome 105+, Firefox 121+, Safari 15.4+)

## Session 19: Multi-Section Pages vs Single-Page Applications

- **Two Approaches**:
  1. **Multi-Page**: Separate HTML files for each section (traditional, simpler but duplicates code)
  2. **Single-Page**: One HTML file, show/hide sections dynamically (modern, aligns with React/Next.js)
- **Single-Page Approach**:
  - Create separate content divs for each section
  - Hide all by default: `display: none;`
  - Show active section: `.active { display: block; }`
  - Use JavaScript to add/remove `active` class on click
- **Why Single-Page**: No page reloads, shared code, aligns with React/Next.js patterns, smoother UX
- **JavaScript for Switching**: Add event listeners to nav links to show/hide sections
- **Future with React/Next.js**: React uses components and routing, Next.js has file-based routing
- **JavaScript Setup**:
  - Create `script.js` file
  - Add `<script src="script.js"></script>` before `</body>` tag
  - Use `DOMContentLoaded` event to wait for page load
- **JavaScript Concepts**:
  - `document.querySelector('.class')` - Find element by class
  - `document.getElementById('id')` - Find element by ID
  - `addEventListener('click', function)` - Listen for clicks
  - `classList.add('class')` - Add CSS class
  - `classList.remove('class')` - Remove CSS class
  - Functions - Organize code into reusable pieces
- **Default Section**: Add `active` class to one section in HTML to show it on page load
- **Hero/Default Content**: Create a hero section that shows on page load, gets hidden when nav links are clicked
- **Function Parameters**: Functions can accept parameters: `function showSection(section) { }` - section is the parameter
- **Common Bugs**: 
  - Forgetting to pass parameter to function
  - Using undefined variable instead of parameter
  - Wrong variable name in event listener (e.g., showing wrong content)

## Session 20: Styling Individual Sections

- **ID vs Class for Styling**:
  - IDs: `#map-content { }` - Unique, use for JavaScript selection
  - Classes: `.map-content { }` - Reusable, better for styling
- **Best Practice**: Use both - ID for JavaScript, class for CSS
- **Adding Classes**: Add class attribute to HTML: `class="content-section map-content"`
- **Multiple Classes**: Elements can have multiple classes: `class="content-section map-content active"`
- **Styling Pattern**: Create specific class for each section (`.map-content`, `.profile-content`, etc.)
- **Organization**: Style each section separately in CSS for better maintainability
- **Container vs Content Structure**:
  - Container (`.editor`) handles: width, height, margin, padding, background, positioning
  - Content sections handle: layout (flex-direction, gap), internal styling
  - Content sections should fill container: `width: 100%; height: 100%;`
- **Common Mistake**: Adding positioning (margin, width, height) to content sections that are inside a positioned container
- **Display Properties**: 
  - Container can be `display: flex` for layout control
  - Content sections use `display: none` (hidden) or `display: flex/block` (active)
- **Making Elements Clickable**: Add `cursor: pointer;` to indicate clickable elements (like logo links)
- **Hero/Default Content**: Hero content shows on page load, disappears when other sections are selected
- **Content Section Structure**: 
  - Container (`.editor`) provides visual styling (background, shadow, border)
  - Content sections (`.hero-content`, `.map-content`) fill container and provide layout
  - Only one section visible at a time via `active` class
- **Testing Navigation**: Click nav links to verify sections switch, click logo to return to hero
- **Conditional Container Styling**: If container (`.editor`) should only show styling when specific content is active:
  - Use JavaScript to add/remove class on container: `editor.classList.add('show-hero')`
  - Or use CSS `:has()` selector: `.editor:has(.hero-content.active) { }`
- **Container Background Issue**: If container always shows background even when content is hidden, make background conditional
- **JavaScript Pattern**: Check which section is active and conditionally style container based on active section

## Session 21: Vertical Layout with Flexbox

- **Vertical Stacking**: Use `flex-direction: column;` to stack flex items vertically
- **Default Flex Direction**: `flex-direction: row;` (horizontal) is default
- **Vertical Spacing**: `gap: 40px;` works with `flex-direction: column` to space items vertically
- **Flexbox Direction Options**:
  - `row` - Horizontal (default)
  - `column` - Vertical (top to bottom)
  - `row-reverse` - Horizontal reversed
  - `column-reverse` - Vertical reversed
- **Spacing Methods**:
  - `gap: 40px;` - Consistent spacing between all items (recommended)
  - `margin-bottom: 20px;` - Individual spacing on each item
- **Nested Flex Containers**: Parent can be `flex-direction: row`, children can be `flex-direction: column`
- **Evenly Distributing Items**:
  - `flex: 1;` on children - Makes items take equal space
  - `gap: 30px;` on parent - Consistent spacing between items
  - `justify-content: space-between;` - Space between items, none on edges
  - `justify-content: space-around;` - Space around each item
  - `justify-content: space-evenly;` - Equal space everywhere
- **Flex Property**: `flex: 1;` makes item flexible and take equal share of available space
- **Removing Fixed Widths**: When using `flex: 1;`, remove fixed `width` properties to allow flex to work
- **Gap vs Justify-Content**: `gap` adds consistent spacing, `justify-content` distributes items with different spacing patterns
- **CSS Specificity**: More specific selectors override general ones
- **Common Issue**: General selector (`.content-section.active`) applies to all sections
  - Solution: Use specific selectors (`.map-content.active`, `.hero-content.active`)
- **Default vs Specific**: Set default in general selector, override with specific selectors
- **Flex Display Inheritance**: If parent has `display: flex`, children become flex items
- **Empty Flex Containers**: Empty flex containers still create layout space
- **CSS Specificity Issue**: More specific selectors override less specific ones
  - `.map-content { display: flex; }` overrides `.content-section { display: none; }`
  - Solution: Make display conditional on `.active` class: `.map-content.active { display: flex; }`
- **Missing Active Rule**: If `.content-section.active` rule is missing, sections won't show when active
- **Display Property Override**: Direct `display` property on class overrides parent's `display: none`
- **Best Practice**: Always make display conditional: `.section.active { display: ...; }` instead of `.section { display: ...; }`
- **Changing Size**: Modify the number values in CSS properties
- **Viewing Changes**: Save CSS file and refresh browser (if using localhost)

