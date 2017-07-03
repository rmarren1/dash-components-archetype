from setuptools import setup

exec (open('<%= packageNameUnderscored %>/version.py').read())

setup(
    name='<%= packageNameUnderscored %>',
    version=__version__,
    author='<%= packageGitHubOrg %>',
    packages=['<%= packageNameUnderscored %>'],
    include_package_data=True,
    license='MIT',
    description='<%= packageDescription || packageNameUnderscored %>',
    install_requires=[]
)
