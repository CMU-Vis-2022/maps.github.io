vl.markBar()
  .data(Area)
  .encode(
    vl.y().fieldN("Area_Type").title("Area Type"),
    vl.x().sum("Area").title("Area (sq mi)"),
  )
  .title("Fracking Buffer Area vs. Urban Area Size in PA")
  .render()