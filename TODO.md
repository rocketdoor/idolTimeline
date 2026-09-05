# TODO

- [ ] Debug background: light grey `<rect>` per row (full width, behind bars/text) to help fine-tune y-offsets and alignment
- [x] Bar colors (manual per-group `colors` array in groups.js, rendered as multi-stop linear gradients)
- [x] Year/month axis (ruler) via d3.axisBottom(xScale), sticky at top of page, scroll-synced with the chart
- [ ] Vertical gridlines in #chart at each xScale.ticks() position, so dates can be traced visually through all rows
- [ ] Zoom behavior (d3.zoom()), with axis granularity shifting between day/month/year depending on zoom level
- [ ] Tag-based filtering (type, generation, country, status), OR-within-category / AND-across-category
- [x] Expand groups.js dataset beyond the current 3 test groups (16 SM Entertainment groups so far)
- [ ] Fine-tune label (`text`) x/y offsets and font-size relative to bar rows
