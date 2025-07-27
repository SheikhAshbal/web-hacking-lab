#  NeoVault CTF Lab – Built While Sitting Bored

> “Was bored. Built a mini XSS CTF. Here it is.” – Me, probably

## 💻 What is This?

A small browser-based XSS (Cross-Site Scripting) CTF I made just to kill some time and flex a bit. It goes from super chill to slightly annoying, with levels that mess with your brain in the best way.

Think of this like a lightweight version of XSS Game by Google — but with my own style.

## 🧪 What You'll Learn

If you're new to web security or just wanna sharpen your reflexes, this mini CTF will walk you through:
- Basic XSS injection (classic alert 1 stuff)
- Tag injection (img, svg, etc.)
- Event handler injections (onerror, onclick)
- Bypassing filters
- Sanitization tricks
- Thinking like a bug bounty hunter
- And yes, a “Victory” page at the end 🎉

## 🕹️ Levels Included

| Level   | Focus                       |
|---------|-----------------------------|
| Level 1 | Basic alert payload         |
| Level 2 | Scriptless XSS              |
| Level 3 | Using `img` & `onerror`     |
| Level 4 | SVG trickery                |
| Level 5 | Filter evasion              |
| Level 6 | Filter bypass + flag submit |
| Victory | You made it! 🚀             |

## 📂 Project Structure

```
📁 html/
├── index.html
├── level1.html
├── level2.html
├── ...
├── victory.html

📁 js/
├── level1.js
├── level2.js
├── ...
├── victory.js
├── auth.js

📁 css/
├── level1.css
├── ...
├── victory.css
```

Each level has its own HTML, JS, and CSS. Modular and vibe-checked.

## 🚀 How to Play

1. Clone the repo:
   ```bash
   git clone https://github.com/YOURUSERNAME/xss-boredom-ctf.git
   cd xss-boredom-ctf
   ```

2. Open `html/index.html` in your browser.
3. Try to solve each level and get that sweet flag.
4. Level 6 redirects to victory if you do it right.

## 🤖 Why Did I Make This?

Honestly? I was just bored. Instead of doom-scrolling or staring at VS Code, I decided to build a mini CTF from scratch. Turned out to be kinda fun. Also, good for practice and showing off your DOM-fu.


## ✅ Tech Used

- Vanilla HTML, CSS, JavaScript (no frameworks — pure boredom)
- Browser’s DOM API
- Creativity + Time to kill

## 🔒 DISCLAIMER

This is for **educational purposes** only. Don’t go around popping XSS in the wild unless you’ve got permission. Stay ethical, stay curious.

## 🤝 Contributions?

Nah, it's not that deep. But feel free to fork it or remix it however you like.

---

Made with zero energy but full curiosity. 💻✨
