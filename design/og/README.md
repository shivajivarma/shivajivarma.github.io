# Link preview image

The image that LinkedIn, X, Slack and other apps show when someone shares a link to the site.
It uses the same style as the LinkedIn banner in `../linkedin/`.

| File | What it is |
| --- | --- |
| `og-image.html` | The source, 1200 × 630. Edit the text or layout here. |
| `../../public/assets/img/og-image.png` | The rendered image the site serves. |

Every page points to it through `og:image`, which X also reads. The posts list it in their
structured data too. `src/utils/schema.ts` holds its URL, size and alt text, so update that file if the
image changes size.

## Re-rendering

Open `og-image.html` in Chrome, open DevTools, switch on the device toolbar, set the size to
1200 × 630 with a device pixel ratio of 1, and run **Capture screenshot** from the toolbar's menu.
Save the result over `public/assets/img/og-image.png`. The page loads its fonts from Google Fonts,
so render it while online.

Shared links are cached. After you replace the image, ask LinkedIn's
[Post Inspector](https://www.linkedin.com/post-inspector/) to fetch the page again.
