all: transpile document install

transpile:
	# First install this package so that we have the dependencies
	R CMD install .
	# Then do the actual transpiling
	Rscript -e "dashTranspileR::transpile('lib/metadata.json')"

document:
	Rscript -e "devtools::document()"

install:
	R CMD install .

uninstall:
	Rscript -e "utils::remove.packages(read.dcf('DESCRIPTION')[, 'Package']))"
