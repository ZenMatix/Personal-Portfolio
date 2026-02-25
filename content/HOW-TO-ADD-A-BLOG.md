# How to add a new blog post

Follow these steps whenever you want to publish a new post.

---

## Step 1: Create a new file

- Open the **`content`** folder in your project.
- Create a new file.
- Name it in **kebab-case** with the **`.mdx`** extension.

**Examples:**
- `my-design-process.mdx` → URL: `/blog/my-design-process`
- `learning-react.mdx` → URL: `/blog/learning-react`
- `trip-to-tokyo.mdx` → URL: `/blog/trip-to-tokyo`

The filename (without `.mdx`) becomes the URL slug. No spaces — use hyphens.

---

## Step 2: Add the frontmatter

At the **very top** of the file, add this block between two lines of `---`:

```yaml
---
title: "Your Post Title Here"
publishedAt: "2025-02-25"
summary: "One or two sentences that describe the post. Shown on the blog list and in search results."
---
```

**Required fields:**
- **title** – The post title (use quotes if it has a colon or special characters).
- **publishedAt** – Date in `YYYY-MM-DD` format.
- **summary** – Short description for the list page and SEO.

**Optional fields** (add if you want):
- **updatedAt** – Same date format, for “last updated.”
- **author** – Your name or pen name.
- **image** – Path to an image, e.g. `"/images/my-post.jpg"`.

---

## Step 3: Write your content

Below the closing `---`, write your post in **Markdown** (or MDX).

**Examples:**

```markdown
# Big heading

## Section heading

Normal paragraph with **bold** and *italic*.

- Bullet one
- Bullet two

1. First step
2. Second step

[Link text](https://example.com)
```

Save the file. The blog will pick it up automatically (you may need to refresh or restart the dev server).

---

## Step 4: Check it on the site

- **Blog list:** Open `/blog` — your new post should appear.
- **Single post:** Open `/blog/your-filename` (the part before `.mdx`).

---

## Full example

File: `content/my-first-post.mdx`

```yaml
---
title: "Why I Started Designing"
publishedAt: "2025-02-25"
author: "Your Name"
summary: "A short story about how I got into design."
---

# Why I Started Designing

Your story goes here...
```

That’s it. One file per post, in `content`, with frontmatter + content.
