if (!require(dashTranspileR)) remotes::install_github("plotly/dashTranspileR")

library(dashTranspileR)
md <- transpile(
   "lib/metadata.json", namespace = "<%= packageNameUnderscored %>"
)
transpile_write(md)
