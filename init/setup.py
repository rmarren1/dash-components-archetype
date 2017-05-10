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
    install_requires=[
        'dash.ly>=0.15.2,<0.16.0'
    ]
)
