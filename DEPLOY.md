# Deployment Instructions for GitHub Pages

1. Create a new repository on GitHub named `yourusername.github.io` (replace `yourusername` with your actual GitHub username).
2. Copy all files and folders from the `site` directory into the root of your new repository.
3. Commit and push the files to GitHub:
   - Open a terminal in the `site` directory.
   - Run the following commands:
     ```sh
     git init
     git remote add origin https://github.com/yourusername/yourusername.github.io.git
     git add .
     git commit -m "Initial commit: Academic personal website"
     git push -u origin master
     ```
4. Visit `https://yourusername.github.io` to see your website live.

---

**Note:**
- Replace `yourusername` with your actual GitHub username in all steps above.
- If you already have a `yourusername.github.io` repository, you can overwrite its contents with the new site files.
- For updates, simply edit your files, commit, and push again.
