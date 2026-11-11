export interface FocusTimerOptions {
  /** Frame height in pixels. Default: 840. Content can scroll. */
  height?: number;
  /** Accessible iframe title. Default: Web Blocker Focus Timer. */
  title?: string;
}

export interface FocusTimerEmbed {
  readonly iframe: HTMLIFrameElement;
  /** Remove this instance. Repeated calls are safe. */
  destroy(): void;
}

/** Full standalone HTML document, including inline styles and script. */
export const focusTimerHtml: string;

/** Browser-only mount; importing the module itself does not require a DOM. */
export function mountFocusTimer(container: HTMLElement, options?: FocusTimerOptions): FocusTimerEmbed;
