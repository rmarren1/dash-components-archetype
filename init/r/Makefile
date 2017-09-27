all: transpile document install

transpile:
	# First install the package skeleton to ensure we have the R pkg dependencies
	R CMD install .
	# Now do the actual transpiling of metadata to an R package
	Rscript -e "writeLines(dashTranspileR::transpile('lib/metadata.json', namespace = '<%= packageNameUnderscored %>')[['text']], 'R/components.R')"

document:
	Rscript -e "devtools::document()"

install:
	R CMD install .

uninstall:
	Rscript -e "utils::remove.packages(read.dcf('DESCRIPTION')[, 'Package']))"
