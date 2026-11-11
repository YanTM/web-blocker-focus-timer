# Web Blocker Focus Timer

A simple timer for 25 minutes of focused work and a 5-minute break. Open it in your browser, start a phase, and pause when you need to.

**[Start the timer](https://yantm.github.io/web-blocker-focus-timer/)** · [Download the ZIP](https://github.com/YanTM/web-blocker-focus-timer/releases/download/v1.0.0/web-blocker-focus-timer-v1.0.0.zip) · [Original Kaggle notebook](https://www.kaggle.com/code/yanlunin/pomodoro-focus-timer-25-5-by-web-blocker)

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

This page comes from **Version 1** of the [original Kaggle notebook](https://www.kaggle.com/code/yanlunin/pomodoro-focus-timer-25-5-by-web-blocker), using its saved **focus-timer.html** output. The timer logic and behavior are unchanged. The Web Blocker link uses GitHub as its referral source instead of Kaggle.

The original Kaggle publication is licensed under **Apache-2.0**. This copy keeps that license; see [LICENSE](LICENSE) and [NOTICE](NOTICE). Brand and trademark permissions are governed by Section 6 of the Apache License, Version 2.0.
