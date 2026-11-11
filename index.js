import { focusTimerHtml } from './timer-html.js';

export { focusTimerHtml };

/** Embed the self-contained timer without sharing styles or a JavaScript scope. */
export function mountFocusTimer(container, options = {}) {
  const doc = container?.ownerDocument;
  const ElementType = doc?.defaultView?.HTMLElement;
  if (!ElementType || !(container instanceof ElementType)) {
    throw new TypeError('Pass an HTML container element to mountFocusTimer.');
  }
  const { height = 840, title = 'Web Blocker Focus Timer' } = options;
  if (!Number.isFinite(height) || height <= 0) {
    throw new TypeError('height must be a positive number of pixels.');
  }
  if (typeof title !== 'string' || !title.trim()) {
    throw new TypeError('title must be a non-empty string.');
  }

  const iframe = doc.createElement('iframe');
  iframe.title = title;
  iframe.setAttribute('sandbox', 'allow-scripts allow-popups allow-popups-to-escape-sandbox');
  iframe.style.display = 'block';
  iframe.style.width = '100%';
  iframe.style.height = `${height}px`;
  iframe.style.border = '0';
  iframe.srcdoc = focusTimerHtml;
  container.append(iframe);

  let destroyed = false;
  return Object.freeze({
    iframe,
    destroy() {
      if (destroyed) return;
      destroyed = true;
      // Discard the frame document and its timers/audio along with this instance.
      iframe.srcdoc = '';
      iframe.remove();
    }
  });
}
