# Printing Guide

Instructions for creating print-friendly versions of this Bible study guide.

---

## Why Print?

While digital study is convenient, printed materials offer advantages:
- **No distractions** - No notifications or temptations to browse
- **Better retention** - Research shows better comprehension with physical materials
- **Annotation** - Write notes directly on pages
- **Portability** - No battery needed
- **Group distribution** - Easy to share with study groups
- **Offline access** - Study anywhere, anytime

---

## What to Print

### **Option 1: Individual Books (Recommended for Personal Study)**
Print only the books you're currently studying:
- More portable
- Less overwhelming
- Can update sections without reprinting everything
- Lower cost

**Suggested combinations:**
- Print one book at a time
- Print by section (Pentateuch, Gospels, Paul's letters, etc.)
- Print books for a reading plan

### **Option 2: Quick Reference Tables Only**
The most compact option:
- `quick-reference/old-testament-overview.md` (2-3 pages)
- `quick-reference/new-testament-overview.md` (1-2 pages)
- `timeline.md` (8-10 pages)

**Total: 11-15 pages** - Perfect for a booklet!

### **Option 3: Complete Study Guide**
Print the entire guide:
- All 66 books
- Quick reference tables
- Indexes and timelines
- **Total: 300-400+ pages**

**Best for:**
- Teachers
- Small group leaders
- Those wanting a complete reference

### **Option 4: Custom Selection**
Mix and match based on your needs:
- All Old Testament OR all New Testament
- Specific book categories (Historical books, Prophets, Gospels, etc.)
- Reference materials only (indexes, timeline, character guide)

---

## How to Generate PDFs from Markdown

### **Method 1: Using Pandoc (Recommended)**

**Install Pandoc:**
- Download from: https://pandoc.org/installing.html
- Available for Windows, Mac, Linux

**Convert Markdown to PDF:**
```bash
# Single file
pandoc old-testament/01-genesis.md -o genesis.pdf

# Multiple files into one PDF
pandoc old-testament/*.md -o old-testament.pdf

# With custom styling
pandoc genesis.md -o genesis.pdf --pdf-engine=xelatex -V geometry:margin=1in
```

**Tips:**
- Use `-V geometry:margin=1in` for 1-inch margins
- Use `-V fontsize=11pt` or `-V fontsize=12pt` for larger text
- Use `--toc` to add table of contents

### **Method 2: Using VS Code + Extension**

**Steps:**
1. Install **Visual Studio Code** (free)
2. Install extension: **Markdown PDF** by yzane
3. Open any .md file
4. Right-click → "Markdown PDF: Export (pdf)"

**Pros:** Simple, one-click solution
**Cons:** Less customization than Pandoc

### **Method 3: Using Markdown to PDF Online Converters**

**Free websites:**
- https://www.markdowntopdf.com/
- https://md2pdf.netlify.app/
- https://www.markdowntopdf.com/

**Steps:**
1. Copy markdown content
2. Paste into converter
3. Download PDF

**Pros:** No installation required
**Cons:** One file at a time, less control

### **Method 4: Print from Browser**

**Steps:**
1. View markdown file on GitHub or in browser
2. Use browser's print function (Ctrl/Cmd + P)
3. Choose "Save as PDF"

**Pros:** Works anywhere, no tools needed
**Cons:** Formatting may not be optimal

### **Method 5: Using Obsidian or Typora**

**Obsidian:**
- Free markdown editor
- Install "Pandoc Plugin"
- Export to PDF

**Typora:**
- Markdown editor ($14.99 one-time purchase)
- Built-in PDF export
- Excellent formatting control

---

## Recommended Print Settings

### **For Individual Book Guides:**
- **Paper:** Letter size (8.5" x 11") or A4
- **Orientation:** Portrait
- **Margins:** 0.75" to 1" on all sides
- **Font size:** 11pt or 12pt
- **Line spacing:** 1.15 or 1.5
- **Color:** Black & white (to save ink)
- **Duplex:** Print both sides to save paper

### **For Quick Reference Tables:**
- **Paper:** Letter size
- **Orientation:** Landscape (for tables)
- **Margins:** 0.5" on all sides
- **Font size:** 10pt or 11pt
- **Color:** Black & white
- **Duplex:** Single-sided for reference sheets

### **For Complete Guide:**
- **Paper:** Letter or A4
- **Binding:** 3-ring binder or comb binding
- **Sections:** Use dividers for Old Testament, New Testament, Reference
- **Cover page:** Create a title page
- **Index:** Print and include at beginning

---

## Cost-Saving Tips

1. **Print selectively** - Only print what you need right now
2. **Use both sides** (duplex printing) - Cuts paper use in half
3. **Black & white only** - Color ink is expensive
4. **Draft mode** - Use printer's economy/draft mode
5. **Smaller margins** - 0.5" margins instead of 1" saves pages
6. **Multiple pages per sheet** - Print 2 pages on 1 sheet (requires good eyesight)
7. **Share printing costs** - Split cost with study group
8. **Use library or office printer** - May be cheaper than home printing

**Estimated costs** (at $0.05/page for black & white):
- Single book: $0.50 - $1.50
- Quick reference: $0.60 - $0.75
- Complete guide: $15 - $20

---

## Binding Options

### **For Short Documents (1-20 pages):**
- **Staple** in corner - Free, simple
- **Binder clip** - Removable, reusable
- **Folder with brads** - Professional look

### **For Medium Documents (20-100 pages):**
- **3-ring binder** - Add/remove pages easily
- **Spring clips** - Sturdy, reusable
- **Folder with pocket** - Keep loose pages organized

### **For Large Documents (100+ pages):**
- **Large 3-ring binder** with dividers
- **Comb binding** - Office supply stores ($3-5)
- **Spiral binding** - Professional ($5-10)
- **Thermal binding** - Very professional ($10-15)

**Pro tip:** Use colored dividers to separate:
- Old Testament
- New Testament
- Reference materials (indexes, timeline)

---

## Creating a Custom Printed Study Bible

**Build your own annotated Bible study companion:**

1. **Print the books you want**
2. **Leave wide margins** (1.5" or more on one side)
3. **Punch holes on the side with large margin**
4. **Put in 3-ring binder**
5. **Add your Bible** (if it has a binder edition)
6. **Alternate pages:** Bible text, study guide, Bible text, study guide

**Result:** A personalized study Bible with notes integrated!

---

## Formatting Tips for Better Printing

### **Before Converting to PDF:**

**In the markdown files, you may want to:**
1. **Remove excessive navigation links** (they don't work in print)
2. **Add page breaks** where needed:
   ```markdown
   <div style="page-break-after: always;"></div>
   ```
3. **Ensure tables fit on page** (may need to abbreviate)

### **Using CSS for Better Print Formatting:**

Create a file `print-styles.css`:
```css
@media print {
  body {
    font-size: 12pt;
    line-height: 1.5;
    margin: 1in;
  }

  h1 {
    page-break-before: always;
    page-break-after: avoid;
  }

  h2, h3 {
    page-break-after: avoid;
  }

  table {
    page-break-inside: avoid;
  }

  a {
    color: black;
    text-decoration: none;
  }
}
```

Then use with Pandoc:
```bash
pandoc file.md -o file.pdf --css=print-styles.css
```

---

## Printing from GitHub

If this guide is on GitHub:

1. Navigate to the file on GitHub
2. Click "Raw" button (top right)
3. Copy the URL
4. Use Pandoc: `pandoc [URL] -o output.pdf`

Or use GitHub's built-in print:
1. View file on GitHub
2. Press Ctrl/Cmd + P
3. Save as PDF

---

## Pre-Made PDF Collections (If Available)

Check the repository for pre-generated PDFs in a `pdfs/` folder:
- ✅ All books (one PDF per book)
- ✅ Quick reference sheets
- ✅ Complete guide PDF
- ✅ Old Testament only
- ✅ New Testament only

If PDFs aren't available, request them or use the methods above to create your own!

---

## Recommended Page Layout

```
┌─────────────────────────────┐
│                             │
│  [Book Title]               │
│                             │
│  [One-Sentence Summary]     │
│                             │
│  [Book Overview]            │
│  Author:...                 │
│  Date:...                   │
│                             │
│  [Book Structure]           │
│  Part 1: ...                │
│  Part 2: ...                │
│                             │
│  [Key Verses]               │
│  Verse 1...                 │
│                             │
│  [Key Themes]               │
│  1. Theme...                │
│  2. Theme...                │
│                             │
│  [Central Message]          │
│  ...                        │
│                             │
│  [Practical Application]    │
│  - For Daily Living         │
│  - For Spiritual Growth     │
│                             │
│  [Recommended Resources]    │
│  ...                        │
│                             │
└─────────────────────────────┘
```

Each book fits approximately **3-5 pages** when printed with standard formatting.

---

## Sample Pandoc Commands

**Basic conversion:**
```bash
pandoc old-testament/01-genesis.md -o genesis.pdf
```

**With nice formatting:**
```bash
pandoc old-testament/01-genesis.md -o genesis.pdf \
  --pdf-engine=xelatex \
  -V geometry:margin=1in \
  -V fontsize=12pt \
  -V linestretch=1.3
```

**Combine multiple files:**
```bash
pandoc old-testament/01-genesis.md old-testament/02-exodus.md -o pentateuch.pdf
```

**All Old Testament:**
```bash
pandoc old-testament/*.md -o old-testament-complete.pdf \
  --toc \
  --toc-depth=2 \
  -V geometry:margin=0.75in
```

**All New Testament:**
```bash
pandoc new-testament/*.md -o new-testament-complete.pdf \
  --toc \
  --toc-depth=2
```

**Complete guide with table of contents:**
```bash
pandoc README.md old-testament/*.md new-testament/*.md -o complete-guide.pdf \
  --toc \
  --toc-depth=3 \
  -V geometry:margin=0.75in \
  -V fontsize=11pt
```

---

## Troubleshooting

**Problem:** Tables don't fit on page
**Solution:** Use landscape orientation or abbreviate column content

**Problem:** Links don't work in PDF
**Solution:** That's normal - links don't function in print

**Problem:** Pandoc not found
**Solution:** Make sure Pandoc is installed and in your PATH

**Problem:** Fonts look wrong
**Solution:** Try different PDF engine: `--pdf-engine=pdflatex` or `xelatex`

**Problem:** Page breaks in weird places
**Solution:** Add manual page breaks or adjust margins

---

## For Study Groups

**Creating handouts for your group:**

1. **Print Quick Reference tables** - One per person as overview
2. **Print current book being studied** - Everyone has the same material
3. **Leave margin space** - For note-taking during discussion
4. **Add discussion questions** (see each book's guide)
5. **Include key verses** - Highlighted for quick reference

**Group printing options:**
- One person prints, group reimburses
- Each person prints their own
- Church/group provides printing
- Use online printing service (Vistaprint, FedEx Office)

---

## Digital Alternatives to Printing

If you prefer digital but want print-like benefits:

1. **Tablet/iPad** - Read PDFs, annotate with stylus
2. **E-reader** (Kindle, Kobo) - Some support PDFs
3. **Printed summaries only** - Keep full guide digital
4. **Both** - Print summaries, keep detailed guide on device

---

[← Back to Main Guide](../README.md) | [Quick Reference](../quick-reference/README.md)
