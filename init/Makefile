all: transpile document install

transpile:
	Rscript inst/transpile.R

document:
	Rscript -e "roxygen2::roxygenize()"

install:
	R CMD install .

clean:
	rm NAMESPACE
	rm -r man/

uninstall:
	Rscript -e "utils::remove.packages(read.dcf('DESCRIPTION')[, 'Package']))"
