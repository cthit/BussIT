# -*- coding: utf-8 -*-

from setuptools import setup, find_packages

with open('README.rst') as f:
    readme = f.read()

with open('LICENSE') as f:
    license = f.read()

setup(
    name='BussIT-API',
    version='0.1.4',
    description='',
    long_description=readme,
    author='Anton Levholm',
    license=license,
    packages=find_packages(exclude=('tests', 'docs')),
    install_requires=['flask', 'requests',]
)
