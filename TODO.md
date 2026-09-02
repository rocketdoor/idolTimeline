# TODO

- [ ] Debug background: light grey `<rect>` per row (full width, behind bars/text) to help fine-tune y-offsets and alignment
- [x] Bar colors (manual per-group `colors` array in groups.js, rendered as multi-stop linear gradients)
- [ ] Year/month axis (ruler) via d3.axisBottom(xScale)
- [ ] Zoom behavior (d3.zoom()), with axis granularity shifting between day/month/year depending on zoom level
- [ ] Tag-based filtering (type, generation, country, status), OR-within-category / AND-across-category
- [ ] Expand groups.js dataset beyond the current 3 test groups
- [ ] Fine-tune label (`text`) x/y offsets and font-size relative to bar rows
