# Media

Every image on this site comes from the owner's own photo drop (24 files, received 2026-10-20). No stock, no generated images. Source folder: `Clients/Socrates, Pressure Cleaning/Socrates Website` (read-only; nothing there was moved or renamed).

Processing: HEIC and PNG converted to JPG (`sips`, quality 90), long edge capped at 2400px, then auto-rotated, cropped, and re-encoded with `sharp`, which writes no EXIF, GPS, IPTC or XMP. Confirmed on every kept file: `exif: false, iptc: false, xmp: false`, and `mdls` shows no latitude or camera model.

Every kept photo was cropped below the garage line, because the uncropped frames showed readable house numbers (5430, 2447, 5739, 695, 6484, 3837, 3843) and, in one frame, readable plates on parked cars.

## Classification

| Source | Size (oriented) | What is in it | Class | Kept as | Crop | Reason |
|---|---|---|---|---|---|---|
| IMG_0153.heic | 1800x2400 | Sealed brick paver driveway apron, caution tape, sealer buckets, sidewalk | hero | `hero-pavers-sealed-wide.jpg` 1800x864 | y 50 to 86% | Only usable wide crop at 1800px; rich sealed color. Houses and cars cropped out |
| 1000002017.png | 2007x2400 | Faded paver driveway with a red "Before" label in the corner | before-after (before, pair 1) | `before-pavers-1.jpg` 2007x670 | y 58.5 to 86.4% | Same driveway as IMG_9667. Label cropped out |
| IMG_9667.heic | 1800x2400 | Same paver driveway after sealing, caution tape, open garage, house number | before-after (after, pair 1) | `after-pavers-1.jpg` 1406x469 | garage-bottom band, zoomed to match pair 1 framing | House number and garage interior cropped out |
| IMG_0060.heic | 1800x2400 | Cleaned paver driveway before sealer, house number on garage | before-after (before, pair 2) | `before-pavers-2.jpg` 1800x960 | y 35 to 75% | Same driveway as IMG_0062. House number cropped out |
| IMG_0062.heic | 1800x2400 | Same driveway right after sealing, caution tape | before-after (after, pair 2) | `after-pavers-2.jpg` 1800x960 | y 22 to 62% | House number cropped out |
| IMG_0011.heic | 1800x2400 | Concrete driveway half cleaned, surface cleaner and hose | service: driveway cleaning | `service-driveway-1.jpg` 1800x1584 | y 34 to 100% | Shows the clean line. House number cropped out |
| IMG_0012.heic | 1800x2400 | Clean concrete driveway down to the street | service: driveway cleaning | `service-driveway-2.jpg` 1800x960 | y 40 to 80% | House number cropped out |
| IMG_8181.heic | 1800x2400 | Vinyl siding with green algae and mildew, before a wash | service: house washing | `service-house-washing-1.jpg` 1800x2400 | none | No identifying detail |
| IMG_8183.heic | 1800x2400 | Clean cream vinyl siding and white skirting | service: house washing | `service-house-washing-2.jpg` 1800x2400 | none | No identifying detail |
| IMG_0238.HEIC | 1800x2400 | Paver driveway after cleaning, sealer starting at the curb, open garage | service: paver cleaning and sealing | `service-pavers-1.jpg` 1800x864 | y 52 to 88% | House number and street name plaque cropped out |
| IMG_0260.heic | 1800x2400 | Paver apron mid job with surface cleaner and pump sprayer | service: paver cleaning and sealing | `service-pavers-2.jpg` 1800x720 | y 40 to 70% | House number and a pre-blurred curb patch cropped out |
| IMG_0262.heic | 1800x2400 | Same house as IMG_0260, sealed apron behind caution tape | service: paver cleaning and sealing | `service-pavers-3.jpg` 1800x696 | y 37 to 66% | House number and blurred curb patch cropped out |
| IMG_9974.heic | 1800x2400 | Paver apron partway through sealing | service: paver cleaning and sealing | `service-pavers-4.jpg` 1800x816 | y 48 to 82% | House numbers and a car plate cropped out |
| IMG_9976.heic | 1800x2400 | Same house as IMG_9974, sealed, caution tape, cars in two garages | reject | | | Near duplicate of IMG_9974, and readable plates on two cars; a crop that removes them leaves a thin strip |
| IMG_9605.png | 1109x2400 | Phone screenshot of a text message: customer phone number, three small pool photos, a thank-you note | reject | | | Screenshot, and it shows a customer's phone number. See CLIENT-TODO about the note |
| worship.jpeg | 1920x2400 | Designed graphic: paver driveway under large "BEFORE" lettering | reject | | | Heavy text overlay, no matching after photo, origin unclear |

No logo, decal, shirt, card or yard sign appears in any photo. No crew photos: the only equipment in frame (a surface cleaner, a pump sprayer, hoses) sits inside service photos, and there are no photos of the owner, a truck or a rig. The crew strip is therefore not on the site.

## Before and after pairs

| Pair | Before | After | Same surface? |
|---|---|---|---|
| 1 | `before-pavers-1.jpg` | `after-pavers-1.jpg` | Yes: same house, same straight-on angle from the street; after crop zoomed to match the before framing |
| 2 | `before-pavers-2.jpg` | `after-pavers-2.jpg` | Yes: same driveway (same garage, same apron); pair 2 is cleaned-before-sealer against sealed |

IMG_8181 and IMG_8183 are probably the same house, but they are shot from different angles (head-on against the corner), so they are not used as a slider pair.

## Videos

| Source | Duration | Dimensions | Size | Result |
|---|---|---|---|---|
| IMG_0087.MOV | 27.1s | 1080x1920 | 28.2MB | skipped |
| IMG_0240.MOV | 32.5s | 1080x1920 | 34.5MB | skipped |
| IMG_0288.MOV | 22.9s | 1080x1920 | 24.8MB | skipped |
| IMG_0289.MOV | 26.9s | 1080x1920 | 29.1MB | skipped |
| IMG_0311.MOV | 17.6s | 1080x1920 | 24.4MB | skipped |
| IMG_8644.MOV | 11.4s | 1080x1920 | 12.1MB | skipped |
| IMG_9940.MOV | 20.7s | 1920x1080 | 22.2MB | skipped (the only landscape clip) |
| IMG_9985.MOV | 25.1s | 1080x1920 | 26.7MB | skipped |

ffmpeg is not installed and Homebrew is not installed on this Mac, so nothing could be re-encoded or inspected frame by frame. The rule for that case keeps only videos already in `.mp4` under 10MB; none qualify. No video is on the site and `public/video/` does not exist. To add them later: install ffmpeg, encode per the build prompt (h264, yuv420p, no audio, 1280px long edge, crf 28, faststart, under 8MB), and set `images.heroVideo` or add a section band with `components/SectionVideo.tsx`.

## Logo colors

None. No logo was supplied or found, so the palette is the brief's fallback water palette (see theme.ts).
