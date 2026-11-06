# kevinsteinke.com

My personal site and blog, built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages.
Each push to `master` rebuilds the site automatically. You don't have to install anything.

## Adding content

### Write a new blog post
1. On GitHub, open the `_posts` folder and click **Add file → Create new file**.
2. Name it `YYYY-MM-DD-short-title.md`, for example `2026-11-06-my-new-post.md`.
3. Paste this at the top, then write in Markdown below it:

   ```markdown
   ---
   title: My New Post Title
   description: Optional one-line summary for the card.
   tags: [optional, tags]
   image: /images/optional-cover.jpg
   ---

   Your post starts here...
   ```
4. Commit. The post appears on the home page and the Blog page within a minute or two.

Only `title` is required. `_drafts/post-template.md` has a copy-and-paste starter.
Files in `_drafts/` are not published.

### Add images
Upload them to the `images/` folder, then use `![Alt text](/images/file.jpg)` in a post.

### Embed something (video, app, etc.)
Wrap the iframe so it resizes on phones:

```html
<div class="embed"><iframe src="https://www.youtube.com/embed/VIDEO_ID" title="Video"></iframe></div>
```

### Edit the home page
Open `index.md`:
- **Bio:** edit the text under the second `---`.
- **"What I'm into" cards, favorites and the verse:** edit the lists at the top. Copy an existing item to add a new one.
  Icons available: `code`, `database`, `web`, `terminal`, `book`, `film`, `music`, `star`.

### Add a new page
Create `my-page.md` in the root folder:

```markdown
---
title: My Page
permalink: /my-page/
---
Content here...
```

To show it in the top menu, add it to `_data/navigation.yml`.

### Change name, tagline, photo, social links
All of these are in `_config.yml`. Leave a social link blank to hide it.

### Change colors
The colors are the variables at the top of `style.scss` (`--accent`, `--warm`, etc.).

## Preview locally (optional)

```bash
gem install github-pages webrick
github-pages build && jekyll serve
```
