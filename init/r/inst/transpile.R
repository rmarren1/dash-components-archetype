if (!require(remotes)) install.packages("remotes")
if (!require(dashTranspileR)) remotes::install_github("plotly/dashTranspileR")
if (!require(roxygen2)) install.packages("roxygen2")

md <- dashTranspileR::transpile(
   "lib/metadata.json", namespace = "<%= packageNameUnderscored %>"
)
writeLines(md[['text']], "R/components.R")
