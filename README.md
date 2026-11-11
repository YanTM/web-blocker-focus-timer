# Web Blocker Focus Timer

A simple timer for 25 minutes of focused work and a 5-minute break. Open it in your browser, start a phase, and pause when you need to.

**[Start the timer](https://yantm.github.io/web-blocker-focus-timer/)** · [Download the ZIP](https://github.com/YanTM/web-blocker-focus-timer/releases/download/v1.0.0/web-blocker-focus-timer-v1.0.0.zip) · [Original Kaggle notebook](https://www.kaggle.com/code/yanlunin/pomodoro-focus-timer-25-5-by-web-blocker)

## Use the timer in your own website

The npm package includes a browser component and a standalone **timer.html** file. There are no runtime dependencies or install scripts. The import below works with a bundler or import map. For native browser modules, use a relative module URL as shown in **examples/embed.html**, served over HTTP(S).

```sh
npm install web-blocker-focus-timer
```

```html
<div id="timer"></div>
```

```js
import { mountFocusTimer } from 'web-blocker-focus-timer';

const timer = mountFocusTimer(document.getElementById('timer'));

// When the page or component no longer needs this instance:
// timer.destroy();
```

The timer uses an isolated iframe, so its styles do not change your page. Start, Pause, Resume and Reset are controlled by the user inside the frame. Each mount is independent; `destroy()` removes only its own frame and can be called more than once. The module is safe to import without a DOM; call `mountFocusTimer` only in the browser after your container exists.

Options: `height` is a positive number of pixels (default **840**); `title` is a non-empty accessible frame title. The frame remains scrollable when its content needs more room.

```js
const timer = mountFocusTimer(document.querySelector('#timer'), {
  height: 900,
  title: 'My work and break timer'
});
```

The full document is also exported as `focusTimerHtml` for your own iframe implementation. The package is ESM; CommonJS `require()` is not a documented entry point. There is no command-line launcher. For personal use, open the **Start the timer** link above or open the included **timer.html** file directly after downloading the package. Those browser and offline routes do not require Node.js.

**[Try the embedded example](https://yantm.github.io/web-blocker-focus-timer/examples/embed.html)** · [npm package](https://www.npmjs.com/package/web-blocker-focus-timer)

Compatibility: the embed uses `srcdoc` with inline JavaScript and styles. Your site's CSP or Trusted Types policy may prevent it from running. It does not bypass those policies. In that case, use the standalone page on a host whose policy permits the timer. Completion sound requires user interaction inside the timer and remains subject to browser audio settings.

## Start in three steps

1. Open the timer and press **Start** for a 25-minute work phase.
2. Press **Pause** to stop the countdown temporarily, then **Resume** to continue.
3. When work ends, the 5-minute break is ready. Press **Start** to begin it. Each following phase also starts manually.

**Reset** stops the timer and restores the full duration of the current phase. It does not skip to the next phase.

Keep the timer page open. Completion updates the message on screen and can play a short sound; sound depends on your browser, audio settings, and whether the page is active.

## What is included

- Fixed 25-minute work and 5-minute break phases.
- Start, Pause, Resume, and Reset controls.
- A countdown, progress ring, and phase-completion message.
- A short completion sound when the browser allows it.
- A single self-contained HTML file with inline styles and JavaScript.

## Use it online or offline

Use the **Start the timer** link above, or download the release ZIP, unzip it, and open **index.html** in a browser with JavaScript enabled.

No build step, Node.js, npm, installation, or account is required. The timer works offline after you have downloaded the file. Opening Web Blocker or the Kaggle notebook requires an internet connection.

## Data and limits

The timer has no session history and does not save its state. Reloading the page starts again at a fresh 25-minute work phase; closing the page ends that timer instance.

The timer does not send session data to a server and contains no analytics code. External links open separate websites.

The timer itself does not block websites. For website blocking, [open Web Blocker](https://webblockerapp.com/?utm_source=github&utm_medium=referral&utm_campaign=wb_pomodoro_lite) and follow its instructions to install and activate the Chrome extension.

## Source and license

The standalone page comes from **Version 1** of the [original Kaggle notebook](https://www.kaggle.com/code/yanlunin/pomodoro-focus-timer-25-5-by-web-blocker), using its saved **focus-timer.html** output. The timer logic and behavior are unchanged. The standalone GitHub page uses `utm_source=github`; the npm HTML and embed use `utm_source=npm` in the Web Blocker referral link. The npm wrapper adds mounting and removal around the original document.

Maintainers: `npm run build` derives the npm HTML and its string module from the public **index.html**. `npm test` checks the packaged source relationship and public entry points; browser verification covers the embed controls and lifecycle. The published archive uses an explicit file allowlist and excludes tests, build scripts and local QA files.

The original Kaggle publication is licensed under **Apache-2.0**. This copy keeps that license; see [LICENSE](LICENSE) and [NOTICE](NOTICE). Brand and trademark permissions are governed by Section 6 of the Apache License, Version 2.0.
