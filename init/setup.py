from setuptools import setup

setup(
    name='<%= packageName %>',
    version='0.0.1',
    author='<%= packageGitHubOrg %>',
    packages=['dash', 'dash/development'],
    license='MIT',
    description='<%= packageDescription || packageName %>',
    install_requires=['flask', 'plotly', 'flask-cors', 'dash.ly']
)
