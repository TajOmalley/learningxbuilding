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
- **Changing Size**: Modify the number values in CSS properties
- **Viewing Changes**: Save CSS file and refresh browser (if using localhost)

