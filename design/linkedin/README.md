# LinkedIn banner

The profile banner for LinkedIn, in the same style as the site: the red theme, the blueprint grid,
the circuit S logo and the layered system drawing from the home page.

| File | What it is |
| --- | --- |
| `linkedin-banner@2x.png` | 3168 × 792. Upload this one; it stays sharp on high-density screens. |
| `linkedin-banner.png` | 1584 × 396, LinkedIn's recommended size. |
| `linkedin-banner-preview.png` | How the banner sits behind the profile photo. |
| `banner.html` | The source. Edit the text or layout here. |

LinkedIn places the profile photo over the bottom-left corner, so keep that area free of text.

## Re-rendering

Open `banner.html` in Chrome, open DevTools, switch on the device toolbar, set the size to
1584 × 396 (device pixel ratio 2 for the @2x file), and run **Capture screenshot** from the
toolbar's menu. The page loads Space Grotesk and Noto Sans from Google Fonts, so render it while
online.

This folder isn't part of the site: the deploy workflow publishes only `dist/`.
