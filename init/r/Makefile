all: transpile document install

transpile:
	# First install this package so that we have the dependencies
	R CMD install .
	# Then do the actual transpiling
	# TODO: better default for 'name'? 
	Rscript -e "dashTranspileR::transpile('https://unpkg.com/<%= packageName %>/<%= packageNameUnderscored %>/metadata.json', name = '<%= packageNameUnderscored %>')"

document:
	Rscript -e "devtools::document()"

install:
	R CMD install .

uninstall:
	Rscript -e "utils::remove.packages(read.dcf('DESCRIPTION')[, 'Package']))"
