from setuptools import setup

setup(
    name='<%= packageNameUnderscored %>',
    version='0.0.1',
    author='<%= packageGitHubOrg %>',
    packages=['dash', 'dash/development'],
    license='MIT',
    description='<%= packageDescription || packageNameUnderscored %>',
    install_requires=['flask', 'plotly', 'flask-cors', 'dash.ly']
)
